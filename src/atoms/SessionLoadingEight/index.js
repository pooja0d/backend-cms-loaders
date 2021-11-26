/* Session Loading Eight Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingEight.css"; // Session Loading Eight Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingEight
   **/
  const SessionLoadingEight = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_eight"
        >
          <rect rx="10" ry="10" className="session_loader_eight_elem_one" />
          <rect rx="0" ry="0" className="session_loader_eight_elem_two" />
          <rect rx="8" ry="8" className="session_loader_eight_elem_three" />
          <rect rx="10" ry="10" className="session_loader_eight_elem_four" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingEight;
  