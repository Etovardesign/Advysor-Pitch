import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  TrendingDown, 
  BarChart3, 
  Target, 
  BrainCircuit, 
  LayoutTemplate, 
  Share2, 
  PieChart, 
  Handshake, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SlideHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-10 w-full px-8 md:px-16 pt-10">
    <div className="flex flex-col mb-3">
      {Icon && (
        <div className="mb-6 w-10 h-10 p-2 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 flex items-center justify-center">
          <Icon size={20} />
        </div>
      )}
      <h2 className="text-[48px] md:text-[64px] leading-[0.85] font-bold tracking-tighter text-white uppercase">{title}</h2>
    </div>
    {subtitle && <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-light mt-6">{subtitle}</p>}
    <div className="mt-8 flex items-center gap-6">
      <div className="h-px w-12 bg-blue-600" />
      <div className="h-px w-full bg-white/5" />
    </div>
  </div>
);

// SLIDE 1: Title
const Slide1 = () => (
  <div className="h-full w-full flex relative overflow-hidden pointer-events-none">
    {/* Content */}
    <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[9px] uppercase font-bold tracking-widest border border-blue-500/20 rounded">STRATEGIC PARTNERSHIP PROPOSAL</span>
        <span className="text-white/30 text-[10px] uppercase tracking-widest">// Precision Marketing</span>
      </div>
      <h1 className="text-[54px] md:text-[84px] leading-[0.85] font-bold tracking-tighter mb-8 uppercase">
        THE AI-DRIVEN<br/>
        <span className="text-blue-600">ENGINE</span><br/>
      </h1>
      <p className="text-[12px] uppercase tracking-[0.3em] font-medium text-white/50 mb-8 mt-[-10px]">
        For Advysor.com
      </p>
      <p className="text-lg text-white/60 max-w-md leading-relaxed font-light">
        Scaling Inbound Leads with Next-Gen Ad Workflows & Predictive Creative Models.
      </p>
      <div className="mt-12 flex items-center gap-6 relative">
        <div className="h-px w-12 bg-blue-600" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Prepared for Danielle | CRO, Advysor</span>
      </div>
    </div>

    {/* Visual Accent Section */}
    <div className="hidden lg:flex w-2/5 relative bg-[#111] overflow-hidden items-center justify-center">
      {/* Abstract Geometric Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-blue-500/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-white w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <BrainCircuit size={200} />
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 2: Industry Problem
const Slide2 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={TrendingDown} 
      title="The Landscape" 
      subtitle="The Evolution of Lead Generation & The B2B Growth Bottleneck" 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1 mt-4">
      <div className="flex flex-col justify-center space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 mb-2">B2B Marketing Has Changed</h3>
        <p className="text-lg text-white/60 leading-relaxed font-light">
          Traditional manual campaign management is sluggish. It relies on slow feedback loops, emotional creative decisions, and fragmented data analysis.
        </p>
        <div className="space-y-4 mt-6">
          {[
            "Wasted ad spend on underperforming creative.",
            "Sluggish scaling of optimization workflows.",
            "Misaligned creative-to-audience matching."
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="w-1 h-1 bg-rose-500 rounded-full mt-2.5 shrink-0" />
              <span className="text-white/80 font-light text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#111] border border-white/5 rounded-none p-10 flex flex-col justify-center relative overflow-hidden h-full max-h-[400px] my-auto">
        <div className="absolute top-[-20%] right-[-10%] p-8 opacity-[0.03]">
          <Target size={300} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="text-[84px] leading-[0.85] font-bold tracking-tighter text-blue-600">70%</div>
          <p className="text-lg text-white/60 font-light max-w-sm">of B2B decision-makers now prefer digital self-serve or remote human engagement.</p>
          <div className="h-px w-12 bg-blue-600 my-8" />
          <p className="text-[10px] uppercase tracking-widest text-white/30">Source: McKinsey B2B Pulse</p>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 3: Competitor Audit
const Slide3 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={Target} 
      title="Competitor Deep Dive" 
      subtitle="Auditing the Top 3 Market Leaders & Finding The Gap" 
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 pt-4">
      {[
        { name: "Competitor A", flaw: "Fragmented CTA paths", detail: "Active social, but no direct-response architecture." },
        { name: "Competitor B", flaw: "Static Creative Fatigue", detail: "Running the same 4 ad creatives for over 3 months." },
        { name: "Competitor C", flaw: "Misaligned Audience", detail: "Targeting entry-level rather than enterprise DM's." }
      ].map((comp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="bg-[#111] border border-white/5 rounded-none p-8 flex flex-col relative group hover:bg-[#1A1A1A] transition-colors"
        >
          <div className="text-blue-500 mb-8 border border-blue-500/20 bg-blue-500/10 w-8 h-8 rounded-sm flex items-center justify-center font-bold text-xs uppercase tracking-widest">
            0{i + 1}
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">{comp.name}</h3>
          <p className="text-rose-400 font-semibold mb-4 text-sm">{comp.flaw}</p>
          <p className="text-white/40 text-[13px] font-light leading-relaxed">{comp.detail}</p>
        </motion.div>
      ))}
    </div>
    <div className="mt-8 bg-blue-600/5 mx-auto border-l border-blue-600 p-6 flex flex-col md:flex-row items-center w-full justify-between">
      <div className="mr-6">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-blue-400">The Strategic Gap</h4>
        <p className="text-white/60 text-[13px] font-light mt-2 max-w-xl">None of them are utilizing real-time, AI-driven creative testing on Meta & LinkedIn.</p>
      </div>
      <div className="px-6 py-3 border border-white/10 text-white/70 font-semibold text-xs tracking-widest mt-4 md:mt-0 uppercase">
        Advysor's Advantage
      </div>
    </div>
  </div>
);

// SLIDE 4: Analytics Audit
const Slide4 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={BarChart3} 
      title="The Advysor Audit" 
      subtitle="Synthesizing Your Current Analytics & Funnel Bottlenecks" 
    />
    <div className="flex-1 flex flex-col md:flex-row gap-12 mt-4">
      <div className="flex-1 bg-[#111] border border-white/5 p-10 flex flex-col relative overflow-hidden">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-8 relative z-10 w-full border-b border-white/10 pb-4">Current State Analysis</h3>
        <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-white/40 text-[11px] font-light uppercase tracking-wider">Impression Volume</span>
            <span className="text-white/80 font-medium text-sm">Strong Baseline</span>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-white/40 text-[11px] font-light uppercase tracking-wider">Click-Through Rate</span>
            <span className="text-amber-500/80 font-medium text-sm">Underperforming</span>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-white/40 text-[11px] font-light uppercase tracking-wider">Cost Per Lead</span>
            <span className="text-rose-500/80 font-medium text-sm">High Variance</span>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-white/40 text-[11px] font-light uppercase tracking-wider">Conversion Arch.</span>
            <span className="text-amber-500/80 font-medium text-sm">Friction Found</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center space-y-12 pl-4">
        <div className="relative border-l border-white/5 pl-8">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">The Good News</h4>
          <p className="text-white/60 font-light text-sm leading-loose">
            The foundation is there. The high variance in CPL indicates that when the messaging hits, it converts well, but the delivery mechanism is inconsistent.
          </p>
        </div>
        <div className="relative border-l border-blue-600 pl-8">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-3">The Opportunity</h4>
          <p className="text-white/60 font-light text-sm leading-loose">
            These high CPL areas can be aggressively optimized. By tightening the creative testing loop with AI, we see a clear path to potentially <strong className="text-white font-medium">doubling conversion rates</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 5: AI Approach
const Slide5 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={BrainCircuit} 
      title="Our AI Approach" 
      subtitle="Claude Code & Gemini: The New Creative Engineering Paradigm" 
    />
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
      <div className="space-y-10">
        <p className="text-[13px] text-white/50 leading-loose font-light">
          We act as your growth engineers. We focus on high-level strategy and psychology, while Claude Code and Gemini handle the micro-optimizations and creative scaling.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4 items-start border-l border-white/5 pl-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70 mb-1">Automated Generation</h4>
              <p className="text-white/40 text-[13px] font-light mt-2 leading-relaxed">Generating hundreds of tailored ad copy variants & visual structures based on real-time market sentiment.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start border-l border-white/5 pl-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70 mb-1">Predictive Testing</h4>
              <p className="text-white/40 text-[13px] font-light mt-2 leading-relaxed">AI pre-evaluates creative combinations before spend is allocated, identifying high-probability winners.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start border-l border-white/5 pl-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70 mb-1">Rapid Iteration</h4>
              <p className="text-white/40 text-[13px] font-light mt-2 leading-relaxed">What used to take a creative team 3 weeks, we execute in 3 days with programmatic generation workflows.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:pl-10">
        <div className="bg-[#0A0A0A] border border-white/10 p-8 font-mono text-[11px] overflow-hidden shadow-2xl">
          <div className="flex space-x-2 mb-6 border-b border-white/5 pb-4">
            <span className="text-white/30 uppercase tracking-[0.3em]">Execution_Log_04</span>
          </div>
          <div className="text-white/40 space-y-3 leading-loose">
            <p><span className="text-blue-400/80">system:</span> Initialize Advantage+ Meta Sandbox</p>
            <p><span className="text-blue-400/80">agent:</span> Generating 150 copy variants targeting CROs...</p>
            <p><span className="text-blue-400/80">agent:</span> Analyzing historical CPL data...</p>
            <p className="text-green-400/80">&gt;&gt; Success: Identified 3 core winning angles.</p>
            <p><span className="text-blue-400/80">agent:</span> Deploying dynamic creative optimization via API.</p>
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-1.5 h-3 bg-white/60 inline-block mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 6: Meta Sandbox
const Slide6 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={LayoutTemplate} 
      title="The Meta Sandbox" 
      subtitle="Rebuilding Facebook & Instagram for Algorithmic Scale" 
    />
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
      <div className="md:col-span-1 border border-white/10 bg-[#111] rounded-none p-10 flex flex-col justify-between">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 mb-4 border-b border-white/5 pb-4">Structural Reset</h3>
        <p className="text-white/60 font-light text-[13px] leading-loose mb-12">
          We are moving away from hyper-segmented, rigid campaign structures that choke the algorithm.
        </p>
        <div className="mt-auto">
          <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Old Way</div>
          <div className="text-white/40 line-through mb-6 text-xs font-light">20+ Ad Sets, Micro-Targeting, Static Ads</div>
          <div className="text-[9px] uppercase tracking-widest text-blue-400 mb-2">New Way</div>
          <div className="text-white/80 font-medium text-[13px] leading-relaxed">Account Simplification + Dynamic Creative Optimization</div>
        </div>
      </div>
      <div className="md:col-span-2 grid grid-rows-2 gap-8">
        <div className="border border-white/10 p-8 flex items-start gap-8 bg-[#0A0A0A]">
          <div className="w-12 h-12 shrink-0 border border-white/5 bg-[#111] flex items-center justify-center">
            <Share2 className="text-white/40" size={20} />
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70 mb-2">Broad Targeting + AI Sorting</h4>
            <p className="text-white/40 text-[13px] leading-loose font-light">
              We let Meta's machine learning find the buyers by feeding it high-quality, algorithmically generated creative data points, rather than restricting it with manual audience assumptions.
            </p>
          </div>
        </div>
        <div className="border border-white/10 p-8 flex items-start gap-8 bg-[#0A0A0A]">
          <div className="w-12 h-12 shrink-0 border border-white/5 bg-[#111] flex items-center justify-center">
            <LayoutTemplate className="text-white/40" size={20} />
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70 mb-2">The Creative as Targeting</h4>
            <p className="text-white/40 text-[13px] leading-loose font-light">
              Your ad creative IS the targeting. We utilize AI to map out specific pain points in the video hook/image copy, instantly qualifying High-Intent leads and repelling bad fits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 7: Total Ecosystem (LinkedIn & Google)
const Slide7 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={Share2} 
      title="The Total Ecosystem" 
      subtitle="Scaling Beyond Meta: LinkedIn & Google Ads Integration" 
    />
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 content-center mt-4">
      <div className="group relative border border-white/10 bg-[#111] p-10 h-full">
        <div className="flex justify-between items-center border-b border-white/5 pb-6 mb-6">
          <h3 className="text-[18px] font-bold text-white tracking-wider">LinkedIn Ads</h3>
          <span className="px-2 py-1 bg-white/5 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">B2B Core</span>
        </div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-4">Precision ABM</h4>
        <p className="text-white/40 text-[13px] leading-loose font-light mb-8">
          We use Claude to craft hyper-personalized outreach and scalable ad copy targeted specifically at CROs, CMOs, and VP-level decision-makers.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-[13px] text-white/60 font-light gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Document Ads for Lead Gen</li>
          <li className="flex items-center text-[13px] text-white/60 font-light gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> AI-optimized Thought Leadership format</li>
        </ul>
      </div>

      <div className="group relative border border-white/10 bg-[#111] p-10 h-full">
        <div className="flex justify-between items-center border-b border-white/5 pb-6 mb-6">
          <h3 className="text-[18px] font-bold text-white tracking-wider">Google Ads</h3>
          <span className="px-2 py-1 bg-white/5 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">Intent Capture</span>
        </div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-4">High-Intent Search Aggregation</h4>
        <p className="text-white/40 text-[13px] leading-loose font-light mb-8">
          Capturing lower-funnel demand with dynamically adjusted bidding strategies and AI-generated responsive search ads that match user intent perfectly.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-[13px] text-white/60 font-light gap-3"><div className="w-1 h-1 bg-teal-500 rounded-full" /> Performance Max setups</li>
          <li className="flex items-center text-[13px] text-white/60 font-light gap-3"><div className="w-1 h-1 bg-teal-500 rounded-full" /> Value-based bidding integration</li>
        </ul>
      </div>
    </div>
  </div>
);

// SLIDE 8: Ad Spend
const Slide8 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12">
    <SlideHeader 
      icon={PieChart} 
      title="Ad Spend & Workflows" 
      subtitle="Structuring Budgets for Maximum Return on Ad Spend (ROAS)" 
    />
    <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center mt-4">
      <div className="flex-1 space-y-12 w-full">
        <div className="border border-white/10 p-8 relative overflow-hidden bg-[#111]">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 mb-6">Phase 1: Discovery & Validation</h4>
          <div className="flex items-baseline gap-4 mb-4 border-b border-white/5 pb-4">
            <span className="text-[48px] font-black text-white/20 tracking-tighter">20%</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Budget Allocation</span>
          </div>
          <p className="text-[13px] text-white/40 font-light leading-loose">
            Feeding the AI Sandbox. We run high-volume, low-spend micro-tests on Meta to validate copy angles, hooks, and audience resonance without burning capital.
          </p>
        </div>
        <div className="border border-white/10 p-8 relative overflow-hidden bg-[#111]">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-blue-400 mb-6">Phase 2: Scale & Consolidate</h4>
          <div className="flex items-baseline gap-4 mb-4 border-b border-white/5 pb-4">
            <span className="text-[48px] font-black text-blue-600 tracking-tighter">80%</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Budget Allocation</span>
          </div>
          <p className="text-[13px] text-white/40 font-light leading-loose">
            Budget shifts aggressively to winning ad-sets identified by our predictive models. We stop spreading budget too thin across micro-campaigns and let ML distribute based purely on ROAS.
          </p>
        </div>
      </div>
      <div className="flex-1 lg:pl-12 lg:border-l border-white/5 py-8 w-full">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 mb-8 border-b border-white/5 pb-4 inline-block">Our Perspective</h3>
        <div className="space-y-6 text-[14px] text-white/60 font-light leading-loose tracking-wide">
          <p>
            The biggest mistake agencies make post-setup is <strong className="text-white font-medium">over-tinkering</strong>. 
          </p>
          <p>
            Once our automated workflows identify a winning structure, the objective shifts from manual adjustment to feeding the machine better data (offline conversions, high-value lead tracking). 
          </p>
          <p>
            We don't get emotional about creative. We let the data dictate the spend, and we use our elite creative capabilities to continuously refresh the assets that fuel the algorithm.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE 9: Next Steps
const Slide9 = () => (
  <div className="h-full w-full flex flex-col relative px-8 md:px-16 pb-12 pt-24 border border-white/5 bg-[#111] my-8 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
      <Handshake size={500} />
    </div>
    
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-16 h-16 border-2 border-white/10 flex items-center justify-center mb-12 shadow-2xl relative"
      >
        <div className="absolute inset-2 border border-white/5"></div>
        <ArrowRight size={24} className="text-white/40" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[64px] md:text-[84px] leading-[0.85] font-bold tracking-tighter text-white mb-8 uppercase"
      >
        THE NEXT<br/>
        <span className="text-blue-600">STEP</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[14px] text-white/50 leading-loose font-light mb-16 max-w-xl"
      >
        We bring a world-class creative agency mindset paired with elite technical execution. We don't just run ads; we build growth engines.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="inline-flex flex-col items-center group pointer-events-auto cursor-pointer"
      >
        <div className="px-8 py-4 bg-white text-black font-semibold tracking-widest text-[11px] uppercase flex items-center gap-4 transition-transform group-hover:scale-105 mb-6">
          <span>Schedule Deep-Dive Workshop</span>
          <ArrowRight size={14} />
        </div>
        <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">Goal: Align on Q3/Q4 KPIs & setup requirements.</p>
      </motion.div>
    </div>
  </div>
);

export const slides = [
  { id: '1', component: Slide1 },
  { id: '2', component: Slide2 },
  { id: '3', component: Slide3 },
  { id: '4', component: Slide4 },
  { id: '5', component: Slide5 },
  { id: '6', component: Slide6 },
  { id: '7', component: Slide7 },
  { id: '8', component: Slide8 },
  { id: '9', component: Slide9 },
];
