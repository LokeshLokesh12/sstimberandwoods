import React, { Fragment,useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        mobile_number: '',
        message: ''
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxflpEM8l5OAEdl7f3C-OpE3K0n6gH75DfOvci43Jw6m5BML1GvjVuvkAUBE6TszaeU9g/exec';
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        if(formData.mobile_number.length < 10){
            
            toast.error('Check Your Mobile Number', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            setIsSubmitting(false);
            return
        }
        const formDataWithStringMobile = {
          ...formData,
          mobile_number: formData.mobile_number.trim().replace('+', ''), // Ensure clean input
        };
              
        const promise = fetch(scriptURL, {
          method: 'POST',
          body: new URLSearchParams(formDataWithStringMobile),
        });
      
        toast.promise(
          promise,
          {
            pending: 'Submitting your data...',
            success: 'Data submitted successfully! 🎉',
            error: 'Error submitting data. Please try again. 😥',
          },
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
           }
        );
      
        try {
          const response = await promise;
          const result = await response.json();
      
          if (result.status === 200) {
            setFormData({ name: '', mail: '', mobile_number: '', message: '' });
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      
        setIsSubmitting(false);
      };
      
  return (
    <Fragment>
        <Header/>
        <section>
        <div className="about_us_main">
          <h1> Contact Us </h1>
          <p> <a href="/"> Home</a> / Contact Us</p>
          <div className="blur blur_1"></div>
          <div className="blur blur_2"></div>
        </div>
      </section>
        <section>
            <div className="contact_us_main_container">
            <ToastContainer />
                <div className="contact_us_left">
                    <img src="/images/contact_us_image.png" alt="" />
                </div>
                <div className="contact_us_right">
                    <h1>Let's Connect</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae ratione deserunt consequatur officia incidunt illum dolorem </p>
                <div className="form_container">
                 <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="tel"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        required
                    />
                    <Form.Text className="text-muted">
                            <sub>
                            We'll use this number to contact you.
                            </sub>
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                    </Form.Group>

                    <Button variant="dark" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>
                </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default Contact
