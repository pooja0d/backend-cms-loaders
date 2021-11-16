// Loader One View Component
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import "./LoaderOneView.css"; // Loader One View CSS Import
  import "../../assets/css/fonts.css"; // Fonts CSS Import
  import CardLoaderOne from "../../atoms/CardLoaderOne"; // Card Loader One Atom Import
  import CardLoaderTwo from "../../atoms/CardLoaderTwo"; // Card Loader Two Atom Import
  import CardLoaderThree from "../../atoms/CardLoaderThree"; // Card Loader Three Atom Import
  import CardLoaderFour from "../../atoms/CardLoaderFour"; // Card Loader Four Atom Import
  import ButtonLoaderOne from "../../atoms/ButtonLoaderOne"; // Button Loader One Atom Import
  /**
   * @author: Pooja Dhamanekar
   * @function: LoaderOneView
   **/
  function LoaderOneView(props) {
    return (
      <>
        <div className="row">
          <p className="row-prop new-people-margin-one new-people-margin-two">
            Card Loader One View
          </p>
        </div>
        <div className="row">
          <div className="col-11 col-sm-11 col-xs-11 col-lg-12 col-xl-12 col-xxl-12 col-md-12 row-prop">
            <CardLoaderOne size="lg" />
          </div>
        </div>
        <div className="row">
          <p className="row-prop new-people-margin-one new-people-margin-two">
            Exhibitor Team
          </p>
        </div>
        <div className="row">
          <div className="col-11 col-sm-11 col-xs-11 col-lg-12 col-xl-12 col-xxl-12 col-md-12 row-prop">
            <CardLoaderTwo size="lg" />
          </div>
        </div>
        <div className="row">
          <p className="row-prop new-people-margin-one new-people-margin-two">
            Exhibitor Media
          </p>
        </div>
        <div className="row">
          <div className="col-11 col-sm-11 col-xs-11 col-lg-12 col-xl-12 col-xxl-12 col-md-12 row-prop">
            <CardLoaderThree size="lg" />
          </div>
        </div>
        <div className="row">
          <div className="col-11 col-sm-11 col-xs-11 col-lg-12 col-xl-12 col-xxl-12 col-md-12 row-prop">
            <CardLoaderFour size="lg" />
          </div>
        </div>
        <div className="row">
          <p className="row-prop new-people-margin-one new-people-margin-two">
            Button Loader
          </p>
        </div>
        <div className="row">
          <div className="col-11 col-sm-11 col-xs-11 col-lg-12 col-xl-12 col-xxl-12 col-md-12 row-prop">
            <ButtonLoaderOne size="lg" />
          </div>
        </div>
      </>
    );
  }
  export default LoaderOneView;
  