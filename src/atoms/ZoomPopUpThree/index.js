/* Zoom Pop Up Three Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpThree.css"; // Zoom Pop Up Three Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpThree
   **/
  const ZoomPopUpThree = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_three_loader_box"
        >
            <rect rx="4" ry="4" className="zoom_pop_up_three_elem_one" />
            <rect rx="4" ry="4" className="zoom_pop_up_three_elem_two" />
            <rect rx="4" ry="4" className="zoom_pop_up_three_elem_three" />
            <rect rx="4" ry="4" className="zoom_pop_up_three_elem_four" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpThree;
  