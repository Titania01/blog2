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
      <div className="three">
        <h4>NEWSLETTER</h4>
        <p>Join now and get my free e-book, The Business <br/> of Design, where I'll give you five real-world <br/> lessons I learned the hard way while building <br/> my digital agency.</p>
        <div className="button" >SUBSCRIBE</div>
      </div>
    </div>
  )
}

export default Footer
