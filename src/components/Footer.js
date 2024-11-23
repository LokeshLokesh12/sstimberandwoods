import React from 'react'
import { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
    <footer>
        <div className="footer_container_main">
        <section>
            <img className='logo_image_footer' src="/images/SRISAKTHI_Header_logo.png" alt="" />

        </section>
        <section className="getintouch">
            {/* <h1>GET IN TOUCH</h1> */}
            <h3>Get In Touch</h3>
            {/* <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p> */}
            <ul>
                <li>
                    <img src="/images/call.png" alt="call" />
                    {/* <p></p> */}
                    <div className="">
                        <a href="tel:+919790775189">+91 9790775189</a>
                        <br />
                        <a href="tel:+918248278511">+91 8248278511</a>
                    </div>
                </li>
                <li>
                    <img src="/images/email.png" alt="call" />
                    <a href="mailto:srisakthiinteriord23@gmail.com">srisakthiinteriord23@gmail.com</a>
                    {/* <p></p> */}
                </li>
                <li>
                    <img src="/images/pin.png" alt="call" />
                    <p> 140, sokkathaamman Kovil Street, <br />
                             Urapakkam, chengalpattu - 603 2010</p>
                    
                </li>
                <div className='social'>
                    <a href="https://www.instagram.com/sstimberworksninteriors/">
                        <img src="/images/instagram.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/sri-sakthi-timber-works-and-interiors-a86551339/">
                        <img src="/images/linkedin.png" alt="" />
                    </a>
                    <a href="https://wa.me/+918248278511">
                        <img src="/images/whatsapp.png" alt="" />
                    </a>
                    <a href="https://x.com/SRISAKTHI25">
                        <img src="/images/twitter.png" alt="" />
                    </a>
                    <a href="https://pin.it/2ZU7G1UYl">
                        <img src="/images/pinterest.png" alt="" />
                    </a>
                </div>
            </ul>
        <div className="blur"></div>
        </section>
        <section className="getintouch">
            <h3>Quick Links</h3>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/service">Service</a>
                </li>
                <li>
                    <a href="/testimonial">Testimonial</a>
                </li>
                <li>
                    <a href="/contact">Contact us</a>
                </li>
            </ul>
        </section>
        <section className="getintouch">
            <h3>Working Hours</h3>
            <p style={{margin:0}}>Monday - Saturday</p>
            <p>9.00 AM - 6.00 PM</p>
        </section>
        </div>
        </footer>
    </Fragment>
  )
}

export default Footer