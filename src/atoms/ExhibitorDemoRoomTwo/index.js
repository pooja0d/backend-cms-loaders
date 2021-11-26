/* Exhibitor Demo Room Two Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorDemoRoomTwo.css"; // Exhibitor Demo Room Two Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoomTwo
   **/
  const ExhibitorDemoRoomTwo = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exh_demo_room_two_loader_box"
        >
          <rect rx="8" ry="8" className="exh_demo_room_two_loader_elem_one" />
          <rect rx="8" ry="8" className="exh_demo_room_two_loader_elem_two" />
          <rect rx="8" ry="8" className="exh_demo_room_two_loader_elem_three" />
          <rect rx="8" ry="8" className="exh_demo_room_two_loader_elem_four" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorDemoRoomTwo;
  