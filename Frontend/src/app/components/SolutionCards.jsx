import React, { useState } from 'react'
import { Bot, Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react'

function FormattedText({ text }) {
  if (!text) return null

  // Process bold formatting **word**
  const parseMarkdown = (input) => {
    const parts = input.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-zinc-100 bg-zinc-800/80 px-1 py-0.5 rounded border border-zinc-700">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap font-normal">
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
    <div className="w-full max-w-5xl mx-auto my-6 space-y-3">
      {/* Label indicator bar */}
      <div className="flex items-center justify-between px-0.5">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
          Competing AI Solutions
        </h3>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
          Side-by-Side
        </span>
      </div>

      {/* Grid container: 1 col on mobile, 2 cols on lg screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Solution 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-md p-5 flex flex-col justify-between transition-colors hover:border-zinc-700">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-rose-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wide">
                      Solution 1
                    </span>
                    {score1 !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-400 border border-rose-800/60 font-semibold">
                        {score1}/10
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400">Direct Response</p>
                </div>
              </div>

              {/* Copy action */}
              <button
                onClick={() => handleCopy(solution1, setCopied1)}
                className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors cursor-pointer"
                title="Copy Solution 1"
              >
                {copied1 ? <Check className="w-4 h-4 text-rose-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Content Body */}
            <div className="min-h-[100px] mb-4">
              <FormattedText text={solution1} />
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="text-[11px] font-mono text-zinc-400">Direct Format</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setVotes(v => ({ ...v, s1: v.s1 === 'up' ? null : 'up' }))}
                className={`p-1.5 rounded-md transition-colors ${
                  votes.s1 === 'up' ? 'bg-zinc-800 text-rose-400 border border-zinc-700' : 'hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setVotes(v => ({ ...v, s1: v.s1 === 'down' ? null : 'down' }))}
                className={`p-1.5 rounded-md transition-colors ${
                  votes.s1 === 'down' ? 'bg-zinc-800 text-red-400 border border-zinc-700' : 'hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-md p-5 flex flex-col justify-between transition-colors hover:border-zinc-700">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wide">
                      Solution 2
                    </span>
                    {score2 !== undefined && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 font-semibold">
                        {score2}/10
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400">Detailed Response</p>
                </div>
              </div>

              {/* Copy action */}
              <button
                onClick={() => handleCopy(solution2, setCopied2)}
                className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors cursor-pointer"
                title="Copy Solution 2"
              >
                {copied2 ? <Check className="w-4 h-4 text-rose-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Content Body */}
            <div className="min-h-[100px] mb-4">
              <FormattedText text={solution2} />
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="text-[11px] font-mono text-zinc-400">Comprehensive Format</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setVotes(v => ({ ...v, s2: v.s2 === 'up' ? null : 'up' }))}
                className={`p-1.5 rounded-md transition-colors ${
                  votes.s2 === 'up' ? 'bg-zinc-800 text-rose-400 border border-zinc-700' : 'hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setVotes(v => ({ ...v, s2: v.s2 === 'down' ? null : 'down' }))}
                className={`p-1.5 rounded-md transition-colors ${
                  votes.s2 === 'down' ? 'bg-zinc-800 text-red-400 border border-zinc-700' : 'hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200'
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
