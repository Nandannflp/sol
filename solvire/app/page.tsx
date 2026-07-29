import Image from 'next/image';
import {
  ArrowUpRight,
  Play,
  Leaf,
  BadgeCheck,
  Wrench,
  PiggyBank,
  ArrowUp,
  ArrowDown,
  Star,
  Twitter,
  Linkedin,
  Facebook,
  Sun,
  Menu
} from 'lucide-react';

import { SolvireLogo } from '@/components/solvire-logo';
import { SolarCalculator } from '@/components/solar-calculator';
import { FaqAccordion } from '@/components/faq-accordion';
import { BackToTop } from '@/components/back-to-top';
import { ScrollReveal } from '@/components/scroll-reveal';
import { TiltCard } from '@/components/tilt-card';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-slate-200">
      <main className="pb-24">
        {/* HERO SECTION */}
        <section id="home" className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8 pt-4">
          <div className="relative border border-slate-100 overflow-hidden bg-black min-h-[90vh] flex flex-col rounded-[32px]">
            {/* Background Image */}
            <Image
              src="https://picsum.photos/seed/solarhero/1920/1080"
              fill
              className="object-cover opacity-70"
              alt="Futuristic solar integrated house"
              referrerPolicy="no-referrer"
              priority
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

            {/* Header / Navbar */}
            <header className="relative z-20 flex items-center justify-between p-6 lg:px-10">
              <div className="flex items-center gap-2">
                <SolvireLogo className="w-8 h-8" />
                <span className="text-white font-black text-xl tracking-tighter uppercase">Solvire</span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-6 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-xs text-white font-bold tracking-tight uppercase">
                <a href="#home" className="bg-green-600 text-white px-4 py-1.5 rounded-full">Home</a>
                <a href="#about" className="text-white hover:text-orange-400 transition-colors">About</a>
                <a href="#services" className="text-white hover:text-orange-400 transition-colors">Services</a>
                <a href="#team" className="text-white hover:text-orange-400 transition-colors">Team</a>
                <a href="#calculator" className="text-white hover:text-orange-400 transition-colors">Calculator</a>
                <a href="#faq" className="text-white hover:text-orange-400 transition-colors">FAQ</a>
                <a href="#contact" className="text-white hover:text-orange-400 transition-colors">Contact</a>
              </nav>

              <button className="lg:hidden text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </header>

            {/* Huge Typography positioned behind the bottom content but above the background */}
            <div className="absolute top-[10%] sm:top-[15%] lg:top-[20%] left-0 right-0 z-10 flex justify-center w-full px-4 pointer-events-none opacity-10 sm:opacity-20 lg:opacity-100">
              <h1 className="text-white/90 text-[20vw] sm:text-[28vw] lg:text-[18vw] leading-[0.85] lg:leading-[0.8] font-medium tracking-tighter text-center flex flex-col sm:flex-row flex-wrap justify-center sm:gap-x-[2vw]">
                <span>Solar</span> <span>Power</span>
              </h1>
            </div>

            {/* Main Content (Bottom part of hero) */}
            <div className="relative z-20 flex-1 flex flex-col justify-end p-6 lg:p-12 pb-10">
              <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-10 mt-auto">
                
                {/* Left Content */}
                <div className="max-w-xl w-full">
                  <div className="flex items-center gap-2 mb-6 w-fit">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 text-xs font-black uppercase tracking-widest">Renew. Power. Thrive.</span>
                  </div>
                  <h2 className="text-white text-5xl md:text-[3.5rem] font-medium leading-tight mb-8 text-balance">
                    Clean Energy,<br className="hidden md:block" />Infinite Possibilities
                  </h2>
                  <button className="flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold tracking-tight text-sm hover:bg-slate-200 transition-colors w-fit">
                    Get Started
                    <ArrowUpRight className="w-8 h-8 bg-black text-white rounded-full p-2" />
                  </button>
                </div>

                {/* Right Content / Stats Card */}
                <div className="flex flex-col sm:flex-row gap-8 items-center bg-black/40 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 lg:p-8 w-full xl:w-auto">
                  {/* Stats */}
                  <div className="flex flex-row sm:flex-col gap-8 sm:pr-8 sm:border-r border-white/20 w-full sm:w-auto justify-around">
                    <div>
                      <span className="text-white text-4xl font-medium tracking-tighter">72%</span>
                      <div className="h-1 w-10 bg-white mt-3 rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-white text-4xl font-medium tracking-tighter text-white/50">89%</span>
                      <div className="h-1 w-10 bg-white/30 mt-3 rounded-full"></div>
                    </div>
                  </div>

                  {/* Video/Info Card */}
                  <div className="flex gap-5 items-center w-full sm:w-auto">
                    <div className="relative w-32 h-32 overflow-hidden shrink-0 group cursor-pointer border border-white/20 rounded-[16px]">
                      <Image 
                        src="https://picsum.photos/seed/solarpanel/400/400" 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        alt="Solar panel installation" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/30 backdrop-blur-md p-3 transform transition-transform group-hover:scale-110 border border-white/20 rounded-full">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 max-w-[200px]">
                      <h3 className="text-white font-medium text-sm leading-tight mb-2">Accelerating<br />Renewable Energy<br />Expansion</h3>
                      <p className="text-white/60 text-[10px] leading-relaxed mb-4">
                        Discover how we&apos;re leading the charge in transforming energy systems with innovative renewable solutions.
                      </p>
                      <button className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-orange-400 transition-colors">
                        Get Started <Play className="w-3 h-3 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <ScrollReveal>
          <section id="about" className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left side Images */}
            <div className="flex flex-col gap-6">
              <div className="relative h-64 md:h-80 w-full rounded-[24px] overflow-hidden bg-slate-50">
                <Image src="https://picsum.photos/seed/village/800/600" fill className="object-cover" alt="Village solar panels" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-64 md:h-80 w-full rounded-[24px] overflow-hidden bg-slate-50">
                <Image src="https://picsum.photos/seed/lakesolar/800/600" fill className="object-cover" alt="Lake solar panels" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-32 md:h-40 w-full rounded-[24px] overflow-hidden bg-slate-50">
                <Image src="https://picsum.photos/seed/mountainsolar/800/300" fill className="object-cover" alt="Mountain solar panels" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Right side Content */}
            <div className="flex flex-col lg:py-8">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-orange-500 uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                Who We Are
              </div>
              
              <h2 className="text-3xl md:text-[2.5rem] font-medium leading-tight text-slate-950 mb-8">
                We provide sustainable and affordable solar energy solutions to power homes <span className="text-slate-400">and businesses, helping reduce energy costs and protect the environment for a cleaner future.</span>
              </h2>

              <div className="flex flex-wrap items-center gap-8 mb-16">
                <button className="bg-[#bbf7d0] text-black px-6 py-2.5 rounded-full font-bold tracking-tight text-sm flex items-center gap-2 hover:bg-[#86efac] transition-colors">
                  Read More
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
                        <Image src={`https://picsum.photos/seed/face${i}/100/100`} fill className="object-cover" alt="Customer avatar" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600 mt-1">500+ Happy Customers</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Feature 1 */}
                <div className="group p-8 rounded-[24px] bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <BadgeCheck className="w-8 h-8 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Certified Experts</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Experienced solar engineers and licensed technicians ready to guide you through buying and maintaining your system.</p>
                </div>
                {/* Feature 2 */}
                <div className="group p-8 rounded-[24px] bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <Leaf className="w-8 h-8 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Eco-Friendly Systems</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Environmentally conscious systems designed to maximize efficiency and longevity with proper care.</p>
                </div>
                {/* Feature 3 */}
                <div className="group p-8 rounded-[24px] bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <Wrench className="w-8 h-8 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Seamless Installation</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Hassle-free process from assessment and purchasing to activation and routine maintenance.</p>
                </div>
                {/* Feature 4 */}
                <div className="group p-8 rounded-[24px] bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <PiggyBank className="w-8 h-8 text-slate-900" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Long-Term Savings</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Reduce utility bills and protect your investment with our all-rounder solar services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* OUR SERVICES SECTION */}
        <ScrollReveal>
          <section id="services" className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <div className="bg-black text-white rounded-[32px] p-8 lg:p-16 flex flex-col xl:flex-row items-start xl:items-center gap-16 relative overflow-hidden">
            {/* Background Accent (optional subtle glow) */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Content */}
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
            </div>

            {/* Right Card */}
            <div className="flex-1 w-full flex items-center gap-6 z-10">
              <TiltCard className="bg-transparent border border-white/20 rounded-[24px] p-6 lg:p-8 flex-1 group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden mb-6 rounded-[16px]">
                  <Image 
                    src="https://picsum.photos/seed/roofsolar/800/600" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Residential Solar" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#bbf7d0] text-black text-[10px] font-bold px-3 py-1.5 flex items-center gap-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    5.0
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3">Residential Solar Installation</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Custom solar panel systems for homes, ensuring efficient and cost-saving clean energy. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                </p>
                
                <div className="flex items-center pt-6 border-t border-white/20">
                  <button className="flex items-center gap-3 border border-white/30 text-white px-5 py-2 rounded-full font-bold tracking-tight text-xs hover:bg-white hover:text-black transition-colors">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 bg-white text-black rounded-full p-0.5" />
                  </button>
                </div>
              </TiltCard>

              {/* Navigation Arrows */}
              <div className="hidden sm:flex flex-col items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-[#bbf7d0] text-black flex items-center justify-center hover:bg-[#86efac] transition-colors">
                  <ArrowUp className="w-5 h-5" />
                </button>
                <div className="w-[1px] h-12 bg-white/20"></div>
                <button className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ArrowDown className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* MEET EXPERTS SECTION */}
        <ScrollReveal>
          <section id="team" className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side Images Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[600px]">
              <div className="flex flex-col gap-4 sm:gap-6 h-full">
                <div className="relative flex-1 overflow-hidden rounded-[24px] bg-slate-50">
                   <Image src="https://picsum.photos/seed/expert1/400/400" fill className="object-cover" alt="Solar work" referrerPolicy="no-referrer" />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-[24px] bg-slate-50">
                   <Image src="https://picsum.photos/seed/expert2/400/400" fill className="object-cover" alt="Solar work" referrerPolicy="no-referrer" />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-[24px] bg-slate-50">
                   <Image src="https://picsum.photos/seed/expert3/400/400" fill className="object-cover" alt="Solar work" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="relative h-full overflow-hidden rounded-[24px] bg-slate-50">
                 <Image src="https://picsum.photos/seed/expertmain/800/1200" fill className="object-cover" alt="Solar landscape" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Right side Content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-orange-500 uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-[#16a34a] rounded-full animate-pulse" />
                Meet Experts
              </div>
              
              <h2 className="text-4xl md:text-[3.5rem] font-medium leading-tight text-slate-950 mb-6">
                Passionate People<br />Behind Your Solar
              </h2>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg">
                Our dedicated team combines expertise and passion to deliver the best in solar energy innovation.
              </p>

              {/* Expert Profile Card */}
              <div className="bg-slate-50 rounded-[24px] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                    <Image src="https://picsum.photos/seed/alicia/200/200" fill className="object-cover" alt="Alicia Green" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950">Alicia Green</h4>
                    <p className="text-xs text-slate-500">Chief Solar Engineer</p>
                  </div>
                </div>
                
                <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                  Oversees our comprehensive maintenance programs and ensures every system we sell meets rigorous quality standards for long-term reliability.
                </p>
                
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-black shadow-sm transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-black shadow-sm transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-black shadow-sm transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

        {/* CALCULATOR SECTION */}
        <ScrollReveal>
          <section id="calculator" className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[3.5rem] font-medium leading-tight text-slate-950 mb-4">
              See How Much You Could Save
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Use our simple calculator to estimate your potential savings and visualize your expected energy generation.
            </p>
          </div>
          <SolarCalculator />
          </section>
        </ScrollReveal>

        {/* FAQ SECTION */}
        <ScrollReveal>
          <section id="faq" className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24">
            <div className="text-center mb-12">
            <h2 className="text-4xl md:text-[3.5rem] font-medium leading-tight text-slate-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Find answers to common questions about solar maintenance, installation costs, and long-term benefits.
            </p>
          </div>
          <FaqAccordion />
          </section>
        </ScrollReveal>

        {/* CONTACT SECTION */}
        <ScrollReveal>
          <section id="contact" className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24 bg-slate-50 rounded-[32px] mb-8 text-center">
            <h2 className="text-4xl font-medium mb-6">Ready to switch to solar?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">Contact us today to schedule a free consultation and learn how you can save on your energy bills.</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold tracking-tight hover:bg-green-700 transition-colors">
            Contact Us
            </button>
          </section>
        </ScrollReveal>

        {/* FOOTER & NEWSLETTER SECTION */}
        <ScrollReveal>
          <footer className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 bg-black text-white rounded-[32px] mb-8 border border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <SolvireLogo className="w-8 h-8" />
              <span className="text-white font-black text-xl tracking-tighter uppercase">Solvire</span>
            </div>
            <h3 className="text-2xl font-medium mb-2">Subscribe to our Newsletter</h3>
            <p className="text-white/60 text-sm max-w-md mx-auto lg:mx-0">
              Get the latest updates on solar technology, exclusive offers, and energy-saving tips delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex w-full md:max-w-md mx-auto flex-col sm:flex-row gap-3">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-bold tracking-tight hover:bg-green-700 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
          </footer>
        </ScrollReveal>
      </main>
      <BackToTop />
    </div>
  );
}
