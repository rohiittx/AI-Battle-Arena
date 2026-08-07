import React from 'react'
import { User, Sparkles } from 'lucide-react'

export default function UserPromptCard({ problem }) {
  return (
    <div className="w-full max-w-5xl mx-auto my-4">
      <div className="flex items-start gap-3.5 bg-gradient-to-r from-blue-900/20 via-indigo-900/10 to-transparent p-4 sm:p-5 rounded-2xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
        <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-inner">
          <User className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400">
              User Prompt
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-[11px] text-gray-400 font-mono">Arena Question</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
            {problem}
          </p>
        </div>
      </div>
    </div>
  )
}
