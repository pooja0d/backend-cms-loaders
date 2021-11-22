/* Session Loading Two Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./SessionLoadingTwo.css"; // Session Loading Two Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: SessionLoadingTwo
   **/
  const SessionLoadingTwo = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="session_loader_box_two"
        >
          <rect rx="0" ry="0" className="session_loader_elem_two_one" />
          <rect rx="8" ry="8" className="session_loader_elem_two_two" />
          <rect rx="0" ry="0" className="session_loader_elem_two_three" />
          <rect rx="8" ry="8" className="session_loader_elem_two_four" />
          <rect rx="0" ry="0" className="session_loader_elem_two_five" />
          <rect rx="8" ry="8" className="session_loader_elem_two_six" />
          <rect rx="0" ry="0" className="session_loader_elem_two_seven" />
          <rect rx="8" ry="8" className="session_loader_elem_two_eight" />
          <rect rx="0" ry="0" className="session_loader_elem_two_nine" />
          <rect rx="8" ry="8" className="session_loader_elem_two_ten" />
        </ContentLoader>
      </>
    );
  };
  
  export default SessionLoadingTwo;
  