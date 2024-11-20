import React from 'react'
import { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
        <secetion className="getintouch">
            <h1>GET IN TOUCH</h1>
            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
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
                    <a href="/">
                        <img src="/images/instagram.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/facebook.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/whatsapp.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/twitter.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/pinterest.png" alt="" />
                    </a>
                </div>
            </ul>
        <div className="blur"></div>
        </secetion>
        <footer>
        </footer>
    </Fragment>
  )
}

export default Footer