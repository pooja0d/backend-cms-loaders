/* Session Loading Five Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingFive.css"; // Session Loading Five Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingFive
   **/
  const SessionLoadingFive = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_five"
        >
          <rect rx="4" ry="4" className="session_loader_five_elem_one" />
          <rect rx="4" ry="4" className="session_loader_five_elem_two" />
          <rect rx="4" ry="4" className="session_loader_five_elem_three" />
          <rect rx="4" ry="4" className="session_loader_five_elem_four" />
          <rect rx="4" ry="4" className="session_loader_five_elem_five" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingFive;
  