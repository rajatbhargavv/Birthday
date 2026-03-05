import React, { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import './Countdown.css'

// ── SET RADHIKA'S BIRTHDAY HERE ───────────────────────────────────────────────
// Month is 0-indexed: 0 = January, 1 = February, ..., 11 = December
// Example: March 6 → month: 2, day: 15
const BIRTHDAY = { month: 2, day: 6 }
// ─────────────────────────────────────────────────────────────────────────────

function getNextBirthday() {
  const now = new Date()
  let bday = new Date(now.getFullYear(), BIRTHDAY.month, BIRTHDAY.day)
  if (bday <= now) bday.setFullYear(bday.getFullYear() + 1)
  return bday
}

function calcTimeLeft() {
  const diff = getNextBirthday() - new Date()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft())
  const { ref, visible } = useReveal()

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="countdown">
      <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <span className="section-label">✦ The big day ✦</span>
        <h2 className="countdown__heading">Radhika's Birthday</h2>

        {timeLeft ? (
          <>
            <p className="countdown__sub">Counting down every second until her special day</p>
            <div className="countdown__grid">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div className="countdown__unit" key={unit}>
                  <span className="countdown__num">{String(val).padStart(2, '0')}</span>
                  <span className="countdown__label">{unit}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="countdown__live">
            🎂 Today is her birthday! Happy Birthday Radhika! 🎂
          </p>
        )}
      </div>
    </section>
  )
}
