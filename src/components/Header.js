import React, { Fragment } from 'react'
// import ResponsiveNav from './ResponsiveNav'
function Header() {
  return (
    <Fragment>
      <header className="header">
        <div className="right_header">
          {/* <div className="logo"></div> */}
          <img className='logo' src="./images/SRISAKTHI_Header_logo.png" loading='lazy' alt="logo" />
        </div>
        <div className="left_header">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about us</a>
            </li>
            <li>
              <a href="/service">service</a>
            </li>
            <li>
              <a href="/testimonial">testimonial</a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
          </ul>
        </div>

        <div className="header_social">

          <ul>
            <li>
              <a href="/">
                <img src="/images/instagram_header_social.png" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/facebook_header_social.png" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/whatsapp_header_social.png" alt="" />
              </a>
            </li>
          </ul>

        </div>
        <div className="humberger_menu">
        </div>
      </header>
      {/* <ResponsiveNav/> */}
    </Fragment>
  )
}

export default Header