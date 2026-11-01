import React from 'react'
import { Menu, Scale, Layers } from 'lucide-react'

export default function Header({ onOpenSidebar, activeSessionTitle }) {
  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-950 px-4 lg:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Mobile Toggle & Session Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 lg:hidden transition-colors"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
            <Layers className="w-3.5 h-3.5 text-rose-400" />
            <span>Dual Arena</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline text-xs">/</span>
          <h2 className="text-sm font-medium text-zinc-200 truncate max-w-[200px] sm:max-w-[320px]">
            {activeSessionTitle || 'New Battle Session'}
          </h2>
        </div>
      </div>

      {/* Right: Model Battle Chips & Status */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Solution 1 vs 2 status pill */}
        <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span className="font-mono text-[11px] text-zinc-300">Solution 1</span>
          </div>
          <span className="text-zinc-600 text-[10px] font-mono">VS</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
            <span className="font-mono text-[11px] text-zinc-300">Solution 2</span>
          </div>
        </div>

        {/* Judge Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
          <Scale className="w-3.5 h-3.5 text-rose-400" />
          <span className="hidden sm:inline">AI Judge</span>
          <span className="sm:hidden">Judge</span>
        </div>
      </div>
    </header>
  )
}
