import React, { useEffect, useRef } from 'react'
import './Petals.css'

const PETAL_COUNT = 24

export default function Petals() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement('div')
      petal.className = 'petal'

      const hue = 340 + Math.random() * 20
      const size = 14 + Math.random() * 12

      petal.style.cssText = `
        left: ${Math.random() * 100}vw;
        width: ${size}px;
        height: ${size * 1.3}px;
        animation-duration: ${6 + Math.random() * 9}s;
        animation-delay: ${Math.random() * 12}s;
        background: radial-gradient(ellipse at 40% 30%,
          hsl(${hue}, 80%, 85%),
          hsl(${hue}, 60%, 68%)
        );
        transform: rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.8});
      `
      container.appendChild(petal)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div className="petal-container" ref={containerRef} />
}
