/* Zoom Pop Up Six Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpSix.css"; // Zoom Pop Up Six Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpSix
   **/
  const ZoomPopUpSix = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_six_loader_box"
        >
            <rect rx="0" ry="0" className="zoom_pop_up_six_elem_one" />
            <rect rx="8" ry="8" className="zoom_pop_up_six_elem_two" />
            <rect rx="8" ry="8" className="zoom_pop_up_six_elem_three" />
            <rect rx="0" ry="0" className="zoom_pop_up_six_elem_four" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpSix;
  