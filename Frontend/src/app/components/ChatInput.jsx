import React, { useState } from 'react'
import { Send, Sparkles, Command, ArrowRight } from 'lucide-react'

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
    <div className="w-full border-t border-white/10 bg-[#0c0e17]/95 backdrop-blur-xl p-4 sm:p-5 sticky bottom-0 z-30">
      <div className="max-w-5xl mx-auto space-y-3">
        {/* Sample Prompts Pills */}
        {samplePrompts && samplePrompts.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-gray-400 font-mono text-[11px] shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Try prompt:
            </span>
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelectSample(prompt)}
                className="shrink-0 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>{prompt}</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 opacity-60" />
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
              className="w-full pl-4 pr-14 py-3.5 sm:py-4 rounded-2xl bg-[#141724] border border-white/15 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-inner"
            />

            {/* Right Action button */}
            <button
              type="submit"
              disabled={!text.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono px-1">
          <span>AI Battle Arena Engine • 2 Models Evaluated + Judge</span>
          <span className="hidden sm:inline">Press Enter to send</span>
        </div>
      </div>
    </div>
  )
}
