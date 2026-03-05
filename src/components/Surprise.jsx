import React, { useState } from 'react'
import useReveal from '../hooks/useReveal'
import useConfetti from '../hooks/useConfetti'
import './Surprise.css'

export default function Surprise() {
  const [opened, setOpened] = useState(false)
  const { ref, visible } = useReveal()
  const { launch } = useConfetti()

  const handleOpen = () => {
    setOpened(true)
    launch()
  }

  return (
    <section id="surprise" className="surprise">
      <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
        <span className="section-label">✦ A little something for you ✦</span>
        <h2 className="section-heading surprise__heading">Your Birthday Surprise</h2>

        {!opened ? (
          <button className="surprise__btn" onClick={handleOpen}>
            Open Your Gift 🎁
          </button>
        ) : (
          <div className="surprise__reveal">
            <span className="surprise__heart">💖</span>
            <p className="surprise__text">
              Happy 20th Birthday,<br />
              my cutie pie Radhika! 🌹<br />
              You are so deeply loved.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
