import React from 'react'
import useReveal from '../hooks/useReveal'
import './Message.css'

export default function Message() {
  const { ref, visible } = useReveal()

  return (
    <section id="message" className="message">
      <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <span className="section-label">✦ From my heart to yours ✦</span>

        <div className="message__card">
          <div className="message__card-inner">
            <div className="message__quote-mark">&ldquo;</div>
            <p className="message__text">
              I wish you a very happy birthday my baby girl. I love you so so so so much —
              I really wish I could kiss you right now at this sweet moment.
              I truly love you the most.
            </p>
            <p className="message__text" style={{ marginTop: '1.4em' }}>
              I really wish this birthday brings a lot of happiness into your life,
              that you live a long and beautiful life, and may all your dreams come true.
              May you always stay such a cutie pie, my dear. 🌸
            </p>
            <p className="message__signature">Forever yours 💕</p>
          </div>
        </div>
      </div>
    </section>
  )
}
