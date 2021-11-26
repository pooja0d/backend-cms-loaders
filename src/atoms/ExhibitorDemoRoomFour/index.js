/* Exhibitor Demo Room Four Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorDemoRoomFour.css"; // Exhibitor Demo Room Four Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoomFour
   **/
  const ExhibitorDemoRoomFour = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exh_demo_room_four_loader_box"
        >
          <rect rx="4" ry="4" className="exh_demo_room_four_loader_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorDemoRoomFour;
  