/* Zoom Pop Up Two Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpTwo.css"; // Zoom Pop Up Two Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpTwo
   **/
  const ZoomPopUpTwo = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_two_loader_box"
        >
            <rect rx="4" ry="4" className="zoom_pop_up_two_elem_one" />
            <rect rx="8" ry="8" className="zoom_pop_up_two_elem_two" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpTwo;
  