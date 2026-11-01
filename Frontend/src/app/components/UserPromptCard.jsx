import React from 'react'
import { User } from 'lucide-react'

export default function UserPromptCard({ problem }) {
  return (
    <div className="w-full max-w-5xl mx-auto my-4">
      <div className="flex items-start gap-3 bg-zinc-900 p-4 sm:p-5 rounded-md border border-zinc-800">
        <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-zinc-300">
          <User className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-400">
              Prompt
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-[11px] text-zinc-400 font-mono">User Query</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-zinc-100 leading-relaxed">
            {problem}
          </p>
        </div>
      </div>
    </div>
  )
}
