'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ContactSubmission } from '@/lib/contactStore'

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({ total: 0, new: 0, read: 0, replied: 0 })
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all')
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in')
    console.log('Dashboard auth check:', { isLoggedIn })
    
    if (isLoggedIn !== 'true') {
      console.log('Not logged in, redirecting to login')
      router.push('/admin/login')
      return
    }

    console.log('Logged in, fetching submissions')
    fetchSubmissions()
    
    // Refresh submissions every 30 seconds
    const interval = setInterval(fetchSubmissions, 30000)
    return () => clearInterval(interval)
  }, [router])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions', {
        credentials: 'include' // Include cookies for authentication
      })
      const data = await response.json()
      
      if (response.ok) {
        setSubmissions(data.submissions)
        setStats(data.stats)
      } else if (response.status === 401) {
        // Unauthorized - redirect to login
        localStorage.removeItem('admin_logged_in')
        router.push('/admin/login')
      } else {
        console.error('Failed to fetch submissions:', data.error)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateStatus = async (id: string, status: 'read' | 'replied') => {
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id, status }),
      })
      
      if (response.ok) {
        fetchSubmissions()
      } else if (response.status === 401) {
        localStorage.removeItem('admin_logged_in')
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return
    
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id }),
      })
      
      if (response.ok) {
        fetchSubmissions()
      } else if (response.status === 401) {
        localStorage.removeItem('admin_logged_in')
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
    }
  }

  const handleLogout = async () => {
    try {
      // Clear server-side cookie
      await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      })
    } catch (error) {
      console.error('Error during logout:', error)
    } finally {
      localStorage.removeItem('admin_logged_in')
      router.push('/admin/login')
    }
  }

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true
    return submission.status === filter
  })

  const getStatusColor = (status: 'new' | 'read' | 'replied') => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'read': return 'bg-yellow-100 text-yellow-800'
      case 'replied': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={fetchSubmissions}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Total Submissions</p>
                <h2 className="text-2xl font-bold text-gray-900">{stats.total}</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">New Submissions</p>
                <h2 className="text-2xl font-bold text-gray-900">{stats.new}</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-600 rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Read Submissions</p>
                <h2 className="text-2xl font-bold text-gray-900">{stats.read}</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">Replied Submissions</p>
                <h2 className="text-2xl font-bold text-gray-900">{stats.replied}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Submissions List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Contact Submissions</h3>
              <div className="flex space-x-2">
                {['all', 'new', 'read', 'replied'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status as typeof filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                      filter === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {status} ({stats[status as keyof typeof stats] !== undefined ? stats[status as keyof typeof stats] : 0})
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            {filteredSubmissions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No submissions found for this filter.</div>
            ) : (
              <div className="space-y-4">
                {filteredSubmissions.map(submission => (
                  <div
                    key={submission.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(submission.status)}`}>
                            {submission.status}
                          </span>
                          <p className="text-sm text-gray-500">
                            {new Date(submission.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{submission.subject}</h4>
                        <p className="text-gray-700 text-sm mb-1">From: {submission.name} ({submission.email})</p>
                        <p className="text-gray-700 text-sm mb-2">Phone: {submission.phone}</p>
                        <p className="text-gray-600">{submission.message}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        {submission.status === 'new' && (
                          <button
                            onClick={() => handleUpdateStatus(submission.id, 'read')}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Mark as Read
                          </button>
                        )}
                        {submission.status === 'read' && (
                          <button
                            onClick={() => handleUpdateStatus(submission.id, 'replied')}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Mark as Replied
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}