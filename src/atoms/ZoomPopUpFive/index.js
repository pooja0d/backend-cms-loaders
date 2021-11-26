/* Zoom Pop Up Five Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpFive.css"; // Zoom Pop Up Five Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpFive
   **/
  const ZoomPopUpFive = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_five_loader_box"
        >
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_one" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_two" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_three" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_four" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_five" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_six" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_seven" />
            <rect rx="4" ry="4" className="zoom_pop_up_five_elem_eight" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpFive;
  