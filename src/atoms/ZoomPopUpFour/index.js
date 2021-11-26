/* Zoom Pop Up Four Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpFour.css"; // Zoom Pop Up Four Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpFour
   **/
  const ZoomPopUpFour = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_four_loader_box"
        >
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_one" />
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_two" />
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_three" />
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_four" />
            <rect rx="4" ry="4" className="zoom_pop_up_one_elem_five" />
            <rect rx="4" ry="4" className="zoom_pop_up_one_elem_six" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpFour;
  