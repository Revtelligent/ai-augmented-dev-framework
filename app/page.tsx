"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Brain, Zap } from 'lucide-react'

interface Challenge {
  id: string
  name: string
  difficulty_level: string
  estimated_duration_minutes: number
  metadata: {
    gridSize: number
    patternLength: number
    revealTime: number
    maxAttempts: number
  }
}

export default function HomePage() {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchChallenges()
  }, [])

  const fetchChallenges = async () => {
    try {
      const response = await fetch('/api/challenges')
      const data = await response.json()
      setChallenges(data.challenges)
    } catch (error) {
      console.error('Error fetching challenges:', error)
    } finally {
      setLoading(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading MindBreak...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">MindBreak</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick, effective mental breaks for working professionals.
            Pattern memory games that complete in exactly 5 minutes.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{challenge.name}</CardTitle>
                  <Badge className={getDifficultyColor(challenge.difficulty_level)}>
                    {challenge.difficulty_level}
                  </Badge>
                </div>
                <CardDescription>
                  Pattern memory challenge with {challenge.metadata.patternLength} elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {challenge.estimated_duration_minutes} min
                    </div>
                    <div>
                      Grid: {Math.sqrt(challenge.metadata.gridSize)}×{Math.sqrt(challenge.metadata.gridSize)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Reveal: {challenge.metadata.revealTime / 1000}s</span>
                    <span>•</span>
                    <span>Attempts: {challenge.metadata.maxAttempts}</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {challenges.length === 0 && (
          <div className="text-center py-12">
            <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No challenges available</h3>
            <p className="text-gray-600">Check back soon for new mental break challenges!</p>
          </div>
        )}
      </div>
    </div>
  )
}
