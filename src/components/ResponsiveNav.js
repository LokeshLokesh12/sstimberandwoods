import React from 'react'

function ResponsiveNav() {
  return (
    <div className='ResponseNav' id='ResponseNav'>
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
              <a href="/contact">contact us</a>
            </li>
        <li >
          <div className="header_social" style={{display:"flex"}}>
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
        </li>
      </ul>
    </div>
  )
}

export default ResponsiveNav