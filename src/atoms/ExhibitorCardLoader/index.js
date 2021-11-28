/* Exhibitor Card Loader Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorCardLoader.css"; // Exhibitor Card Loader Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorCardLoader
   **/
  const ExhibitorCardLoader = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exhibitor_loader_box"
        >
          <rect rx="45" ry="45" className="exhibitor_elem_one" />
          <rect rx="0" ry="0" className="exhibitor_elem_two" />
          <rect rx="0" ry="0" className="exhibitor_elem_three" />
          <rect rx="20" ry="20" className="exhibitor_elem_four" />
          <rect rx="20" ry="20" className="exhibitor_elem_five" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorCardLoader;
  