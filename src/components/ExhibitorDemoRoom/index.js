// Exhibitor Demo Room Component
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col } from "react-bootstrap"; // react-bootstrap Library Import
  import "./ExhibitorDemoRoom.css"; // Exhibitor Demo Room Component CSS Import
  import "../../assets/css/fonts.css"; // Fonts CSS Import
  import ExhibitorDemoRoomOne from "../../atoms/ExhibitorDemoRoomOne"; // Exhibitor Demo Room One Atom Import
  import ExhibitorDemoRoomTwo from "../../atoms/ExhibitorDemoRoomTwo"; // Exhibitor Demo Room Two Atom Import
  import ExhibitorDemoRoomThree from "../../atoms/ExhibitorDemoRoomThree"; // Exhibitor Demo Room Three Atom Import
  import ExhibitorDemoRoomFour from "../../atoms/ExhibitorDemoRoomFour"; // Exhibitor Demo Room Four Atom Import
  import ExhibitorDemoRoomFive from "../../atoms/ExhibitorDemoRoomFive"; // Exhibitor Demo Room Five Atom Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ExhibitorDemoRoom
   **/
  function ExhibitorDemoRoom(props) {
    return (
      <>
        <Row className="session_loading_row_prop session_loading_margin_one session_loading_margin_two">
          Exhibitor Demo Room
        </Row>
        <Row className="session_loading_row_prop">
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4">
            <Row>
              <ExhibitorDemoRoomOne />
            </Row>
            <Row className="new-justify-prop-one">
              <ExhibitorDemoRoomTwo />
            </Row>
            <Row className="new-justify-prop-one">
                <ExhibitorDemoRoomThree />
            </Row>
          </Col>
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-margins-two">
            <Row>
              <ExhibitorDemoRoomFour />
            </Row>
            <Row>
              <ExhibitorDemoRoomFive />
            </Row>
          </Col>
        </Row>
      </>
    );
  }
  export default ExhibitorDemoRoom;
  