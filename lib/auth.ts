import { NextRequest } from 'next/server'

// Simple JWT-like token generation (in production, use proper JWT library)
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'devansh-construction-secret-key-2024'

export function generateAdminToken(): string {
  const timestamp = Date.now()
  const payload = {
    admin: true,
    timestamp,
    exp: timestamp + (24 * 60 * 60 * 1000) // 24 hours
  }
  
  // Simple base64 encoding (in production, use proper JWT)
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

export function verifyAdminToken(token: string): boolean {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString())
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return false
    }
    
    return payload.admin === true
  } catch {
    return false
  }
}

export function checkAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const cookieToken = request.cookies.get('admin_token')?.value
  
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.substring(7)
    return verifyAdminToken(token)
  }
  
  if (cookieToken) {
    return verifyAdminToken(cookieToken)
  }
  
  return false
}
