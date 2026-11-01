import React from 'react'
import {
  Swords,
  Plus,
  MessageSquare,
  Trophy,
  Sliders,
  Trash2,
  X
} from 'lucide-react'

export default function Sidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewSession,
  onDeleteSession,
  isOpen,
  onClose
}) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed lg:static top-0 left-0 bottom-0 w-[270px] bg-zinc-950 border-r border-zinc-800 z-50 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header / Brand */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400 shrink-0">
              <Swords className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-sm tracking-tight text-zinc-100">BATTLE ARENA</h1>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">Model Evaluation</p>
            </div>
          </div>

          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 lg:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Button */}
        <div className="p-3">
          <button
            onClick={() => {
              onNewSession()
              onClose()
            }}
            className="w-full py-2.5 px-3 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Battle
          </button>
        </div>

        {/* Navigation Section */}
        <div className="px-3 py-1 space-y-0.5">
          <div className="px-2 py-1 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Workspace
          </div>
          <button className="w-full flex items-center justify-between px-2.5 py-2 rounded-md bg-zinc-900 text-zinc-100 text-xs font-medium border border-zinc-800">
            <div className="flex items-center gap-2.5">
              <Swords className="w-4 h-4 text-rose-400" />
              <span>Live Arena</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          </button>
          <button className="w-full flex items-center justify-between px-2.5 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 text-xs font-medium transition-colors">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">v2.4</span>
          </button>
          <button className="w-full flex items-center justify-between px-2.5 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 text-xs font-medium transition-colors">
            <div className="flex items-center gap-2.5">
              <Sliders className="w-4 h-4" />
              <span>Parameters</span>
            </div>
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5 border-t border-zinc-800">
          <div className="px-2 py-1 flex items-center justify-between text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            <span>Recent Battles</span>
            <span className="text-zinc-400">{sessions.length}</span>
          </div>

          {sessions.length === 0 ? (
            <div className="px-2 py-6 text-center text-xs text-zinc-400">
              No recent battles
            </div>
          ) : (
            sessions.map((session) => {
              const isActive = session.id === activeSessionId
              return (
                <div
                  key={session.id}
                  className={`group relative flex items-center justify-between px-2.5 py-2 rounded-md cursor-pointer text-xs transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-zinc-100 font-medium border border-zinc-800'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                  }`}
                  onClick={() => {
                    onSelectSession(session.id)
                    onClose()
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-4">
                    <MessageSquare
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-rose-400' : 'text-zinc-500'
                      }`}
                    />
                    <span className="truncate">{session.title}</span>
                  </div>

                  {/* Delete session button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteSession(session.id)
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 rounded transition-opacity"
                    title="Delete Battle"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[11px]">Judge Active</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">v1.0.4</span>
          </div>
        </div>
      </aside>
    </>
  )
}
