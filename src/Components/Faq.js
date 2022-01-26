import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import FaqAccordian from "./FaqAccordian.js";
import AOS from "aos";
import "aos/dist/aos.css";
function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="story-section mission-section faq-section" id="faq">
        <Container fluid>
          <Heading Title="FAQ" />
          <Row className="align-items-center">
            <Col lg="12">
              <FaqAccordian />

              <p className="d-block mt-4" data-aos="zoom-in" data-aos-delay="8000">
                For any questions not answered above, please reach out to us
                on our{" "}
                <a href="https://discord.com/invite/8zRx9Z7cEM" className="text-white">
                  {" "}
                  Discord
                </a>
                .
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Faq;
