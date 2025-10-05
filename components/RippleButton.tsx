'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone } from 'lucide-react'

interface RippleButtonProps {
  onClick?: () => void
  href?: string
  className?: string
  children: React.ReactNode
}

interface Ripple {
  id: number
  x: number
  y: number
  delay: number
  size: 'small' | 'medium' | 'large'
}

const RippleButton = ({ onClick, href, className = '', children }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<Ripple>>([])
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  // Continuous splash effect
  useEffect(() => {
    const createContinuousRipple = () => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Create a continuous ripple at center
      const continuousRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: centerX + (Math.random() - 0.5) * 20,
        y: centerY + (Math.random() - 0.5) * 20,
        delay: 0,
        size: Math.random() > 0.5 ? 'medium' : 'large'
      }

      setRipples(prev => [...prev, continuousRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== continuousRipple.id))
      }, 2000)
    }

    // Create initial ripples
    const initialDelay = 500
    const createInitialRipples = () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(createContinuousRipple, i * 200)
      }
    }

    // Start continuous effect after initial delay
    const startContinuous = setTimeout(createInitialRipples, initialDelay)

    // Create continuous ripples every 1.5 seconds
    const interval = setInterval(createContinuousRipple, 1500)

    return () => {
      clearTimeout(startContinuous)
      clearInterval(interval)
    }
  }, [])

  const createRipple = (event: React.MouseEvent) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Create multiple ripples for splash effect
    const splashRipples: Ripple[] = [
      { id: Date.now(), x, y, delay: 0, size: 'small' },
      { id: Date.now() + 1, x: x + (Math.random() - 0.5) * 20, y: y + (Math.random() - 0.5) * 20, delay: 50, size: 'medium' },
      { id: Date.now() + 2, x: x + (Math.random() - 0.5) * 30, y: y + (Math.random() - 0.5) * 30, delay: 100, size: 'large' },
    ]

    setRipples(prev => [...prev, ...splashRipples])

    // Remove ripples after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => !splashRipples.some(splash => splash.id === ripple.id)))
    }, 800)
  }

  const handleClick = (e: React.MouseEvent) => {
    createRipple(e)
    if (onClick) {
      onClick()
    }
  }

  const baseClasses = `
    relative overflow-hidden bg-primary-600 hover:bg-primary-700 
    text-white font-semibold px-8 py-4 rounded-lg 
    transition-all duration-200 flex items-center justify-center space-x-2
    transform hover:scale-105 active:scale-95 transition-transform duration-150
    shadow-lg hover:shadow-xl active:shadow-2xl
    ring-0 active:ring-4 active:ring-white/30 transition-all duration-150
    ${className}
  `

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        onClick={handleClick}
      >
        {children}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              width: ripple.size === 'small' ? '16px' : ripple.size === 'medium' ? '24px' : '32px',
              height: ripple.size === 'small' ? '16px' : ripple.size === 'medium' ? '24px' : '32px',
              background: `radial-gradient(circle, rgba(255, 255, 255, ${ripple.size === 'small' ? '0.8' : ripple.size === 'medium' ? '0.6' : '0.4'}) 0%, transparent 70%)`,
              borderRadius: '50%',
              animation: `continuous-splash 2s ease-out ${ripple.delay}ms forwards`,
              boxShadow: `0 0 ${ripple.size === 'small' ? '10px' : ripple.size === 'medium' ? '20px' : '30px'} rgba(255, 255, 255, 0.5)`
            }}
          />
        ))}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={baseClasses}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: ripple.size === 'small' ? '16px' : ripple.size === 'medium' ? '24px' : '32px',
            height: ripple.size === 'small' ? '16px' : ripple.size === 'medium' ? '24px' : '32px',
            background: `radial-gradient(circle, rgba(255, 255, 255, ${ripple.size === 'small' ? '0.8' : ripple.size === 'medium' ? '0.6' : '0.4'}) 0%, transparent 70%)`,
            borderRadius: '50%',
            animation: `continuous-splash 2s ease-out ${ripple.delay}ms forwards`,
            boxShadow: `0 0 ${ripple.size === 'small' ? '10px' : ripple.size === 'medium' ? '20px' : '30px'} rgba(255, 255, 255, 0.5)`
          }}
        />
      ))}
    </button>
  )
}

export default RippleButton
