import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from "react-scroll"

const App = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`wrapper header ${hasScrolled ? "scrolled" : ""}`}>
        <ScrollLink
          to="features"
          spy
          smooth
          activeClass='link-active'
          offset={-100}
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="pricing"
          spy
          smooth
          activeClass='link-active'
          offset={-100}
        >
          Pricing
        </ScrollLink>
        <ScrollLink
          to="faq"
          spy
          smooth
          activeClass='link-active'
          offset={-100}
        >
          Faq
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy
          smooth
          activeClass='link-active'
          offset={-100}
        >
          Contact
        </ScrollLink>
      </header>

      <section className='section hero blue-bg'>
      </section>

      <section name="features" className='section'>
        <h1 className="section-title">Features</h1>
      </section>

      <section name="pricing" className='section blue-bg'>
        <h1 className="section-title">Pricing</h1>
      </section>

      <section name="faq" className='section'>
        <h1 className="section-title">FAQ</h1>
      </section>

      <section name="contact" className='section blue-bg'>
        <h1 className="section-title">Contact</h1>
      </section>
    </>
  )
}

export default App