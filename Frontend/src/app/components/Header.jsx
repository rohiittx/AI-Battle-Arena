import React from 'react'
import { Menu, Scale, Sparkles, Cpu, Layers } from 'lucide-react'

export default function Header({ onOpenSidebar, activeSessionTitle }) {
  return (
    <header className="h-16 border-b border-white/10 bg-[#0d0f18]/80 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Mobile Toggle & Session Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 lg:hidden transition-colors"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dual Arena</span>
          </div>
          <span className="text-gray-400 hidden sm:inline text-xs">/</span>
          <h2 className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-[320px]">
            {activeSessionTitle || 'New Battle Session'}
          </h2>
        </div>
      </div>

      {/* Right: Model Battle Chips & Status */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Solution 1 vs 2 status pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-[11px] text-cyan-300">Solution 1</span>
          </div>
          <span className="text-gray-400 text-[10px] font-mono">VS</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span className="font-mono text-[11px] text-purple-300">Solution 2</span>
          </div>
        </div>

        {/* Judge Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium shadow-sm shadow-amber-500/10">
          <Scale className="w-3.5 h-3.5 animate-pulse" />
          <span className="hidden sm:inline">AI Judge Evaluator</span>
          <span className="sm:hidden">Judge</span>
        </div>
      </div>
    </header>
  )
}
