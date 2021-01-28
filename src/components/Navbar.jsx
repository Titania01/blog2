import React from "react"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="#top">
        <img src="https://mattdowney.co/wp-content/themes/mdv4/img/img-logo-light-bg.svg" alt=""/>
      </a>
      <span className="spacer" />
      <a href="#about">
        <span>About</span>
      </a>
      <a href="#blog" className="active">
        <span>Blog</span>
      </a>
      <a href="#newsletter">
        <span>Newsletter</span>
      </a>
    </nav>
  )
      
}

export default Navbar