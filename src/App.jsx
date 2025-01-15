import React from 'react'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden' >
      <Hero />
    <About/>
    <section className='min-h-screen bg-black'></section>
    <section className='min-h-screen bg-black'></section>
      </div>
  )
}

export default App
