export default function useConfetti() {
  const launch = () => {
    const colors = ['#c8536a', '#f2c4ce', '#d4a853', '#f9a8c9', '#fff0f4', '#e8c87a']

    for (let i = 0; i < 90; i++) {
      setTimeout(() => {
        const piece = document.createElement('div')
        const size = 6 + Math.random() * 9
        piece.style.cssText = `
          position: fixed;
          top: -20px;
          left: ${Math.random() * 100}vw;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          pointer-events: none;
          z-index: 9999;
          opacity: 1;
          animation: confettiFall ${2 + Math.random() * 2}s ease forwards ${Math.random() * 0.5}s;
        `
        document.body.appendChild(piece)
        setTimeout(() => piece.remove(), 4500)
      }, i * 28)
    }

    // Inject keyframes once
    if (!document.getElementById('confetti-style')) {
      const style = document.createElement('style')
      style.id = 'confetti-style'
      style.textContent = `
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }
  }

  return { launch }
}
