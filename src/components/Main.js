import React from "react";
import { Fade } from "react-reveal";
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
          <img src="./images/main_background2.jpg" alt="" />
          <div className="content">
            <Fade left>
              <h1>
                Making your dream
                <br />
                home happen
              </h1>
            </Fade>
            <Fade right>
              <h6>
                We specialize in creating personalized spaces that reflect your
                vision, blending functionality, style, and comfort.
              </h6>
            </Fade>
            <Fade bottom>
              <div className="">
                <a className="touch_btn" href="#touch">
                  contact us now
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="main_about">
        <div className="main_about_left">
          <img src="./images/about_us-3.jpg" alt="" />
        </div>
        <div className="main_about_right">
          <div className="content">
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

            <p>
              At Sri Sakthi Timber Works & Interiors, we bring 25 years of
              expertise, blending fine timber craftsmanship with modern interior
              design. We deliver tailored solutions that enhance style,
              functionality, and durability, creating spaces that reflect your
              unique taste and stand the test of time.
            </p>
            <div className="">
              <a className="call_now" href="\">
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
          className="main_service_item"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="content">
            <h1>Our Services</h1>
            <p id="main_content_p">
              Far far away behind the word mountains far from the countries
              Vokalia and Consonantia there live the blind texts.
            </p>
            <a className="black_white_btn" href="/service">
              Talk With Us
            </a>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="./images/Residential.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="./images/house.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Residential Design</h2>
            <p>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="./images/Restaurant.jpg"
            alt=""
            className="background_image"
          />
          <div className="content main_content">
            <img
              src="./images/restaurant.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Restaurant Design</h2>
            <p>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="./images/Corporate.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="./images/table.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Corporate Design</h2>
            <p>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="./images/commercial.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="./images/skyscrapers.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Commercial Design</h2>
            <p>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
        <div className="main_service_item">
          <img
            src="./images/Industrial.jpg"
            alt=""
            className="background_image"
          />
          <div className="content">
            <img
              src="./images/factory.png"
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="service_icon"
            />
            <h2>Industrial Design</h2>
            <p>
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container_grid">
          <h1>End-to-End Interior solutions for your home</h1>
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
          <div class="custom_container">
            <div class="kitchen content">
              <img src="./images/kitchen.jpg" alt="" />
              <h2>kitchen</h2>
            </div>
            <div class="bedroom content">
              <img src="./images/bedroom-min.jpg" alt="" />
              <h2>bedroom</h2>
            </div>
            <div class="living content">
              <img src="./images/living.jpg" alt="" />
              <h2>living</h2>
            </div>
            <div class="dining content">
              <img src="./images/dining-3.jpg" alt="" />
              <h2>dining</h2>
            </div>
          </div>
        </div>
      </section>
      
      <Whyus/>
      <section id="testimonial" className="testimonial">
        <div className="testimonial_container">
          <div className="testimonial_left">
            <h1>our happy clients</h1>
            <p>
              {/* We deeply appreciate the trust and feedback from our clients.
            Your satisfaction motivates us to innovate and provide the best services possible.
            It helps us grow, improve, and deliver excellence in every project we undertake. */}
              We deeply appreciate the trust and feedback of our clients. Your
              satisfaction drives us to innovate and deliver the highest quality
              of service. Every suggestion helps us grow, refine our approach,
              and achieve excellence in every project we undertake.
            </p>
            <a className="touch_btn" style={{marginTop:"30px", padding:'12px 30px'}} href="/testimonial">view more</a>
          </div>
          <div className="testimonial_right">
            <div className="client_words">
              <span>
                <img className="icon" src="./images/quote.png" alt="" />
              </span>
              <Carousel>
                <Carousel.Item>
                  <div className="content">
                    <h3>Priya Kumar, Chennai</h3>
                    <p>
                      We recently hired Sri Sakthi Interiors and Timber Works to
                      renovate our living room and couldn't be happier with the
                      results. Their attention to detail and craftsmanship are
                      exceptional. From the custom timber furniture to the
                      elegant interior design, every element exceeded our
                      expectations. The team was professional, punctual, and
                      truly understood our vision. Highly recommended!
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="content">
              <h3>Rahul Verma, Coimbatore</h3>
                  <p>
                Sri Sakthi Interiors and Timber Works transformed my office
                space into a modern and functional environment. Their expertise
                in combining stylish interiors with durable timber work is
                unmatched. They completed the project on time and within budget,
                making the entire experience hassle-free. If you're looking for
                quality and creativity, this is the team to choose!
              </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="content">
                    <h3>Meenakshi Iyer, chennai</h3>
                    <p>
                      I was impressed with the exceptional service provided by
                      Sri Sakthi Interiors and Timber Works. They crafted custom
                      wardrobes and a modular kitchen for our home, and the
                      results were stunning. Their team was very accommodating
                      to our requests and provided valuable design suggestions.
                      The materials used were of top-notch quality, and the
                      finish was flawless. A big thank you for making our dream
                      home a reality!
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
