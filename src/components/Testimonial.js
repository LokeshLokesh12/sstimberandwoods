import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
            {" "}
            Every suggestion helps us grow, refine our approach, and achieve
            excellence in every project we undertake.
          </p>
          <div className="content">
            <div className="item">
              <p>
                We recently hired Sri Sakthi Interiors and Timber Works to
                renovate our living room and couldn't be happier with the
                results. Their attention to detail and craftsmanship are
                exceptional. From the custom timber furniture to the elegant
                interior design, every element exceeded our expectations. The
                team was professional, punctual, and truly understood our
                vision. Highly recommended!
              </p>
              <h3>Priya Kumar, Chennai</h3>
            </div>
            <div className="item">
              <p>
                Sri Sakthi Interiors and Timber Works transformed my office
                space into a modern and functional environment. Their expertise
                in combining stylish interiors with durable timber work is
                unmatched. They completed the project on time and within budget,
                making the entire experience hassle-free. If you're looking for
                quality and creativity, this is the team to choose!
              </p>
              <h3>Rahul Verma, Coimbatore</h3>
            </div>
            <div className="item">
              <p>
                I was impressed with the exceptional service provided by Sri
                Sakthi Interiors and Timber Works. They crafted custom wardrobes
                and a modular kitchen for our home, and the results were
                stunning. Their team was very accommodating to our requests and
                provided valuable design suggestions. The materials used were of
                top-notch quality, and the finish was flawless. A big thank you
                for making our dream home a reality!
              </p>
              <h3>Meenakshi Iyer, chennai</h3>
            </div>
            <div className="item">
              <p>
                Sri Sakthi Timber Works & Interiors exceeded all our
                expectations! Their craftsmanship and attention to detail are
                unparalleled. Our home now boasts elegant timber features that
                not only enhance its beauty but also stand out for their
                durability. We couldn't be happier with the result!
              </p>
              <h3>Anand R., Chennai</h3>
            </div>
            <div className="item">
              <p>
                The team at Sri Sakthi Timber Works & Interiors truly
                understands what it means to combine functionality with style.
                From the initial design to the final touches, they were
                professional, creative, and attentive to our needs. Our office
                interior has transformed into a modern and inspiring space,
                thanks to their expertise!
              </p>
              <h3>Deepa M., Coimbatore</h3>
            </div>
            <div className="item">
              <p>
                Working with Sri Sakthi Timber Works & Interiors was a fantastic
                experience. Their ability to blend traditional craftsmanship
                with innovative design is remarkable. The custom woodwork they
                created for our living room is simply stunning and has become a
                conversation starter for all our guests!
              </p>
              <h3>Vikram S., Bangalore</h3>
            </div>
            <div className="item">
              <p>
                With 25 years of experience, it's no wonder Sri Sakthi Timber
                Works & Interiors delivers such exceptional quality. They
                transformed our outdated interiors into a space that's stylish,
                functional, and built to last. Their dedication to excellence is
                evident in every detail.
              </p>
              <h3>Priya K., Hyderabad</h3>
            </div>
            <div className="item">
              <p>
                Sri Sakthi Timber Works & Interiors turned our vision into
                reality with unmatched precision and creativity. Their team went
                above and beyond to ensure every detail was perfect. Our new
                interiors are not just functional but radiate elegance and
                warmth. Highly recommended!
              </p>
              <h3>Rahul N., Trichy</h3>
            </div>
            <div className="item">
              <p>
                I was amazed at how Sri Sakthi Timber Works & Interiors could
                bring life to my ideas. Their craftsmanship in timber combined
                with their modern interior solutions gave my home a luxurious
                feel. The durability and aesthetic appeal of their work are
                outstanding!
              </p>
              <h3>Anitha P., Madurai</h3>
            </div>
            <div className="item">
              <p>
                Sri Sakthi Timber Works & Interiors delivered a perfect blend of
                traditional and contemporary designs for our boutique. Their
                attention to detail and ability to tailor the space to our
                brand's identity was remarkable. We’ve been getting endless
                compliments from our customers!
              </p>
              <h3>Ravi T., Salem</h3>
            </div>
            <div className="item">
              <p>
                From the initial consultation to the final installation, the
                team at Sri Sakthi Timber Works & Interiors was professional and
                responsive. Their passion for quality and innovation truly sets
                them apart. Our new interiors are stunning and have added
                immense value to our property.
              </p>
              <h3>Meena L., Erode</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Testimonial;
