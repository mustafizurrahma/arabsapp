import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import ScrollAnimation from "react-animate-on-scroll";
function Herosection() {
  return (
    <>
      <div className="hero-section">
        <Container fluid>
          <Row>
            <Col lg="6">
              <div className="hero-text">
                <ScrollAnimation className="animate__animated animate__zoomIn">
                  <Heading Title="The First Arabs" />
                </ScrollAnimation>

                <h3 className="font-weight-bold">
                  A collection of 10,000 unique Arab<br></br> characters living
                  on the Ethereum blockchain.
                </h3>

                <p>
                  Be part of the first community to explore Arab culture in the
                  metaverse and support high-impact social
                  organizations.
                </p>

                <a href="https://discord.com/invite/8zRx9Z7cEM" className="cta-btn" style={{ width: "300px", display: "flex", justifyContent: "center" }}>
                  Join The First Arabs Discord
                </a>
                <br /><br />
                <span className="cta-btn" style={{ width: "300px", display: "flex", justifyContent: "center" }}>
                  Minting Soon
                </span>

                {/* <ScrollAnimation className="animate__animated animate__zoomIn">
                  <Image
                    src="/assets/i/final.jpg"
                    className="mint-box d-block"
                    style={{ width: '281px', height: '52px' }} />
                </ScrollAnimation> */}
              </div>

            </Col>
            <Col lg="1"></Col>
            <Col lg="5">
              <ScrollAnimation className="animate__animated animate__zoomIn">

              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Herosection;
