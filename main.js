// High-Performance Scroll-Based Frame Animation Engine
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');

// Generate 720 frame URLs across sequence-1, sequence-2, sequence-3
function generateFrameUrls() {
  const urls = [];
  const sequences = ['sequence-1', 'sequence-2', 'sequence-3'];
  for (const seq of sequences) {
    for (let i = 0; i < 240; i++) {
      const num = String(i).padStart(3, '0');
      urls.push(`/${seq}/frame_${num}_delay-0.041s.webp`);
    }
  }
  return urls;
}

const frameUrls = generateFrameUrls();
const TOTAL_FRAMES = frameUrls.length; // 720
const frameImages = new Array(TOTAL_FRAMES);
const loadedStatus = new Uint8Array(TOTAL_FRAMES);

let currentFrameIndex = 0;
let targetFrameIndex = 0;
let lastRenderedIndex = -1;

// Preload a single frame
function loadImage(index) {
  if (frameImages[index]) return Promise.resolve(frameImages[index]);

  return new Promise((resolve) => {
    const img = new Image();
    img.src = frameUrls[index];
    img.onload = () => {
      frameImages[index] = img;
      loadedStatus[index] = 1;
      resolve(img);
    };
    img.onerror = () => {
      resolve(null);
    };
  });
}

// Queue loader with controlled concurrency
async function loadIndicesQueue(indices, concurrency = 8) {
  let poolIndex = 0;
  async function worker() {
    while (poolIndex < indices.length) {
      const currentIndex = indices[poolIndex++];
      if (loadedStatus[currentIndex] === 0) {
        await loadImage(currentIndex);
      }
    }
  }
  const workers = [];
  for (let i = 0; i < Math.min(concurrency, indices.length); i++) {
    workers.push(worker());
  }
  await Promise.all(workers);
}

// Progressive Multi-tier Preloading
async function startProgressivePreload() {
  // Tier 1: Initial 30 frames for immediate visual feedback
  const tier1 = [];
  for (let i = 0; i < 30; i++) tier1.push(i);
  await loadIndicesQueue(tier1, 10);
  render();

  // Tier 2: Keyframe sparse sampling (every 5th frame across all 720)
  const tier2 = [];
  for (let i = 0; i < TOTAL_FRAMES; i += 5) {
    if (loadedStatus[i] === 0) tier2.push(i);
  }
  loadIndicesQueue(tier2, 8).then(() => {
    // Tier 3: Fill in all remaining frames
    const tier3 = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (loadedStatus[i] === 0) tier3.push(i);
    }
    loadIndicesQueue(tier3, 6);
  });
}

// Locate nearest loaded frame to guarantee zero black frames/flicker
function getNearestFrame(index) {
  const target = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(index)));
  if (loadedStatus[target] === 1) return frameImages[target];

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = target - offset;
    if (prev >= 0 && loadedStatus[prev] === 1) return frameImages[prev];
    const next = target + offset;
    if (next < TOTAL_FRAMES && loadedStatus[next] === 1) return frameImages[next];
  }
  return null;
}

// Draw image to canvas with cover fitting
function drawFrameToCanvas(img) {
  if (!img || !img.complete || !img.naturalWidth) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  // Cover aspect ratio calculations
  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const drawWidth = imgWidth * scale;
  const drawHeight = imgHeight * scale;
  const offsetX = (canvasWidth - drawWidth) / 2;
  const offsetY = (canvasHeight - drawHeight) / 2;

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Render call
function render() {
  const img = getNearestFrame(currentFrameIndex);
  if (img) {
    drawFrameToCanvas(img);
  }
}

// Calculate target frame index from scroll position
function updateTargetFrame() {
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));
  targetFrameIndex = scrollFraction * (TOTAL_FRAMES - 1);
}

// Continuous animation loop using requestAnimationFrame
function animationLoop() {
  updateTargetFrame();

  const diff = targetFrameIndex - currentFrameIndex;

  if (Math.abs(diff) > 0.0001) {
    // Lerp factor 0.15 for smooth inertia scroll
    currentFrameIndex += diff * 0.15;
    const roundedIndex = Math.round(currentFrameIndex);

    if (roundedIndex !== lastRenderedIndex || Math.abs(diff) > 0.01) {
      render();
      lastRenderedIndex = roundedIndex;
    }
  }

  requestAnimationFrame(animationLoop);
}

// Resize canvas handling with DPI scaling
function handleResize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  render();
}

// Touch & Keyboard Scroll Handling
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
  if (e.touches.length > 0) {
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;
    touchStartY = touchY;
    window.scrollBy(0, deltaY);
  }
}, { passive: true });

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    window.scrollBy({ top: 300, behavior: 'smooth' });
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    window.scrollBy({ top: -300, behavior: 'smooth' });
  }
});

// Event Listeners
window.addEventListener('resize', handleResize);

// Initialization
handleResize();
startProgressivePreload();
requestAnimationFrame(animationLoop);

// --- Calculator Logic ---
const billInput = document.getElementById('monthlyBill');
const areaInput = document.getElementById('rooftopArea');
const stateSelect = document.getElementById('stateLocation');
const unitButtons = document.querySelectorAll('.unit-toggle button');
const resultContainer = document.querySelector('.calc-result');

let isSqFt = true;
const emptyStateHTML = resultContainer.innerHTML;

function calculateSolar() {
  const bill = parseFloat(billInput.value);
  const area = parseFloat(areaInput.value);
  const state = stateSelect.value;
  const areaUnit = isSqFt ? 'Sq. Ft.' : 'Sq. Meters';
  
  if (!bill || !area || bill <= 0 || area <= 0) {
    resultContainer.innerHTML = emptyStateHTML;
    return;
  }
  
  // 2026 Tariff Rates (INR per kWh)
  const stateTariffs = {
      "Bihar": 7.42,
      "Maharashtra": 9.80,
      "Gujarat": 5.20,
      "Karnataka": 7.40,
      "Other": 7.20
  };

  const tariff = stateTariffs[state] || stateTariffs["Other"];
  const generationPerKw = 120; // units per month
  const sqFtPerKw = 130; 
  
  let areaInSqFt = area;
  if (areaUnit === 'Sq. Meters') {
      areaInSqFt = area * 10.764;
  }

  let unitsConsumed = bill / tariff;
  let requiredKw = unitsConsumed / generationPerKw;
  let maxKwByArea = areaInSqFt / sqFtPerKw;

  let systemSizeKw = Math.min(requiredKw, maxKwByArea);
  systemSizeKw = Math.round(systemSizeKw * 2) / 2;
  if (systemSizeKw < 1) systemSizeKw = 1;

  let costPerKw = systemSizeKw <= 3 ? 60000 : 55000;
  let grossCost = systemSizeKw * costPerKw;

  let subsidy = 0;
  if (systemSizeKw <= 2) {
      subsidy = systemSizeKw * 30000;
  } else if (systemSizeKw > 2 && systemSizeKw <= 3) {
      subsidy = 60000 + ((systemSizeKw - 2) * 18000);
  } else {
      subsidy = 78000;
  }

  let netCost = grossCost - subsidy;
  let estimatedGeneration = systemSizeKw * generationPerKw;
  
  let monthlySavings = estimatedGeneration * tariff;
  if (monthlySavings > bill) {
      monthlySavings = bill; 
  }

  let annualSavings = monthlySavings * 12;
  let paybackPeriod = netCost / annualSavings;

  let grossLifetimeSavings = annualSavings * 25;
  let lifetimeMaintenanceCost = grossLifetimeSavings * 0.10; 
  let actualNetProfit = grossLifetimeSavings - lifetimeMaintenanceCost - netCost;
  let roiPercentage = (actualNetProfit / netCost) * 100;
  
  // Show calculating state
  resultContainer.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px;">
      <svg id="gsap-spinner" width="40" height="40" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="var(--color-green)" stroke-width="4" stroke-dasharray="80" stroke-dashoffset="40"/>
      </svg>
      <h3 style="color:var(--color-white); font-weight:700;">Running Physics Engine...</h3>
    </div>
  `;

  // Animate the spinner
  gsap.to('#gsap-spinner', { rotation: 360, repeat: -1, duration: 1, ease: 'linear' });

  // Simulate calculation delay, then show results
  setTimeout(() => {
    resultContainer.innerHTML = `
      <h3 id="gsap-header" style="font-size: 1.5rem; color: var(--color-white); margin-bottom: 12px; font-weight: 800; opacity: 0; transform: translateY(10px);"><span id="gsap-size">0</span> kW System</h3>
      <div id="gsap-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; text-align: left; opacity: 0; transform: translateY(10px);">
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Net Cost</span>
          <strong style="font-size: 1.1rem; color: var(--color-white);">₹<span id="gsap-net">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Subsidy</span>
          <strong style="font-size: 1.1rem; color: var(--color-green);">₹<span id="gsap-subsidy">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Monthly Savings</span>
          <strong style="font-size: 1.1rem; color: var(--color-green);">₹<span id="gsap-savings">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Payback Period</span>
          <strong style="font-size: 1.1rem; color: var(--color-white);"><span id="gsap-payback">0</span> Years</strong>
        </div>
      </div>

      <h4 id="gsap-header-2" style="font-size: 1.1rem; color: var(--color-white); margin-top: 24px; margin-bottom: 12px; font-weight: 700; opacity: 0; transform: translateY(10px);">25-Year Profit & Loss Projection</h4>
      <div id="gsap-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; text-align: left; opacity: 0; transform: translateY(10px);">
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Total Savings</span>
          <strong style="font-size: 1.1rem; color: var(--color-green);">₹<span id="gsap-life-savings">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Est. Maintenance</span>
          <strong style="font-size: 1.1rem; color: var(--color-white);">₹<span id="gsap-maintenance">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Net Profit</span>
          <strong style="font-size: 1.1rem; color: var(--color-green);">₹<span id="gsap-profit">0</span></strong>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); display:block;">Lifetime ROI</span>
          <strong style="font-size: 1.1rem; color: var(--color-white);"><span id="gsap-roi">0</span>%</strong>
        </div>
      </div>
    `;

    gsap.to(['#gsap-header', '#gsap-grid', '#gsap-header-2', '#gsap-grid-2'], { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' });

    const obj = { size: 0, net: 0, subsidy: 0, savings: 0, payback: 0, lifeSavings: 0, maintenance: 0, profit: 0, roi: 0 };
    gsap.to(obj, {
      size: systemSizeKw,
      net: netCost,
      subsidy: subsidy,
      savings: monthlySavings,
      payback: paybackPeriod,
      lifeSavings: grossLifetimeSavings,
      maintenance: lifetimeMaintenanceCost,
      profit: actualNetProfit,
      roi: roiPercentage,
      duration: 1.5,
      ease: 'power4.out',
      onUpdate: () => {
        document.getElementById('gsap-size').innerText = obj.size.toFixed(1);
        document.getElementById('gsap-net').innerText = Math.round(obj.net).toLocaleString('en-IN');
        document.getElementById('gsap-subsidy').innerText = Math.round(obj.subsidy).toLocaleString('en-IN');
        document.getElementById('gsap-savings').innerText = Math.round(obj.savings).toLocaleString('en-IN');
        document.getElementById('gsap-payback').innerText = obj.payback.toFixed(1);
        
        document.getElementById('gsap-life-savings').innerText = Math.round(obj.lifeSavings).toLocaleString('en-IN');
        document.getElementById('gsap-maintenance').innerText = Math.round(obj.maintenance).toLocaleString('en-IN');
        document.getElementById('gsap-profit').innerText = Math.round(obj.profit).toLocaleString('en-IN');
        document.getElementById('gsap-roi').innerText = Math.round(obj.roi).toLocaleString('en-IN');
      }
    });
  }, 1200);
}

const calculateBtn = document.getElementById('calculateBtn');
if (calculateBtn) {
  calculateBtn.addEventListener('click', calculateSolar);

  unitButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      unitButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      isSqFt = (index === 0);
    });
  });
}
