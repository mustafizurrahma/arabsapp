import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Heading(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <h2 className="my-heading" data-aos="zoom-in" data-aos-delay="8000"> {props.Title}</h2>

    </>
  );
}

export default Heading;
