import React from 'react'
import { Swords, Bot, Scale, ArrowRight } from 'lucide-react'

export default function WelcomeHero({ onSelectPrompt }) {
  const cards = [
    {
      title: 'Capital of India',
      prompt: 'what is the capital of India',
      desc: 'Compare concise direct response vs detailed geographical & administrative context.',
      badge: 'Direct Query'
    },
    {
      title: 'React Hooks vs Context',
      prompt: 'Compare React Hooks and Context API with code examples',
      desc: 'Evaluate technical depth, code formatting, and practical usability.',
      badge: 'Code Compare'
    },
    {
      title: 'Quantum Computing',
      prompt: 'Explain quantum computing to a 10 year old child',
      desc: 'Analyze simplicity of explanations, analogy quality, and engagement.',
      badge: 'Analogy'
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 text-center my-auto">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium mb-5">
        <Swords className="w-3.5 h-3.5 text-rose-400" />
        <span>AI EVALUATION ARENA</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight leading-tight mb-3">
        Two AI Solutions. <span className="text-rose-400">One Independent Judge.</span>
      </h1>
      <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
        Submit any question to trigger two AI model responses side-by-side. An automated AI Judge inspects both solutions and delivers detailed scores and reasoning.
      </p>

      {/* Architecture Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-8 text-left">
        <div className="p-4 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 text-rose-400 flex items-center justify-center mb-3">
            <Bot className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-zinc-200 mb-1">SOLUTION 1</h3>
          <p className="text-xs text-zinc-400">Direct, concise, and focused response delivery.</p>
        </div>

        <div className="p-4 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center mb-3">
            <Bot className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-zinc-200 mb-1">SOLUTION 2</h3>
          <p className="text-xs text-zinc-400">Comprehensive, detailed context and extra depth.</p>
        </div>

        <div className="p-4 rounded-md bg-zinc-900 border border-zinc-800">
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 text-rose-400 flex items-center justify-center mb-3">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="font-mono text-xs font-bold text-zinc-200 mb-1">JUDGE VERDICT</h3>
          <p className="text-xs text-zinc-400">Independent score (out of 10) & verdict reasoning.</p>
        </div>
      </div>

      {/* Preset Demo Prompts */}
      <div className="text-left max-w-3xl mx-auto space-y-2.5">
        <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider px-1">
          Sample battle prompts:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map((c, i) => (
            <button
              key={i}
              onClick={() => onSelectPrompt(c.prompt)}
              className="group p-3.5 rounded-md bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 text-left transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {c.badge}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-rose-400 transition-colors" />
                </div>
                <h4 className="text-xs font-bold text-zinc-200 mb-1 group-hover:text-white transition-colors">
                  {c.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
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
