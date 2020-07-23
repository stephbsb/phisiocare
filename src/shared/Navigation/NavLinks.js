import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  if (props.type === "site") {
    return (
      <ul id={props.id} className={`${props.className}`}>
        <li>
          <a className="sidenav-close" href="#home">
            INÍCIO
          </a>
        </li>
        <li>
          <a className="sidenav-close" href="#especialidades">
            ESPECIALIDADES
          </a>
        </li>
        <li>
          <a className="sidenav-close" href="#espaco">
            ESPAÇO
          </a>
        </li>
        <li>
          <a className="sidenav-close " href="#profissional">
            PROFISSIONAL
          </a>
        </li>
        <li>
          <a className="sidenav-close" href="#contato">
            CONTATO
          </a>
        </li>
        {/* <li>
          <a className="sidenav-close" href="/blog">
            BLOG
          </a>
        </li> */}
      </ul>
    );
  } else {
    return (
      <ul id={props.id} className={`${props.className}`}>
        <li>
          <a className="sidenav-close" href="/">
            SITE
          </a>
        </li>
        <li>
          <Link className="sidenav-close" to="/blog">
            ARTIGOS
          </Link>
        </li>
        <li>
          <Link className="sidenav-close" to="/blog/videos">
            VIDEOS
          </Link>
        </li>
      </ul>
    );
  }
};

export default NavLinks;
