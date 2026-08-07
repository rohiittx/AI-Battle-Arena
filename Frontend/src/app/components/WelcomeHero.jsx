import React from 'react'
import { Swords, Bot, Scale, Sparkles, Zap, ArrowRight, CheckCircle } from 'lucide-react'

export default function WelcomeHero({ onSelectPrompt }) {
  const cards = [
    {
      title: 'Capital of India',
      prompt: 'what is the capital of India',
      desc: 'Compare concise direct response vs detailed geographical & administrative context.',
      badge: 'Popular Demo'
    },
    {
      title: 'React Hooks vs Context',
      prompt: 'Compare React Hooks and Context API with code examples',
      desc: 'Evaluate technical depth, code formatting, and practical usability.',
      badge: 'Code Comparison'
    },
    {
      title: 'Quantum Computing',
      prompt: 'Explain quantum computing to a 10 year old child',
      desc: 'Analyze simplicity of explanations, analogy quality, and engagement.',
      badge: 'Analogy Test'
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 text-center my-auto">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6 shadow-sm shadow-cyan-500/10">
        <Swords className="w-3.5 h-3.5 text-cyan-400" />
        <span>NEXT-GEN AI EVALUATION ARENA</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
        Two AI Solutions <span className="gradient-text-hero">One Independent Judge</span>
      </h1>
      <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Submit any question to trigger two AI model responses side-by-side. Our automated AI Judge inspects both solutions and delivers detailed scores and reasoning.
      </p>

      {/* Architecture Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-md">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
            <Bot className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-cyan-300 mb-1">SOLUTION 1</h3>
          <p className="text-xs text-gray-400">Direct, concise, and focused response delivery.</p>
        </div>

        <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 backdrop-blur-md">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
            <Bot className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-purple-300 mb-1">SOLUTION 2</h3>
          <p className="text-xs text-gray-400">Comprehensive, detailed context & extra depth.</p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 backdrop-blur-md">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-amber-300 mb-1">JUDGE RECOMMENDATION</h3>
          <p className="text-xs text-gray-400">Independent score (out of 10) & verdict reasoning.</p>
        </div>
      </div>

      {/* Preset Demo Prompts */}
      <div className="text-left max-w-3xl mx-auto space-y-3">
        <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider px-1">
          Select a sample battle prompt to test:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((c, i) => (
            <button
              key={i}
              onClick={() => onSelectPrompt(c.prompt)}
              className="group p-4 rounded-2xl bg-[#141724] hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {c.badge}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-xs font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {c.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-2">
                  "{c.prompt}"
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
