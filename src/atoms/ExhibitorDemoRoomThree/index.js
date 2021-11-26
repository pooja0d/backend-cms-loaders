/* Exhibitor Demo Room Three Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorDemoRoomThree.css"; // Exhibitor Demo Room Three Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoomThree
   **/
  const ExhibitorDemoRoomThree = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exh_demo_room_three_loader_box"
        >
          <rect rx="4" ry="4" className="exh_demo_room_three_loader_elem_one" />
          <rect rx="4" ry="4" className="exh_demo_room_three_loader_elem_two" />
          <rect rx="4" ry="4" className="exh_demo_room_three_loader_elem_three" />
          <rect rx="4" ry="4" className="exh_demo_room_three_loader_elem_four" />
          <rect rx="4" ry="4" className="exh_demo_room_three_loader_elem_five" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorDemoRoomThree;
  