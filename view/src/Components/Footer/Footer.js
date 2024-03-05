import React from 'react'
import { Link } from 'react-router-dom';
// import logo from "../images/evangadi-logo-footer.png"
import logo from "../../images/evangadi-logo-footer.png"
import "./Footer.css"


function Footer() {
  return (
    <div className="footer ">
      <div className="container some row">
        <div className="footer_logo tp col-sm-12 col-md-4">
          <img src={logo} />
          <div className="row ic">
            <Link className="col" to="https://www.facebook.com/evangaditech">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link className="col" to="">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="col" to="https://www.instagram.com/evangaditech/">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 tp">
          <h5 className="title">Useful Link</h5>
          <ul className="st">
            <li>
              <Link to="https://www.evangadi.com/explained">How it Works</Link>
            </li>
            <li>
              <Link to="https://www.evangadi.com/legal/terms/">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="https://www.evangadi.com/legal/privacy/">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 tp ">
          <h5 className="title">Contact Info</h5>
          <ul className="net">
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer