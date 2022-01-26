import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import AOS from "aos";
import "aos/dist/aos.css";

function Missionsection() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToDiv = (type) => {
    const yOffset = -90;
    const element = document.getElementById(type);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

  }
  return (
    <>
      <div className="story-section mission-section">
        <Container fluid>
          <Heading Title="Mission" />
          <Row className="align-items-center">
            <Col lg="12">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  We’re on a mission to support underprivileged Arab communities across the world
                </p>
                <p>
                  As we progress through our{" "}
                  <a href="javascript:void(0)" onClick={() => { scrollToDiv('roadmap') }} className="text-white">
                    roadmap
                  </a>
                  , we will be deploying treasury funds to high impact
                  non-profit organizations. These will be selected by our
                  community, and will support causes such as hunger, public
                  health, youth empowerment, refugee aid, and more.
                </p>
                <p>
                  We commit to donating a share of (A) primary sales at key
                  milestones, (B) profits earned from secondary sales in
                  perpetuity, and (C) profits from future projects &
                  activations.
                </p>
                <p>
                  We hope to build a community that brings people closer
                  together, shares Arab culture across the world, and is a force
                  for good.
                </p>
                <p>
                  These NFTs are just the start — owning an Arab is your ticket
                  to all our future projects and benefits. Stay tuned.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Missionsection;
