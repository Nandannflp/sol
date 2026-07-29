const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

const oldLeftContent = `{/* Left Content */}
            <div className="flex-1 z-10 max-w-xl">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white uppercase mb-8 w-fit bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Our Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                Harness the Sun<br />Energy Solutions
              </h2>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Explore our range of solar services designed to reduce your energy bills, lower carbon footprint, and ensure long-term environmental and financial benefits.
              </p>
            </div>`;

const newLeftContent = `{/* Left Content */}
            <div className="flex-1 z-10 w-full lg:max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white uppercase mb-8 w-fit bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Our Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                Harness the Sun<br />Energy Solutions
              </h2>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
                Explore our comprehensive range of solar services designed to reduce your energy bills, lower carbon footprint, and ensure long-term environmental and financial benefits.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Residential Solar Installation",
                  "Commercial Solar Installation",
                  "Industrial Solar Solutions",
                  "On-Grid Solar System",
                  "Off-Grid Solar System",
                  "Hybrid Solar System",
                  "Solar Water Pump Installation",
                  "Solar Street Light Installation",
                  "Solar Battery & Inverter Solutions",
                  "Solar Panel Cleaning & Maintenance",
                  "Annual Maintenance Contract (AMC)",
                  "System Repair & Upgradation",
                  "Net Metering Assistance",
                  "Site Survey & Energy Audit",
                  "Customized Solar Design",
                  "Subsidy & Documentation Support",
                  "Financing / EMI Assistance",
                  "Free Site Visit*",
                  "Free Consultation*"
                ].map((service, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-white/90 whitespace-nowrap cursor-default">
                    {service}
                  </div>
                ))}
              </div>
            </div>`;

content = content.replace(oldLeftContent, newLeftContent);

content = content.replace(
  'className="bg-black text-white rounded-[32px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden"',
  'className="bg-black text-white rounded-[32px] p-8 lg:p-16 flex flex-col xl:flex-row items-start xl:items-center gap-16 relative overflow-hidden"'
);

fs.writeFileSync('app/page.tsx', content);
