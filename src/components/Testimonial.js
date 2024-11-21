import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StarRatings from "react-star-ratings";

function Testimonial() {
  return (
    <Fragment>
      <Header />
      <section>
        <div className="about_us_main">
          <h1> Testimonial </h1>
          <p>
            {" "}
            <a href="/"> Home</a> / Testimonial
          </p>
          <div className="blur blur_1"></div>
          <div className="blur blur_2"></div>
        </div>
      </section>
      <section>
        <div className="Testimonial_main_container">
          <h6 className="title">Testimonial</h6>
          <h1 className="sub_title">What Clients say</h1>
          <p className="des">
            Every suggestion helps us grow, refine our approach, and achieve
            excellence in every project we undertake.
          </p>
          <div className="content">
            <div className="item">
              <p>
                "We hired Sri Sakthi Interiors to renovate our home in
                Chromepet, and their work was beyond exceptional. Their
                craftsmanship, from elegant timber furniture to custom
                interiors, was flawless."
              </p>
              <div>
                <StarRatings
                  rating={4.5}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Anitha Krishnan, Chromepet</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "Sri Sakthi Interiors redesigned our living room in
                Perungalathur, and the results were amazing! They later handled
                a project for our villa in Maraimalai Nagar. From modern designs
                to traditional timberwork, they excel in everything."
              </p>
              <div>
                <StarRatings
                  rating={4.8}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Suresh, Perungalathur</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "Sri Sakthi Interiors transformed our residence in Urapakkam
                with beautiful custom furniture and stunning interior designs.
                Their dedication and craftsmanship are truly praiseworthy!"
              </p>
              <div>
                <StarRatings
                  rating={4.7}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Ravi Shankar, Urapakkam</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "Just wanted to say thanks to Sri Sakthi Interiors for the
                fantastic job they did on our living room in Perungalathur. The
                design is so clean and modern, and it makes our space feel so
                cozy. Can’t wait to hire them again!"
              </p>
              <div>
                <StarRatings
                  rating={4.6}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Suman, Guduvanchery</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "Can’t say enough good things about Sri Sakthi Interiors. They
                worked on our bedroom in Maraimalai Nagar, and it looks
                gorgeous! The attention to detail is unbelievable. We’re already
                planning to bring them in for more projects!"
              </p>
              <div>
                <StarRatings
                  rating={4.9}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Nisha, Kattankulathur</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "We chose Sri Sakthi Interiors to renovate our apartment in
                Pallavaram and were so impressed that we hired them for our
                property in Old Chengalpattu Town. Their designs seamlessly
                blend elegance and functionality, making every space look
                extraordinary."
              </p>
              <div>
                <StarRatings
                  rating={4.8}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Lakshmi, Maraimalai Nagar</h3>
              </div>
            </div>

            <div className="item">
              <p>
                "Sri Sakthi Interiors handled our bedroom redesign in Maraimalai
                Nagar and gave it a luxurious touch. The custom-made wardrobes
                were perfect! Their team is skilled and delivered stunning
                results."
              </p>
              <div>
                <StarRatings
                  rating={4.7}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor="#666666"
                />
                <h3>Karthik Srinivas, Nandivaram</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Testimonial;
