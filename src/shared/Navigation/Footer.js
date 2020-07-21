import React from "react";

import logo from "../../img/Logotipo_Phisiocare.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-3">
      <div className="container grey-text darken-2">
        <div className="row">
          <div className="col m12 l6">
            <h4>Entre em contato</h4>
            <div className="valign-wrapper">
              <div className="icon-div">
                <i className="fa fa-whatsapp "></i>
              </div>
              <div className="text-div">(61) 99921-8585</div>
            </div>
            <div className="valign-wrapper">
              <div className="icon-div">
                <i className="fa fa-envelope "></i>
              </div>
              <div className="text-div">phisioc@gmail.com</div>
            </div>
            <div className="adress-wrapper">
              <div className="icon-div">
                <i className="fa fa-map-marker "></i>
              </div>
              <div className="text-div">
                <div>Av Pau Brasil, LT 10, Ed LeQuartier, sala 1801 </div>
                <div>71926-000 Águas Claras - Distrito Federal</div>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l3">
            <h4>Siga-nos</h4>
            <a
              href="https://instagram.com/phisioc"
              target="_blank"
              className="instagram-icon"
            >
              <i className="fa fa-instagram grey-text darken-2 medium"></i>
            </a>
            <a href="https://www.facebook.com/phisioc" target="_blank">
              <i className="fa fa-facebook grey-text darken-2 medium"></i>
            </a>
          </div>
          <div className="col s12 m8 l3 center">
            <img src={logo} className="footer-logo " />
          </div>
        </div>
      </div>
      <div className="footer-copyright footer-copyright-small">
        <div className="container grey-text center">
          Copyright © 2020 |{" "}
          <a
            className="grey-text"
            href="https://stephanydev.herokuapp.com"
            target="_blank"
          >
            Desenvolvido por Stephany
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
