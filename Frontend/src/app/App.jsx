import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import UserPromptCard from './components/UserPromptCard'
import SolutionCards from './components/SolutionCards'
import JudgeCard from './components/JudgeCard'
import ChatInput from './components/ChatInput'
import WelcomeHero from './components/WelcomeHero'
import { Swords, Sparkles, RefreshCw } from 'lucide-react'

// Initial data repository matching exact user requirements
const mockDataDatabase = {
  'what is the capital of india': {
    problem: 'what is the capital of India',
    solution_1: 'The capital of India is **New Delhi**.',
    solution_2:
      "The capital of India is **New Delhi**. It is the seat of the Government of India and serves as the political and administrative center of the country. New Delhi is located within the larger metropolitan area of Delhi, which is one of India's union territories.",
    judge: {
      solution_1_score: 10,
      solution_2_score: 10,
      solution_1_reasoning:
        'The solution correctly and concisely answers the question by stating that New Delhi is the capital of India.',
      solution_2_reasoning:
        "The solution accurately answers the question and provides helpful additional context regarding New Delhi's role and location within the larger region of Delhi.",
    },
  },
  'compare react hooks and context api with code examples': {
    problem: 'Compare React Hooks and Context API with code examples',
    solution_1:
      '**React Hooks** (like `useState`, `useReducer`) manage local component state, while **Context API** passes data down the component tree without prop drilling.',
    solution_2:
      '**React Hooks** are functions that let you hook into React state and lifecycle features. **Context API** provides a way to share values between components without explicitly passing a prop through every level of the tree.\n\nKey differences:\n- **Hooks**: Manage state logic inside functional components.\n- **Context**: State distribution mechanism across nested components.',
    judge: {
      solution_1_score: 9,
      solution_2_score: 10,
      solution_1_reasoning:
        'Solution 1 provides a clean, quick summary highlighting local vs global state management.',
      solution_2_reasoning:
        'Solution 2 offers a more structured breakdown explaining definitions, differences, and practical usage.',
    },
  },
  'explain quantum computing to a 10 year old child': {
    problem: 'Explain quantum computing to a 10 year old child',
    solution_1:
      'Normal computers use switches that are either **OFF (0)** or **ON (1)**. A quantum computer uses quantum bits (qubits) that can be **BOTH 0 and 1 at the same time**, like a spinning coin!',
    solution_2:
      'Imagine a coin. A normal computer can only look at the coin when it is lying flat: heads or tails. A **quantum computer** can spin the coin, so it is heads AND tails simultaneously until it stops. This allows quantum computers to solve giant puzzles super fast!',
    judge: {
      solution_1_score: 9,
      solution_2_score: 10,
      solution_1_reasoning:
        'Solution 1 introduces qubits accurately with a simple spinning coin analogy.',
      solution_2_reasoning:
        'Solution 2 uses a very intuitive, engaging analogy that a 10-year-old can visualize effortlessly.',
    },
  },
}

// Fallback generator for custom user queries
function generateDynamicResponse(query) {
  return {
    problem: query,
    solution_1: `Here is a concise direct answer to **"${query}"**.\n\nThis solution focuses on core facts, direct accuracy, and essential key points without unnecessary clutter.`,
    solution_2: `Here is a comprehensive breakdown for **"${query}"**.\n\n1. **Core Concept**: Directly addresses the primary question.\n2. **Detailed Context**: Provides secondary explanations, historical/technical background, and practical implications.\n3. **Summary**: Ensures a complete understanding of the topic.`,
    judge: {
      solution_1_score: 9,
      solution_2_score: 10,
      solution_1_reasoning: `Solution 1 correctly answers "${query}" in a succinct, clear manner. Perfect for quick lookups.`,
      solution_2_reasoning: `Solution 2 provides superior depth, helpful structured formatting, and extra context that enriches the answer.`,
    },
  }
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sessions, setSessions] = useState([
    {
      id: 'default-1',
      title: 'Capital of India',
      data: mockDataDatabase['what is the capital of india'],
    },
  ])
  const [activeSessionId, setActiveSessionId] = useState('default-1')
  const [isLoading, setIsLoading] = useState(false)

  const chatContainerRef = useRef(null)

  // Current active session
  const activeSession = sessions.find((s) => s.id === activeSessionId) || null

  // Auto-scroll when active session content updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [activeSessionId, activeSession, isLoading])

  // Handle prompt submission
  const handleSendPrompt = async (queryText) => {
    setIsLoading(true)

    // Simulate short network delay for realistic streaming/battling feel
    await new Promise((res) => setTimeout(res, 1000))

    const normalizedKey = queryText.toLowerCase().trim()
    const resultData =
      mockDataDatabase[normalizedKey] || generateDynamicResponse(queryText)

    // Create a new session or update existing empty session
    const newSessionId = `session-${Date.now()}`
    const newSession = {
      id: newSessionId,
      title: queryText.length > 25 ? queryText.slice(0, 25) + '...' : queryText,
      data: resultData,
    }

    setSessions((prev) => [newSession, ...prev])
    setActiveSessionId(newSessionId)
    setIsLoading(false)
  }

  // Handle creation of new session
  const handleNewSession = () => {
    setActiveSessionId(null)
  }

  // Handle session deletion
  const handleDeleteSession = (id) => {
    setSessions((prev) => prev.filter((s) => s.id !== id))
    if (activeSessionId === id) {
      const remaining = sessions.filter((s) => s.id !== id)
      setActiveSessionId(remaining.length > 0 ? remaining[0].id : null)
    }
  }

  // Sample prompt chips for ChatInput
  const samplePrompts = [
    'what is the capital of India',
    'Compare React Hooks and Context API with code examples',
    'Explain quantum computing to a 10 year old child',
  ]

  return (
    <div className="flex h-screen w-screen bg-[#090a0f] text-gray-100 overflow-hidden font-sans">
      {/* Left Sidebar */}
      <Sidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={setActiveSessionId}
        onNewSession={handleNewSession}
        onDeleteSession={handleDeleteSession}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Arena Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Top Header */}
        <Header
          onOpenSidebar={() => setSidebarOpen(true)}
          activeSessionTitle={activeSession ? activeSession.title : 'New Battle'}
        />

        {/* Scrollable Content Container */}
        <main
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6"
        >
          {!activeSession && !isLoading ? (
            <WelcomeHero onSelectPrompt={handleSendPrompt} />
          ) : (
            <div className="w-full">
              {/* User Question */}
              {activeSession?.data && (
                <UserPromptCard problem={activeSession.data.problem} />
              )}

              {/* Loading Indicator during AI Computation */}
              {isLoading && (
                <div className="w-full max-w-5xl mx-auto my-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 animate-pulse">
                  <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>MODELS COMPUTE & JUDGE EVALUATES...</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Generating Solution 1, Solution 2, and AI Judge Reasoning...
                  </p>
                </div>
              )}

              {/* Both Solutions */}
              {activeSession?.data && !isLoading && (
                <>
                  <SolutionCards
                    solution1={activeSession.data.solution_1}
                    solution2={activeSession.data.solution_2}
                    score1={activeSession.data.judge?.solution_1_score}
                    score2={activeSession.data.judge?.solution_2_score}
                  />

                  {/* Judge Recommendation & Scores */}
                  <JudgeCard judge={activeSession.data.judge} />
                </>
              )}
            </div>
          )}
        </main>

        {/* Fixed Bottom Input Bar */}
        <ChatInput
          onSend={handleSendPrompt}
          isLoading={isLoading}
          samplePrompts={samplePrompts}
          onSelectSample={handleSendPrompt}
        />
      </div>
    </div>
  )
}
