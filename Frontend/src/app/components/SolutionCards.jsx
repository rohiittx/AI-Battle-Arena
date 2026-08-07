import React, { useState } from 'react'
import { Bot, Copy, Check, ThumbsUp, ThumbsDown, Sparkles, Code2 } from 'lucide-react'

function FormattedText({ text }) {
  if (!text) return null

  // Process bold formatting **word**
  const parseMarkdown = (input) => {
    const parts = input.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-white bg-white/5 px-1 py-0.5 rounded border border-white/10">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="text-sm leading-relaxed text-gray-200 whitespace-pre-wrap font-normal">
      {parseMarkdown(text)}
    </div>
  )
}

export default function SolutionCards({ solution1, solution2, score1, score2 }) {
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)
  const [votes, setVotes] = useState({ s1: null, s2: null })

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-6 space-y-4">
      {/* Label / VS Badge indicator bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            COMPETING AI SOLUTIONS
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
            Side-by-Side Comparison
          </span>
        </div>
      </div>

      {/* Grid container: 1 col on mobile, 2 cols on lg screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 relative">
        {/* Solution 1 (Cyan Theme) */}
        <div className="glass-card-solution-1 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative group">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-300 uppercase tracking-wide">
                      Solution 1
                    </span>
                    {score1 !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                        Score: {score1}/10
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400">Model Response A</p>
                </div>
              </div>

              {/* Copy action */}
              <button
                onClick={() => handleCopy(solution1, setCopied1)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Solution 1"
              >
                {copied1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Content Body */}
            <div className="min-h-[100px] mb-4">
              <FormattedText text={solution1} />
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-cyan-500/10 flex items-center justify-between text-xs text-gray-400">
            <span className="text-[11px] font-mono text-cyan-400/70">Direct Answer</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVotes(v => ({ ...v, s1: v.s1 === 'up' ? null : 'up' }))}
                className={`p-1.5 rounded-lg transition-colors ${
                  votes.s1 === 'up' ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setVotes(v => ({ ...v, s1: v.s1 === 'down' ? null : 'down' }))}
                className={`p-1.5 rounded-lg transition-colors ${
                  votes.s1 === 'down' ? 'bg-red-500/20 text-red-400' : 'hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Solution 2 (Purple Theme) */}
        <div className="glass-card-solution-2 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative group">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wide">
                      Solution 2
                    </span>
                    {score2 !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                        Score: {score2}/10
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400">Model Response B (Detailed)</p>
                </div>
              </div>

              {/* Copy action */}
              <button
                onClick={() => handleCopy(solution2, setCopied2)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Solution 2"
              >
                {copied2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Content Body */}
            <div className="min-h-[100px] mb-4">
              <FormattedText text={solution2} />
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-purple-500/10 flex items-center justify-between text-xs text-gray-400">
            <span className="text-[11px] font-mono text-purple-400/70">Detailed Context</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVotes(v => ({ ...v, s2: v.s2 === 'up' ? null : 'up' }))}
                className={`p-1.5 rounded-lg transition-colors ${
                  votes.s2 === 'up' ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setVotes(v => ({ ...v, s2: v.s2 === 'down' ? null : 'down' }))}
                className={`p-1.5 rounded-lg transition-colors ${
                  votes.s2 === 'down' ? 'bg-red-500/20 text-red-400' : 'hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
