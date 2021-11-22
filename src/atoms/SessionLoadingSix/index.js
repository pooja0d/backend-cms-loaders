/* Session Loading Six Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingSix.css"; // Session Loading Six Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingSix
   **/
  const SessionLoadingSix = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_six"
        >
          <rect rx="20" ry="20" className="session_loader_six_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingSix;
  