import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="one">
        <img src="https://mattdowney.co/wp-content/themes/mdv4/img/logo-bg.svg" alt=""/>
        <h4>Digital is in my DNA <sup>TM</sup>  <br/> © 2005 - 2021
        </h4>
        <span><img src="https://mattdowney.co/wp-content/themes/mdv4/img/icon-instagram-footer.svg" alt=""/>
        <img src="https://mattdowney.co/wp-content/themes/mdv4/img/icon-twitter-footer.svg" alt="" className="last" />
        </span>
      </div>
      <div className="two">
        <h4>EXPLORE</h4>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Privacy</p>
      </div>
      <div className="three"></div>
    </div>
  )
}

export default Footer
