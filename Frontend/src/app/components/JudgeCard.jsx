import React from 'react'
import { Scale, Award, Star, CheckCircle2, ChevronRight, Sparkles, MessageSquareCode } from 'lucide-react'

export default function JudgeCard({ judge }) {
  if (!judge) return null

  const { solution_1_score, solution_2_score, solution_1_reasoning, solution_2_reasoning } = judge

  // Determine result status banner
  let resultBanner = { title: 'TIE GAME', badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40' }
  if (solution_1_score > solution_2_score) {
    resultBanner = { title: 'SOLUTION 1 WINS', badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
  } else if (solution_2_score > solution_1_score) {
    resultBanner = { title: 'SOLUTION 2 WINS', badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40' }
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      <div className="glass-card-judge rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-all duration-300">
        {/* Subtle background glow effect */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 shrink-0">
              <div className="w-full h-full bg-[#0d0f18] rounded-[11px] flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base text-amber-300 tracking-tight">
                  JUDGE RECOMMENDATION & VERDICT
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  AI EVALUATOR
                </span>
              </div>
              <p className="text-xs text-gray-300">Automated quality, accuracy, and completeness analysis</p>
            </div>
          </div>

          {/* Outcome Pill */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-extrabold tracking-wide flex items-center gap-2 ${resultBanner.badgeClass}`}>
              <Award className="w-4 h-4 text-amber-400" />
              <span>{resultBanner.title}</span>
            </div>
          </div>
        </div>

        {/* Score Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Solution 1 Score Badge */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/25">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs font-bold text-cyan-200">Solution 1 Score</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-white ml-1">{solution_1_score}</span>
              <span className="text-xs text-gray-400">/ 10</span>
            </div>
          </div>

          {/* Solution 2 Score Badge */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/25">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="font-mono text-xs font-bold text-purple-200">Solution 2 Score</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-white ml-1">{solution_2_score}</span>
              <span className="text-xs text-gray-400">/ 10</span>
            </div>
          </div>
        </div>

        {/* Detailed Reasoning Breakdown */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400/90 flex items-center gap-2">
            <MessageSquareCode className="w-4 h-4 text-amber-400" />
            EVALUATION & REASONING BREAKDOWN
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Solution 1 Reasoning */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs font-bold text-cyan-300">Solution 1 Assessment</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                {solution_1_reasoning}
              </p>
            </div>

            {/* Solution 2 Reasoning */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-mono text-xs font-bold text-purple-300">Solution 2 Assessment</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                {solution_2_reasoning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
