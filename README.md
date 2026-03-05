# 🌹 Radhika's Birthday Website

A romantic React app to wish Radhika a Happy 20th Birthday.

## Project Structure

```
radhika-birthday/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite config
├── package.json
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Root component
    ├── styles/
    │   ├── global.css          # CSS variables, resets, utilities
    │   └── App.css
    ├── hooks/
    │   ├── useReveal.js        # Scroll-reveal IntersectionObserver
    │   └── useConfetti.js      # Confetti burst effect
    └── components/
        ├── Petals.jsx / .css   # Falling rose petals
        ├── Hero.jsx / .css     # Full-screen landing section
        ├── Surprise.jsx / .css # Gift button + confetti reveal
        ├── Message.jsx / .css  # Personal love letter card
        ├── Photos.jsx / .css   # Photo gallery (add your photos here!)
        ├── Countdown.jsx / .css# Live birthday countdown timer
        └── Footer.jsx / .css
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Personalise It

### 1. Add your photos
Open `src/components/Photos.jsx` and edit the `PHOTOS` array:
```js
const PHOTOS = [
  { src: '/photos/radhika1.jpg', caption: 'Our first date 💕' },
  { src: '/photos/radhika2.jpg', caption: 'My favourite girl 🌸' },
  { src: '/photos/us.jpg',       caption: 'Always & forever 🌹' },
]
```
Put your image files in the `public/photos/` folder.

### 2. Set the birthday date
Open `src/components/Countdown.jsx` and change:
```js
const BIRTHDAY = { month: 2, day: 15 } // March 15
// Month is 0-indexed: Jan=0, Feb=1, Mar=2 ... Dec=11
```

## Deploy (share with Radhika!)

```bash
npm run build
```
Then drag the `dist/` folder to https://app.netlify.com/drop — you'll get a free shareable link instantly! 🎁
