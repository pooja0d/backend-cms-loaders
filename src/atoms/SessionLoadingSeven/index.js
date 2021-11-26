/* Session Loading Seven Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingSeven.css"; // Session Loading Seven Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingSeven
   **/
  const SessionLoadingSeven = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loading_seven_loader_box"
        >
            <rect  rx="10" ry="10" className="session_loading_seven_loader_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingSeven;
  