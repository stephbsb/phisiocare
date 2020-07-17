import React from "react";
import { useRouteMatch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Slider from "./Slider";
import CardsSection from "./CardsSection";
import EspacoSection from "./EspacoSection";
import ProfissionalSection from "./ProfissionalSection";
import ContatoSection from "./ContatoSection";
import MainNavigation from "../shared/Navigation/MainNavigation";
import Footer from "../shared/Navigation/Footer";

import "./MainPage.css";

const MainPage = (props) => {
  const { url } = useRouteMatch();

  return (
    <React.Fragment>
      <MainNavigation type={props.type} url={url} />
      <main>
        <Slider />
        <CardsSection />
        <EspacoSection />
        <ProfissionalSection />
        <ContatoSection />
        <div className="show-on-small">
          <div className="fixed-action-btn">
            <a
              className="btn-floating btn-large green pulse"
              href="https://wa.me/5561999218585"
              target="_blank"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
