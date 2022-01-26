import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TermsModal from "./TermsModal";
import AOS from "aos";
import "aos/dist/aos.css";
function Copright() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [inventoryModalshow, setinventoryModalshow] = useState(false);
  const inventoryModalClose = () => setinventoryModalshow(false);
  const inventoryModalOpen = () => setinventoryModalshow(true);

  return (
    <>
      <div className="copy-right text-center">
        <p>© 2021 Desert Labs</p>
        <p>
          <Link to="/" onClick={inventoryModalOpen} className="text-white">
            Terms & Conditions
          </Link>
        </p>
      </div>
      <TermsModal show={inventoryModalshow} handleClose={inventoryModalClose} />
    </>
  );
}

export default Copright;
