/* Session Loading Four Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingFour.css"; // Session Loading Four Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingFour
   **/
  const SessionLoadingFour = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_four"
        >
          <rect rx="10" ry="10" className="session_loader_four_elem_one" />
          <rect rx="8" ry="8" className="session_loader_four_elem_two" />
          <rect rx="8" ry="8" className="session_loader_four_elem_three" />
          <rect rx="8" ry="8" className="session_loader_four_elem_four" />
          <rect rx="0" ry="0" className="session_loader_four_elem_five" />
          <rect rx="10" ry="10" className="session_loader_four_elem_six" />
          <rect rx="8" ry="8" className="session_loader_four_elem_seven" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingFour;
  