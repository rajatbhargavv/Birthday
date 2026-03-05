import React, { useState, useEffect } from 'react'
import './BirthdayGate.css'

// ── SET HER BIRTHDAY HERE ─────────────────────────────────────────
// March 6, 2026 at midnight (00:00:00) Indian Standard Time (UTC+5:30)
const UNLOCK_TIME = new Date('2026-03-06T00:00:00+05:30')
// ─────────────────────────────────────────────────────────────────

function getTimeLeft() {
  const diff = UNLOCK_TIME - new Date()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function BirthdayGate({ children }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [unlocked, setUnlocked] = useState(!getTimeLeft())
  const [bursting, setBursting] = useState(false)

  useEffect(() => {
    if (unlocked) return
    const id = setInterval(() => {
      const t = getTimeLeft()
      setTimeLeft(t)
      if (!t) {
        clearInterval(id)
        setBursting(true)
        setTimeout(() => setUnlocked(true), 2000)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [unlocked])

  if (unlocked) return children

  return (
    <div className={`gate ${bursting ? 'gate--burst' : ''}`}>
      {/* Floating petals bg */}
      <div className="gate__petals">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="gate__petal" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 10}s`,
            width:  `${14 + Math.random() * 10}px`,
            height: `${18 + Math.random() * 12}px`,
          }} />
        ))}
      </div>

      <div className="gate__content">
        {/* Lock icon */}
        <div className="gate__lock">🔒</div>

        <p className="gate__eyebrow">✦ something special awaits ✦</p>

        <h1 className="gate__title">
          Radhika's<br />Birthday Site
        </h1>

        <p className="gate__subtitle">
          This page unlocks when her birthday begins —<br />
          come back on <strong>March 6th at midnight</strong> 🌹
        </p>

        <div className="gate__divider">
          <span className="gate__divider-line" />
          <span>🌹</span>
          <span className="gate__divider-line gate__divider-line--rev" />
        </div>

        <p className="gate__label">unlocking in</p>

        {timeLeft && (
          <div className="gate__grid">
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div className="gate__unit" key={unit}>
                <span className="gate__num">{String(val).padStart(2, '0')}</span>
                <span className="gate__lbl">{unit}</span>
              </div>
            ))}
          </div>
        )}

        <p className="gate__hint">
          Only one person knows this link 💕
        </p>
      </div>

      {/* Burst overlay when unlocking */}
      {bursting && (
        <div className="gate__burst">
          <span>🎂</span>
          <p>Happy Birthday Radhika! 🌹</p>
        </div>
      )}
    </div>
  )
}
