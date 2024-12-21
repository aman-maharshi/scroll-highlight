import React, { useState, useEffect } from 'react'

const App = () => {

  return (
    <>
      <header className="wrapper header">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">Faq</a>
        <a href="#contact">Contact</a>
      </header>

      <section className='section hero'>
      </section>

      <section id="features" className='section'>
        <h1 className="section-title">Features</h1>
      </section>

      <section id="pricing" className='section pricing'>
        <h1 className="section-title">Pricing</h1>
      </section>

      <section id="faq" className='section'>
        <h1 className="section-title">FAQ</h1>
      </section>

      <section id="contact" className='section pricing'>
        <h1 className="section-title">Contact</h1>
      </section>
    </>
  )
}

export default App