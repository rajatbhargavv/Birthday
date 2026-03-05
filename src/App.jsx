import React from 'react'
import Petals from './components/Petals'
import Hero from './components/Hero'
import Surprise from './components/Surprise'
import Message from './components/Message'
import Photos from './components/Photos'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  return (
    <div className="app">
      <Petals />
      <Hero />
      <Surprise />
      <Message />
      <Photos />
      <Countdown />
      <Footer />
    </div>
  )
}
