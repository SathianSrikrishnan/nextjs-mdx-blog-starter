// Progress tracking using localStorage
// Stores which stories have been completed

const STORAGE_KEY = 'lumina-progress'

export interface Progress {
  completedStories: string[] // Array of story IDs like "isas-dream-shelf/the-infinite-shell-storm"
  lastUpdated: string
}

export function getProgress(): Progress {
  if (typeof window === 'undefined') {
    return { completedStories: [], lastUpdated: '' }
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('Error reading progress:', e)
  }
  
  return { completedStories: [], lastUpdated: '' }
}

export function markStoryComplete(shelfId: string, storyId: string): void {
  if (typeof window === 'undefined') return
  
  const fullId = `${shelfId}/${storyId}`
  const progress = getProgress()
  
  if (!progress.completedStories.includes(fullId)) {
    progress.completedStories.push(fullId)
    progress.lastUpdated = new Date().toISOString()
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (e) {
      console.error('Error saving progress:', e)
    }
  }
}

export function isStoryComplete(shelfId: string, storyId: string): boolean {
  const fullId = `${shelfId}/${storyId}`
  const progress = getProgress()
  return progress.completedStories.includes(fullId)
}

export function getCompletedCount(): number {
  return getProgress().completedStories.length
}

export function getShelfProgress(shelfId: string): { completed: number; total: number } {
  const progress = getProgress()
  const shelfStories = progress.completedStories.filter(id => id.startsWith(shelfId + '/'))
  
  // Total stories per shelf (this should match your stories data)
  const totalPerShelf: Record<string, number> = {
    'isas-dream-shelf': 2,
    'sias-spark-shelf': 2,
    'twin-sparks-shelf': 2,
  }
  
  return {
    completed: shelfStories.length,
    total: totalPerShelf[shelfId] || 2,
  }
}

export function getMostProgressShelf(): string | null {
  const progress = getProgress()
  const shelfCounts: Record<string, number> = {}
  
  progress.completedStories.forEach(id => {
    const shelfId = id.split('/')[0]
    shelfCounts[shelfId] = (shelfCounts[shelfId] || 0) + 1
  })
  
  let maxShelf: string | null = null
  let maxCount = 0
  
  Object.entries(shelfCounts).forEach(([shelf, count]) => {
    if (count > maxCount) {
      maxCount = count
      maxShelf = shelf
    }
  })
  
  return maxShelf
}

export function getEncouragingMessage(completed: number): string {
  if (completed === 0) {
    return "Ready to start your magical journey? ✨"
  } else if (completed === 1) {
    return "Great start! Keep exploring! 🌟"
  } else if (completed === 2) {
    return "You're doing amazing! 💫"
  } else if (completed === 3) {
    return "Halfway there! So proud of you! 🎉"
  } else if (completed === 4) {
    return "Almost a master storyteller! 📚"
  } else if (completed === 5) {
    return "Just one more story to go! 🚀"
  } else if (completed >= 6) {
    return "🏆 You've completed all the stories! Amazing job! 🏆"
  }
  return "Keep reading and learning! 📖"
}

// Total number of stories in Lumina
export const TOTAL_STORIES = 6



