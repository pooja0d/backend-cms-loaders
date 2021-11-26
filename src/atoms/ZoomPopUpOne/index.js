/* Zoom Pop Up One Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ZoomPopUpOne.css"; // Zoom Pop Up One Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUpOne
   **/
  const ZoomPopUpOne = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="zoom_pop_up_one_loader_box"
        >
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_one" />
            <rect rx="8" ry="8" className="zoom_pop_up_one_elem_two" />
        </ContentLoader>
      </>
    );
  };
  
  export default ZoomPopUpOne;
  