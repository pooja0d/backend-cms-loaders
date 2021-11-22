/* Session Loading Three Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingThree.css"; // Session Loading Three Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingThree
   **/
  const SessionLoadingThree = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_three"
        >
          <rect rx="8" ry="8" className="session_loader_three_elem_one" />
          <rect rx="8" ry="8" className="session_loader_three_elem_two" />
          <rect rx="8" ry="8" className="session_loader_three_elem_three" />
          <rect rx="8" ry="8" className="session_loader_three_elem_four" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingThree;
  