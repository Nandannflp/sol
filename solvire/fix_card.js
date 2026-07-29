const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');
content = content.replace(
  '<div className="bg-transparent border border-white/20 rounded-[24px] p-6 lg:p-8 flex-1 group">',
  '<TiltCard className="bg-transparent border border-white/20 rounded-[24px] p-6 lg:p-8 flex-1 group">'
);
content = content.replace(
  `                  <button className="flex items-center gap-3 border border-white/30 text-white px-5 py-2 rounded-full font-bold tracking-tight text-xs hover:bg-white hover:text-black transition-colors">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 bg-white text-black rounded-full p-0.5" />
                  </button>
                </div>
              </div>`,
  `                  <button className="flex items-center gap-3 border border-white/30 text-white px-5 py-2 rounded-full font-bold tracking-tight text-xs hover:bg-white hover:text-black transition-colors">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 bg-white text-black rounded-full p-0.5" />
                  </button>
                </div>
              </TiltCard>`
);
fs.writeFileSync('app/page.tsx', content);
