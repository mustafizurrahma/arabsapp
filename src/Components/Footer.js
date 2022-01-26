import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import "aos/dist/aos.css";

function Footer() {
  // form state ...
  const [mail, setMail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      mail: mail,
      //id :id ,

    }

    axios.post('https://sheet.best/api/sheets/794a743d-d54e-47c0-b56d-1d5ea11152ed', data).then((response) => {
      console.log(response);

      //clearing form feild 
      setMail('')

      // console.log(mail);
    }
    )
  }

  return (
    <>
      <div className="newsletterbox text-center" data-aos="zoom-in" data-aos-delay="8000">
        <h6>Sign up to our newsletter.</h6>
        <p>We’ll update you on major milestones of the project once a month.</p>

        <Form onSubmit={handleSubmit} >
          <Form.Group className="form-group"   >
            <div className="outline-box">
              <Form.Control type="email" placeholder="Email Address" required onChange={(e) => setMail(e.target.value)} value={mail} />
            </div>
            <Button variant="primary" type="submit">
              Sign me up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Footer;