import React from 'react'

const App = () => {
  return (
    <>
      <header className='wrapper header'>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">Faq</a>
        <a href="#contact">Contact</a>
      </header>
      <section className='section'>
      </section>
      <section className='section features'>
        <h1 className="section-title" id="features">Features</h1>
      </section>
      <section className='section'>
        <h1 className="section-title" id="pricing">Pricing</h1>
      </section>
      <section className='section faq'>
        <h1 className="section-title" id="faq">FAQ</h1>
      </section>
      <section className='section'>
        <h1 className="section-title" id="contact">Contact</h1>
      </section>
    </>
  )
}

export default App