import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import AOS from "aos";
import "aos/dist/aos.css";
function Roadmap() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="story-section mission-section" id="roadmap">
        <Container fluid>
          <Heading Title="Roadmap " />
          <Row className="align-items-center">
            <Col lg="12">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  We have big plans for the community: NFT drops to Arab
                  holders, the launch of our treasury to fund high impact
                  organizations & social initiatives, a merchandise store launch
                  exclusively for members of the community, and more. This is
                  the beginning — Phase 2 commences soon after.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center road-map">
            <Col lg="3">
              <div className="road-brand" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/i/r-1.png" />
              </div>
            </Col>

            <Col lg="9">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  <strong> The First Arabs Social Treasury Launch </strong> We
                  set up The First Arabs Social Treasury and make the first
                  contribution of 10 ETH to a non-profit organization chosen by
                  community members in our{" "}
                  <a href="https://discord.com/invite/8zRx9Z7cEM" className="text-white">
                    Discord
                  </a>
                  . The community will be one of the first to make a
                  cryptocurrency donation to a non-profit in the Arab world and
                  we will work with the chosen organization to develop a wider
                  crypto fundraising strategy.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center road-map pt-0">
            <Col lg="3">
              <div className="road-brand" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/i/r-2.png" />
              </div>
            </Col>

            <Col lg="9">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  <strong> The “Late Arabs” Air Drop </strong> We release the
                  late First Arabs. These Arabs (held back from the sale) find
                  their way to the metaverse after being stuck in traffic
                  (الشوارع زحمة), and are airdropped to existing First Arab
                  holders.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center road-map pt-0">
            <Col lg="3">
              <div className="road-brand" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/i/r-3.png" />
              </div>
            </Col>

            <Col lg="9">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  <strong> The Mission Continues </strong> We donate another 40
                  ETH from the treasury to the next group of high impact
                  non-profit organizations chosen in the{" "}
                  <a href="https://discord.com/invite/8zRx9Z7cEM" className="text-white">
                    Discord
                  </a>{" "}
                  by community members.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center road-map pt-0">
            <Col lg="3">
              <div className="road-brand" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/i/r-4.png" />
              </div>
            </Col>

            <Col lg="9">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  <strong> The First Arabs Store سوق العرب الأولون </strong> We
                  begin development on the official merch store of The First
                  Arabs. The store will feature the coolest items from The First
                  Arabs collection. We will pre-launch the site for our
                  community members exclusively before opening it up to the
                  public.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center road-map pt-0 pb-0">
            <Col lg="3">
              <div className="road-brand" data-aos="zoom-in" data-aos-delay="8000">
                <Image src="/assets/i/r-5.png" />
              </div>
            </Col>

            <Col lg="9">
              <div className="story-text" data-aos="zoom-in" data-aos-delay="8000">
                <p>
                  <strong> The Next Phase المرحلة القادمة </strong> We will
                  donate another 70 ETH from the treasury to organizations
                  selected by our community. We will also begin Phase 2 of The
                  First Arabs mission:
                </p>
                <p className="mb-0">
                  <span>1.</span> Activating new features and related projects
                </p>
                <p className="mb-0">
                  <span>2.</span> Providing special perks & benefits to The
                  First Arabs holders
                </p>
                <p className="mb-0">
                  <span>3.</span> Continuing to support Arab communities and
                  high impact organizations worldwide
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Roadmap;
