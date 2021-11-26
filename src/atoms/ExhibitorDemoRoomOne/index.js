/* Exhibitor Demo Room One Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ExhibitorDemoRoomOne.css"; // Exhibitor Demo Room One Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoomOne
   **/
  const ExhibitorDemoRoomOne = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="exhibitor_demo_room_one_loader_box"
        >
          <rect rx="8" ry="8" className="exh_demo_room_one_loader_elem_one" />
          <rect rx="8" ry="8" className="exh_demo_room_one_loader_elem_two" />
          <rect rx="40" ry="40" className="exh_demo_room_one_loader_elem_three" />
        </ContentLoader>
      </>
    );
  };
  
  export default ExhibitorDemoRoomOne;
  