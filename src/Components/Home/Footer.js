import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <div>
    <div className="footercontainer">
        <div className="f_section">
          <div className="heading">Information</div>
          <div className="para_section">
            <p><Link>Instagram</Link></p>
            <p><Link>Facebook</Link></p>
            <p><Link>LinkedIn</Link></p>
            <p><Link>Github.io</Link></p>
          </div>
        </div>

        <div className="f_section">
          <div className="heading">About us</div>
          <div className="para_section">
            <p>Owner</p>
            <p>Shopping.com</p>
            <p>wholesale</p>
            <p>milansharma.github.io</p>
          </div>
        </div>

        <div className="f_section">
          <div className="heading">Policy</div>
          <div className="para_section">
            <p>Terms and Conditions</p>
            <p>Shopping.com</p>
            <p>All Rights Reserved. In India</p>
          </div>
        </div>
      </div>

      <div className="lower"></div>
    </div>

    </>
  );
}
