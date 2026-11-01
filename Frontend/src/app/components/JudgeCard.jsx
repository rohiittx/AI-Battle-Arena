import React from 'react'
import { Scale, Award, Star, CheckCircle2, MessageSquareCode } from 'lucide-react'

export default function JudgeCard({ judge }) {
  if (!judge) return null

  const { solution_1_score, solution_2_score, solution_1_reasoning, solution_2_reasoning } = judge

  // Determine result status banner
  let resultBanner = { title: 'TIE RESULT', badgeClass: 'bg-zinc-800 text-zinc-300 border-zinc-700' }
  if (solution_1_score > solution_2_score) {
    resultBanner = { title: 'SOLUTION 1 WINS', badgeClass: 'bg-rose-950/60 text-rose-400 border-rose-800/60' }
  } else if (solution_2_score > solution_1_score) {
    resultBanner = { title: 'SOLUTION 2 WINS', badgeClass: 'bg-zinc-800 text-zinc-100 border-zinc-700' }
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-md p-5 sm:p-6 transition-colors">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-rose-400 shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-zinc-100 tracking-tight">
                  JUDGE RECOMMENDATION & VERDICT
                </h3>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-medium">
                  AI EVALUATOR
                </span>
              </div>
              <p className="text-xs text-zinc-400">Automated quality, accuracy, and completeness analysis</p>
            </div>
          </div>

          {/* Outcome Pill */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <div className={`px-2.5 py-1 rounded-md border text-xs font-mono font-semibold tracking-wide flex items-center gap-1.5 ${resultBanner.badgeClass}`}>
              <Award className="w-3.5 h-3.5" />
              <span>{resultBanner.title}</span>
            </div>
          </div>
        </div>

        {/* Score Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {/* Solution 1 Score Badge */}
          <div className="flex items-center justify-between p-3 rounded-md bg-zinc-950 border border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="font-mono text-xs font-medium text-zinc-300">Solution 1 Score</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <div className="flex text-zinc-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-zinc-400 text-zinc-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-100 ml-1">{solution_1_score}</span>
              <span className="text-xs text-zinc-400">/ 10</span>
            </div>
          </div>

          {/* Solution 2 Score Badge */}
          <div className="flex items-center justify-between p-3 rounded-md bg-zinc-950 border border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-400" />
              <span className="font-mono text-xs font-medium text-zinc-300">Solution 2 Score</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <div className="flex text-zinc-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-zinc-400 text-zinc-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-100 ml-1">{solution_2_score}</span>
              <span className="text-xs text-zinc-400">/ 10</span>
            </div>
          </div>
        </div>

        {/* Detailed Reasoning Breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <MessageSquareCode className="w-3.5 h-3.5" />
            Evaluation Reasoning
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Solution 1 Reasoning */}
            <div className="p-3.5 rounded-md bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="font-mono text-xs font-semibold text-zinc-200">Solution 1 Assessment</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {solution_1_reasoning}
              </p>
            </div>

            {/* Solution 2 Reasoning */}
            <div className="p-3.5 rounded-md bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="font-mono text-xs font-semibold text-zinc-200">Solution 2 Assessment</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {solution_2_reasoning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
