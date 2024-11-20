import Accordion from 'react-bootstrap/Accordion';
import React,{Fragment} from 'react';
function FAQ() {
  return (
    <Fragment>
    <div className="FAQ_container">
        <h1 className='faq_title'>Frequently Asked Questions</h1>
        <div className="content">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I get started with Sri Sakthi Timber Works & Interiors?</Accordion.Header>
            <Accordion.Body>
                <p>
                    Getting started is simple! Contact us via our website, email, or phone, and share your requirements. We’ll arrange an initial consultation to discuss your vision and preferences.
                </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is the timeline for completing a project?</Accordion.Header>
            <Accordion.Body>
                <p>
            At Sri Sakthi Timber Works & Interiors, we typically complete projects within <b>55 Days</b>, depending on the scope and complexity of the work.
                </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What sets Sri Sakthi Timber Works & Interiors apart?</Accordion.Header>
            <Accordion.Body>
              <p>
              With <b>25 Years of Expertise</b>, we blend fine timber craftsmanship with modern interior design. Our tailored solutions prioritize functionality, style, and durability, ensuring spaces that are both beautiful and practical.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you offer custom designs?</Accordion.Header>
            <Accordion.Body>
              <p>Yes! All our designs are fully customizable to suit your taste, lifestyle, and budget. Whether it’s a unique wood feature or a complete interior makeover, we create solutions tailored just for you.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              <p>We provide end-to-end interior design and woodwork solutions, including:</p>
              <ul>
                <li>Custom timber features</li>
                <li>Complete interior design and execution</li>
                <li>Renovations and upgrades</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How does the design process work?</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                    <h6>Step 1: Consultation</h6>
                    <p>We begin with an in-depth consultation to understand your needs and preferences.</p>
                </li>
                <li>
                    <h6>Step 2: Design & Planning</h6>
                    <p>Our team develops detailed designs and layouts, including material recommendations.</p>
                </li>
                <li>
                    <h6>Step 3: Execution</h6>
                    <p>Skilled craftsmen and interior experts bring the vision to life with rigorous quality checks throughout the process.</p>
                </li>
                <li>
                    <h6>Step 4: Completion</h6>
                    <p>Your project is delivered on time, within 55 days, ready to enhance your lifestyle.</p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    </div>
    </Fragment>
  );
}

export default FAQ;