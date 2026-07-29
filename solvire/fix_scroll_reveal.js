const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

content = content.replace(/\s*<\/div>\n\s*<\/div>\n\s*<\/section>\n\s*{\/\* OUR SERVICES SECTION \*\/}\n\s*<section id="services"/, `
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* OUR SERVICES SECTION */}
        <ScrollReveal>
          <section id="services"`);

content = content.replace(/\s*<\/div>\n\s*<\/div>\n\s*<\/section>\n\s*{\/\* MEET EXPERTS SECTION \*\/}\n\s*<section id="team"/, `
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* MEET EXPERTS SECTION */}
        <ScrollReveal>
          <section id="team"`);

content = content.replace(/\s*<\/div>\n\s*<\/div>\n\s*<\/section>\n\s*{\/\* CALCULATOR SECTION \*\/}\n\s*<section id="calculator"/, `
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* CALCULATOR SECTION */}
        <ScrollReveal>
          <section id="calculator"`);

// Let's check footer
content = content.replace(/\s*{\/\* FOOTER & NEWSLETTER SECTION \*\/}\n\s*<footer/, `
        {/* FOOTER & NEWSLETTER SECTION */}
        <ScrollReveal>
          <footer`);

content = content.replace(/\s*<\/footer>\n\s*<\/main>/, `
          </footer>
        </ScrollReveal>
      </main>`);

fs.writeFileSync('app/page.tsx', content);
