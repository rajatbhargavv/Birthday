import React from 'react'
import useReveal from '../hooks/useReveal'
import './Photos.css'

// ── ADD YOUR PHOTOS HERE ──────────────────────────────────────────────────────
// Replace the `src` values with your actual image URLs or local paths.
// You can also add more objects to this array for more photos.
// Example: { src: '/photos/radhika1.jpg', caption: 'Our first date 💕' }
// ─────────────────────────────────────────────────────────────────────────────


const PHOTOS = [
  { src: '/photos/babe and aunty.jpeg', caption: 'My beautiful babe🌹' },
  { src: '/photos/us2.jpeg', caption: 'You & me 💕' },
  { src: '/photos/babe.jpeg', caption: 'My favourite girl 🌸' },
]

function PhotoFrame({ src, caption, delay }) {
  return (
    <div className="photo-frame" style={{ animationDelay: `${delay}s` }}>
      {src ? (
        <img src={src} alt={caption} className="photo-frame__img" />
      ) : (
        <div className="photo-frame__placeholder">
          <span>📷</span>
          <p>Add your photo</p>
        </div>
      )}
      <div className="photo-frame__caption">{caption}</div>
    </div>
  )
}

export default function Photos() {
  const { ref, visible } = useReveal()

  return (
    <section id="photos" className="photos">
      <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <span className="section-label" style={{ color: 'var(--gold)' }}>✦ Our memories ✦</span>
        <h2 className="photos__heading">Us, Always</h2>

        <div className="photos__grid">
          {PHOTOS.map((p, i) => (
            <PhotoFrame key={i} src={p.src} caption={p.caption} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
