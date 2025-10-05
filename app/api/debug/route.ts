import { NextRequest, NextResponse } from 'next/server'
import { getAllSubmissions, getSubmissionStats } from '@/lib/contactStore'

export async function GET(request: NextRequest) {
  try {
    const submissions = getAllSubmissions()
    const stats = getSubmissionStats()
    
    return NextResponse.json({
      message: 'Debug endpoint - no auth required',
      submissions,
      stats,
      count: submissions.length
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Debug endpoint error', details: error },
      { status: 500 }
    )
  }
}
