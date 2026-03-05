import React from 'react'
import './Hero.css'

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('surprise')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__bg-glow hero__bg-glow--top" />
      <div className="hero__bg-glow hero__bg-glow--bottom" />

      <p className="hero__eyebrow">✦ A birthday to remember ✦</p>
      <h1 className="hero__name">Radhika</h1>
      <p className="hero__age">Turning Twenty · With All My Love</p>

      <div className="hero__divider">
        <span className="hero__divider-line" />
        <span className="hero__divider-rose">🌹</span>
        <span className="hero__divider-line hero__divider-line--rev" />
      </div>

      <p className="hero__tagline">
        Today the whole world celebrates the day you came into it —<br />
        and I celebrate you, every single day.
      </p>

      <button className="hero__scroll" onClick={handleScroll} aria-label="Scroll down">
        <span className="hero__scroll-arrow" />
        <span className="hero__scroll-label">scroll</span>
      </button>
    </section>
  )
}
