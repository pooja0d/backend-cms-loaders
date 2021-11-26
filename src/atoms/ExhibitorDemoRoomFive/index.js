/* Exhibitor Demo Room Five Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorDemoRoomFive.css"; // Exhibitor Demo Room Five Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoomFive
   **/
  const ExhibitorDemoRoomFive = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exh_demo_room_five_loader_box"
        >
          <rect rx="3" ry="3" className="exh_demo_room_five_loader_elem_one" />
          <rect rx="3" ry="3" className="exh_demo_room_five_loader_elem_two" />
          <rect rx="3" ry="3" className="exh_demo_room_five_loader_elem_three" />
          <rect rx="3" ry="3" className="exh_demo_room_five_loader_elem_four" />
          <rect rx="40" ry="40" className="exh_demo_room_five_loader_elem_five" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorDemoRoomFive;
  