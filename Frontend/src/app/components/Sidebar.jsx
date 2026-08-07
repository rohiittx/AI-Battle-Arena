import React from 'react'
import {
  Swords,
  Plus,
  MessageSquare,
  Trophy,
  Sliders,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Zap,
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed lg:static top-0 left-0 bottom-0 w-[280px] bg-[#0d0f18] border-r border-white/10 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header / Brand */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0d0f18] rounded-[11px] flex items-center justify-center">
                <Swords className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-extrabold text-sm tracking-tight text-white">AI BATTLE ARENA</h1>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Dual Solution & Judge Evaluation</p>
            </div>
          </div>

          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 lg:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Button */}
        <div className="p-4">
          <button
            onClick={() => {
              onNewSession()
              onClose()
            }}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            NEW ARENA BATTLE
          </button>
        </div>

        {/* Navigation Section */}
        <div className="px-3 py-2 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
            Navigation
          </div>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
            <div className="flex items-center gap-2.5">
              <Swords className="w-4 h-4" />
              <span>Live Arena</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 text-xs font-medium transition-colors">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </div>
            <span className="text-[10px] font-mono text-gray-400">v2.4</span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 text-xs font-medium transition-colors">
            <div className="flex items-center gap-2.5">
              <Sliders className="w-4 h-4" />
              <span>Judge Parameters</span>
            </div>
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 border-t border-white/5">
          <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
            <span>Recent Battles</span>
            <span className="text-gray-400">{sessions.length}</span>
          </div>

          {sessions.length === 0 ? (
            <div className="px-3 py-6 text-center text-xs text-gray-400 italic">
              No recent battles yet
            </div>
          ) : (
            sessions.map((session) => {
              const isActive = session.id === activeSessionId
              return (
                <div
                  key={session.id}
                  className={`group relative flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs transition-all ${
                    isActive
                      ? 'bg-white/10 text-white font-medium border border-white/10 shadow-sm'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                  onClick={() => {
                    onSelectSession(session.id)
                    onClose()
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-6">
                    <MessageSquare
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-cyan-400' : 'text-gray-400'
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
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-400 rounded transition-opacity"
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
        <div className="p-4 border-t border-white/5 bg-[#0a0b12]">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px]">Judge Engine Active</span>
            </div>
            <span className="text-[10px] font-mono text-gray-400">v1.0.4</span>
          </div>
        </div>
      </aside>
    </>
  )
}
