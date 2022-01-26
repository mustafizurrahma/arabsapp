import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import AOS from "aos";
import "aos/dist/aos.css";
function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="story-section mission-section">
        <Container fluid>
          <Heading Title="Team " />
          <Row className="align-items-center">
            <Col lg="12">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  Ahlan! We’re a group of Arab friends dreaming of a brighter
                  future for the Arab world, both in reality and the metaverse.
                  As you know by now we’re passionate about the future of
                  blockchain, supporting our communities, and bringing people
                  closer together.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="team-box">
            <Col lg="3" md="6">
              <div className="team-card" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/pictures/Team/Shiekh Meta.png" className="mb-4" />
                <h5 className="mb-2">Sheikh Meta</h5>
                <p>Like the chicken from the butcher</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="team-card" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/pictures/Team/Bint Sina.png" className="mb-4" />
                <h5 className="mb-2">Bint Sina</h5>
                <p>You can't see me</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="team-card" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/pictures/Team/General Ful.png" className="mb-4" />
                <h5 className="mb-2">General Ful</h5>
                <p>More Pan-arabs more ful</p>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="team-card" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/pictures/Team/mda.png" className="mb-4" />
                <h5 className="mb-2">3.0mda</h5>
                <p>Still on the way</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;
