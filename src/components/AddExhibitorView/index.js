// Add Exhibitor Loading View Component
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col } from "react-bootstrap"; // react-bootstrap Library Import
  import "./AddExhibitorView.css"; // Add Exhibitor Loading View Component CSS Import
  import "../../assets/css/fonts.css"; // Fonts CSS Import
  import AddExhibitorLoadingOne from "../../atoms/AddExhibitorLoadingOne"; // Add Exhibitor Loading One Atom Import
  import SessionLoadingTwo from "../../atoms/SessionLoadingTwo"; // Add Exhibitor Loading Two Atom Import
  import AddExhibitorLoadingThree from "../../atoms/AddExhibitorLoadingThree"; // Add Exhibitor Loading Three Atom Import
  import AddExhibitorLoadingFour from "../../atoms/AddExhibitorLoadingFour"; // Add Exhibitor Loading Four Atom Import
  import AddExhibitorLoadingFive from "../../atoms/AddExhibitorLoadingFive"; // Add Exhibitor Loading Five Atom Import
  import AddExhibitorLoadingSix from "../../atoms/AddExhibitorLoadingSix"; // Add Exhibitor Loading Six Atom Import
  /**
   * @author: Pooja Dhamanekar
   * @function: AddExhibitorView
   **/
  function AddExhibitorView(props) {
    return (
      <>
        <Row className="session_loading_row_prop session_loading_margin_one session_loading_margin_two">
          Add Exhibitor 
        </Row>
        <Row className="session_loading_row_prop">
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4">
            <Row>
              <AddExhibitorLoadingOne />
            </Row>
            <Row className="new-justify-prop-one">
              <AddExhibitorLoadingThree />
            </Row>
            <Row>
              <Col className="col-11 col-sm-11 col-xs-11 col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-margins-one">
                <AddExhibitorLoadingFive />
              </Col>
              <Col className="col-11 col-sm-11 col-xs-11  col-lg-7 col-xl-7 col-xxl-7 col-md-7 col-margins-one">
                <AddExhibitorLoadingSix />
              </Col>
            </Row>
          </Col>
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-margins-two">
            <Row>
              <AddExhibitorLoadingFour />
            </Row>
            <Row>
              <SessionLoadingTwo />
            </Row>
          </Col>
        </Row>
      </>
    );
  }
  export default AddExhibitorView;
  