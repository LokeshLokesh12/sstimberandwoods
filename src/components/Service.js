import React,{Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FAQ from './FAQ';
import { Helmet } from 'react-helmet';
function Service() {
  return (
    <Fragment>
      <Helmet>
      <meta
        name="description"
        content="Explore the services offered by Sri Sakthi Interiors and Timber Works, Chennai. Specializing in interior design, modular kitchens, custom furniture, bespoke woodwork, and premium timber solutions for homes and offices."
      />
      <meta
        name="keywords"
        content="Sri Sakthi Interiors services, timber works Chennai, interior design services Chennai, modular kitchens, custom furniture, bespoke woodwork, home interiors Chennai, office interiors Chennai, premium timber solutions, furniture design Chennai"
      />
      <title>Service</title>


      </Helmet>
      <Header/>
        <section>
        <div className="about_us_main">
          <h1> Service </h1>
          <p> <a href="/"> Home</a> / Service</p>
          <div className="blur blur_1"></div>
          <div className="blur blur_2"></div>
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
            We design custom interiors, including timber furniture, modular kitchens, wardrobes, and ceilings, delivering quality and functionality to suit your style.
            </p>
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
            Transforming your home into a stylish, functional sanctuary tailored to your needs and preferences.

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
            Crafting vibrant, welcoming spaces that enhance dining experiences and reflect your restaurant's identity.

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
            Designing efficient and modern workspaces that foster collaboration, creativity, and professionalism.
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
            Creating visually striking and practical spaces that engage customers and support your business goals.
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

export default Service