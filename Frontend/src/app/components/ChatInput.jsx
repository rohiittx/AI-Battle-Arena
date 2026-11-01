import React, { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'

export default function ChatInput({ onSend, isLoading, samplePrompts, onSelectSample }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() && !isLoading) {
      onSend(text.trim())
      setText('')
    }
  }

  return (
    <div className="w-full border-t border-zinc-800 bg-zinc-950 p-3 sm:p-4 sticky bottom-0 z-30">
      <div className="max-w-5xl mx-auto space-y-2.5">
        {/* Sample Prompts Pills */}
        {samplePrompts && samplePrompts.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-zinc-400 font-mono text-[11px] shrink-0">
              Try:
            </span>
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelectSample(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors text-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>{prompt}</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask any question to evaluate Solution 1, Solution 2 & Judge..."
              disabled={isLoading}
              className="w-full pl-3.5 pr-12 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-rose-500 transition-colors"
            />

            {/* Right Action button */}
            <button
              type="submit"
              disabled={!text.trim() || isLoading}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-medium disabled:opacity-30 disabled:hover:bg-rose-600 transition-colors cursor-pointer flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono px-0.5">
          <span>Dual AI Engine & Judge Evaluator</span>
          <span className="hidden sm:inline">Press Enter to send</span>
        </div>
      </div>
    </div>
  )
}
