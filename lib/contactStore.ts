// Simple in-memory store for contact submissions
// In production, this would be replaced with a database

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  timestamp: Date
  status: 'new' | 'read' | 'replied'
}

// In-memory storage (will reset on server restart)
let submissions: ContactSubmission[] = []

export const addContactSubmission = (submission: Omit<ContactSubmission, 'id' | 'timestamp' | 'status'>): ContactSubmission => {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    timestamp: new Date(),
    status: 'new'
  }
  
  submissions.unshift(newSubmission) // Add to beginning of array
  return newSubmission
}

export const getAllSubmissions = (): ContactSubmission[] => {
  return [...submissions] // Return copy to prevent direct mutation
}

export const getSubmissionById = (id: string): ContactSubmission | null => {
  return submissions.find(submission => submission.id === id) || null
}

export const updateSubmissionStatus = (id: string, status: ContactSubmission['status']): boolean => {
  const submission = submissions.find(submission => submission.id === id)
  if (submission) {
    submission.status = status
    return true
  }
  return false
}

export const deleteSubmission = (id: string): boolean => {
  const index = submissions.findIndex(submission => submission.id === id)
  if (index !== -1) {
    submissions.splice(index, 1)
    return true
  }
  return false
}

export const getSubmissionStats = () => {
  const total = submissions.length
  const newCount = submissions.filter(s => s.status === 'new').length
  const readCount = submissions.filter(s => s.status === 'read').length
  const repliedCount = submissions.filter(s => s.status === 'replied').length
  
  return {
    total,
    new: newCount,
    read: readCount,
    replied: repliedCount
  }
}
