import React, { Fragment } from 'react'
import Header from './Header'
import CountUp from 'react-countup'
import Footer from './Footer'
import FAQ from './FAQ'
import Whyus from './Whyus'
function About() {
  return (
    <Fragment>
      <Header />
      <section>
        <div className="about_us_main">
          <h1> About us </h1>
          <p> <a href="/"> Home</a> / About Us</p>
          <div className="blur blur_1"></div>
          <div className="blur blur_2"></div>
        </div>
      </section>
      <section>
        <div
          className="main_about">
          <div className="main_about_left"  >
            <img src="./images/about_us-3.jpg" alt="" />
          </div>
          <div className="main_about_right">
            <div className="content" style={{paddingBottom:'10px',margin:'150px 0 0 -4rem'}}>
              <h6> Welcome to Sri Sakthi Interiors and Timber Works</h6>
              {/* <emp>Since 1999</emp> */}
              <h1>STYLISh DESIGNS, INNOVATIVE IDEAS</h1>
              {/* <p>
                        At Sri Sakthi Timber Works & Interiors, we bring 25 years of refined expertise to every project, combining the elegance of fine timber craftsmanship with cutting-edge interior design. 
                        Our focus is on delivering tailored solutions that enhance functionality, style, and durability.
                        Whether it’s a custom wood feature or a complete interior overhaul, 
                        we leverage our deep industry knowledge to create spaces that reflect your unique taste and needs. 
                        With a commitment to quality and innovation, 
                        we transform ordinary spaces into extraordinary environments that stand the test of time.
                        </p> */}

              <p style={{margin:"0"}}>
                "At Sri Sakthi Timber Works & Interiors,
                 we bring 25 years of refined expertise to every project,
                  combining the elegance of fine timber craftsmanship with cutting-edge interior design.
                  Our focus is on delivering tailored solutions that enhance functionality, style, and durability.
              </p>
              <p>
                  Whether it’s a custom wood feature or a complete interior overhaul,
                  we leverage our deep industry knowledge to create spaces that reflect your unique taste and needs.
                  With a commitment to quality and innovation, 
                  we transform ordinary spaces into extraordinary environments that stand the test of time."
              </p>
            <div className="some_count" style={{margin:"20px"}}>
              <div className="exp count_item">
                <h1> <CountUp start={0} end={25} enableScrollSpy="true" scrollSpyOnce="true" duration={3} /> +</h1>
                <p>Years of Experience </p>
              </div>
              <div className="proj count_item">
                <h1><CountUp start={0} end={850} enableScrollSpy="true" scrollSpyOnce="true" duration={2} /> +</h1>
                <p>Projects Completed</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Whyus/>
      <section>
        <div className="about_door">
          <div className="about_door_left">
            <h1>Mastering the Art of Door Crafting with Decades of Expertise <span className='since'>since 1999</span></h1>
             
            <p>We specialize in crafting high-quality doors that combine durability, functionality, and aesthetic appeal. Whether you need sleek modern designs, classic wooden styles, or custom-built solutions, our doors are designed to meet your unique requirements. With precision craftsmanship and premium materials, we ensure every door enhances the beauty and security of your space, delivering a perfect blend of style and performance.</p>
          </div>
          <div className="about_door_right"></div>
        </div>
      </section>
      <FAQ/>
      <Footer/>
    </Fragment>
  )
}

export default About