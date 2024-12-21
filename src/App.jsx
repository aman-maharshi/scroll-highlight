import React from 'react'

const App = () => {
  return (
    <>
      <header className='wrapper header'>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Faq</a>
        <a href="/">Contact</a>
      </header>
      <section className='section'>
      </section>
      <section className='section features'>
        <h1 className="section-title">Features</h1>
      </section>
      <section className='section'>
        <h1 className="section-title">Pricing</h1>
      </section>
      <section className='section faq'>
        <h1 className="section-title">FAQ</h1>
      </section>
      <section className='section'>
        <h1 className="section-title">Contact</h1>
      </section>
    </>
  )
}

export default App