import React, { Fragment, useEffect } from 'react'
import ResponsiveNav from './ResponsiveNav'
function Header() {
  // const[button,setbutton]=useState(true)
  useEffect(()=>{
    let  menu = document.getElementById('menu')
    let ResponseNav = document.getElementById('ResponseNav')
    let body = document.getElementById('body')
    menu.addEventListener('click', (e) =>{
        ResponseNav.classList.toggle('open_res_nav');
        console.log(body);
         
        body.classList.toggle("freeze")
    })
  })
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
              <a href="/contact">contact us</a>
            </li>
          </ul>
        </div>

        <div className="header_social">
          <ul>
            <li>
              <a href="https://www.instagram.com/sstimberworksninteriors">
                <img src="/images/instagram_header_social.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://x.com/SRISAKTHI25">
                <img src="/images/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+918248278511">
                <img src="/images/whatsapp_header_social.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div id='menu' className="humberger_menu">
          <i className=" fa-solid fa-bars" style={{color: "#ffffff"}}></i>
        </div>
      </header>
      <ResponsiveNav/>
    </Fragment>
  )
}

export default Header