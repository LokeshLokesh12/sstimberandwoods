import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import FAQ from "./FAQ";
import Whyus from "./Whyus";
function main() {
  return (
    <main>
      <section>
        <div className="main">
          <img src="/images/main_background_img_OG.png" alt="" />
          <div className="content">
            
              <h1>
                Making your dream
                <br />
                home happen
              </h1>
              <h6>
              We bring your dream spaces to life with designs that harmonize utility,
               elegance, and personalized charm.
              </h6>
          
              <div className="">
                <a className="touch_btn" href="/contact">
                  contact us now
                </a>
              </div>
       
          </div>
        </div>
      </section>
      <section className="main_about">
        <div className="main_about_left">
          <img src="./images/about_us-3.jpg" alt="" />
        </div>
        <div className="main_about_right">
          <div className="content">
            <h6>step into Sri Sakthi interiors and timber works</h6>
            <h1>timeless designs creative solutions</h1>
            <p>
              At Sri Sakthi Timber Works & Interiors, we bring 25 years of
              expertise, blending fine timber craftsmanship with modern interior
              design. We deliver tailored solutions that enhance style,
              functionality, and durability, creating spaces that reflect your
              unique taste and stand the test of time.
            </p>
            <div className="">
              <a className="call_now" href="\about">
                know more
              </a>
            </div>
          </div>
          <div className="some_count">
            <div className="exp count_item">
              <h1> <CountUp start={0}  end={25} enableScrollSpy="true" scrollSpyOnce="true" duration={3} /> +</h1>
              <p>Years of Experience </p>
            </div>
            <div className="proj count_item">
              <h1><CountUp start={0}  end={850} enableScrollSpy="true" scrollSpyOnce="true" duration={2} /> +</h1>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="main_service">
        <div
          className="main_service_item big_item"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="content">
            <h1>Our Services</h1>
            <p id="main_content_p">
            We design custom interiors, including timber furniture, modular kitchens, wardrobes, and ceilings, delivering quality and functionality to suit your style.
            </p>
            <a className="black_white_btn " href="/contact">
              Talk With Us
            </a>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="/images/Residential.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="/images/house.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Residential Design</h2>
            <p>
            Transforming your home into a stylish, functional sanctuary tailored to your needs and preferences.
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="/images/Restaurant.jpg"
            alt=""
            className="background_image"
          />
          <div className="content main_content">
            <img
              src="/images/restaurant.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Restaurant Design</h2>
            <p>
            Crafting vibrant, welcoming spaces that enhance dining experiences and reflect your restaurant's identity
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="/images/Corporate.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="/images/table.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Corporate Design</h2>
            <p>
            Designing efficient and modern workspaces that foster collaboration, creativity, and professionalism.

            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="images/Commercial.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="/images/skyscrapers.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Commercial Design</h2>
            <p>
            Creating visually striking and practical spaces that engage customers and support your business goals.

            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="/images/Industrial.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="/images/factory.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Industrial Design</h2>
            <p>
            Designing robust, safe, and efficient industrial spaces to streamline operations and increase productivity.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container_grid">
          <h1>All-In-One Interior Design Services for Your Perfect Home</h1>
          <Container>
            <Row style={{ textAlign: "center" }}>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/kitchen.png" alt=""></img>
                  <p>Modular kitchen</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/wardrobe.png" alt=""></img>
                  <p>storage and wardrobe</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/crockery.png" alt=""></img>
                  <p>crockery design</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/dining-table.png" alt=""></img>
                  <p>space saving furniture</p>
                </div>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/tv-unit.png" alt=""></img>
                  <p>TV unit</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/study.png" alt=""></img>
                  <p>study Table</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/ceiling.png" alt=""></img>
                  <p>False Ceiling</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/light.png" alt=""></img>
                  <p>lights</p>
                </div>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/wallpaper.png" alt=""></img>
                  <p>wallpaper</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/paint-roller.png" alt=""></img>
                  <p>Wall panit</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/bathtub.png" alt=""></img>
                  <p>Bathroom</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/receptionist.png" alt=""></img>
                  <p>Foyer Designs</p>
                </div>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/furniture.png" alt=""></img>
                  <p>movable furniture</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/bunk-bed.png" alt=""></img>
                  <p>Kids bedroom</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img
                    className="pooja_room"
                    src="./images/worship-room.png"
                    alt=""
                  ></img>
                  <p>pooja room</p>
                </div>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <div className="content">
                  <img src="./images/door.png" alt=""></img>
                  <p>morden/asthetic doors </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="custom_main_container">
        <h1 className="custom_name">
          100% customized interiors by professionals
        </h1>
        <div className="custom">
          <div className="custom_container">
            <div className="kitchen content">
              <img src="./images/kitchen.jpg" loading="eager" alt="" />
              <h2>kitchen</h2>
            </div>
            <div className="bedroom content">
              <img src="./images/bedroom-min.jpg"  loading="eager" alt="" />
              <h2>bedroom</h2>
            </div>
            <div className="living content">
              <img src="./images/living.jpg"  loading="eager" alt="" />
              <h2>living</h2>
            </div>
            <div className="dining content">
              <img src="./images/dining-3.jpg"  loading="eager" alt="" />
              <h2>dining</h2>
            </div>
          </div>
        </div>
      </section>
      
      <Whyus/>
      <section id="testimonial" className="testimonial">
        <div className="testimonial_container">
          <div className="testimonial_left">
            <h1>Our Satisfied Clients</h1>
            <p>
             We value the trust and feedback of our clients, as it inspires us to continuously improve and deliver exceptional service. Your satisfaction is our priority, and every piece of feedback helps us perfect our craft and exceed expectations in each project.
            </p>
            <a className="touch_btn" style={{marginTop:"30px", padding:'12px 30px'}} href="/testimonial">Read more</a>
          </div>
          <div className="testimonial_right">
            <div className="client_words">
              <span>
                <img className="icon" src="./images/quote.png" alt="" />
              </span>
              <Carousel>
                <Carousel.Item>
                  <div className="content">
                    <h3>Anitha Krishnan, Chromepet</h3>
                    <p>
                    We hired Sri Sakthi Interiors to renovate our home in
                Chromepet, and their work was beyond exceptional. Their
                craftsmanship, from elegant timber furniture to custom
                interiors, was flawless
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="content">
              <h3>Suresh, Perungalathur</h3>
                  <p>
                  Sri Sakthi Interiors redesigned our living room in
                Perungalathur, and the results were amazing! They later handled
                a project for our villa in Maraimalai Nagar. From modern designs
                to traditional timberwork, they excel in everything
              </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="content">
                    <h3>Ravi Shankar, Urapakkam</h3>
                    <p>
                    Sri Sakthi Interiors transformed our residence in Urapakkam
                with beautiful custom furniture and stunning interior designs.
                Their dedication and craftsmanship are truly praiseworthy!
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section>
                <FAQ/>
      </section>
    </main>
  );
}

export default main;
