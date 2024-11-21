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
                Contact us for a consultation, and we’ll help you plan your project from start to finish.
                </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>WWhat is the timeline for completing a project?</Accordion.Header>
            <Accordion.Body>
                <p>
                Timelines depend on the scope, and we’ll provide a clear estimate after reviewing your project.
                </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What sets Sri Sakthi Timber Works & Interiors apart?
            </Accordion.Header>
            <Accordion.Body>
              <p>
              We offer personalized, high-quality designs with a focus on customer satisfaction and attention to detail.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you offer custom designs?</Accordion.Header>
            <Accordion.Body>
              <p>Yes, all our designs are tailored to your specific needs and preferences.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              <p>We specialize in interior design, timber works, modular kitchens, wardrobes, office spaces, and more.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How does the design process work?</Accordion.Header>
            <Accordion.Body>
             <p>We start with your ideas, create a customized plan, and then execute it with precision and care.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    </div>
    </Fragment>
  );
}

export default FAQ;