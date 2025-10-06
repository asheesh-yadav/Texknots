import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9gj1rl9',      // Replace with your actual Service ID
        'template_u6cfcwe',     // Replace with your Template ID
        form.current,
        'Zp2JO4BEspRTJ03xq'       // Replace with your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Something went wrong, please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Left Column: Contact Info */}
      <div className="contact-info" style={{ fontWeight: '200' }}>
        <h2>Contact Us</h2>

        <div className="contact-block">
          <p>
            <strong>INDIA (Noida)</strong><br />
            Mr Khagesh Agarwal<br />
            A-28, Sector 59, Noida<br />
            Uttar Pradesh 201301<br />
            India<br /><br />
            khagesh@texknots.com<br />
            +91 120 4314661
          </p>
        </div>

        <div className="contact-block">
          <p>
            <strong>SPAIN (Mallorca)</strong><br />
            Stefanie Bacon<br />
            stefanie@texknots.com<br />
            +34 669 747 847
          </p>
        </div>

        <div className="contact-block">
          <p>
            <strong>BRAZIL (São Paulo)</strong><br />
            Vivian Rodrigues<br />
            vivian@texknots.com<br />
            +55 11 98594 3208
          </p>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name *</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your address" />

          <div className="form-row">
            <div className="form-col">
              <label>Email *</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-col">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" />
            </div>
          </div>

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Type the subject" />

          <label>Message</label>
          <textarea name="message" placeholder="Type your message here..." rows={4}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
