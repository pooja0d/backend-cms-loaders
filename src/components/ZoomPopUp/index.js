// Zoom Pop Up Component
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
import { Row, Col } from "react-bootstrap"; // react-bootstrap Library Import
import "./ZoomPopUp.css"; // Zoom Pop Up Component CSS Import
import "../../assets/css/fonts.css"; // Fonts CSS Import
import ZoomPopUpOne from "../../atoms/ZoomPopUpOne"; // Zoom Pop Up One Atom Import
import ZoomPopUpTwo from "../../atoms/ZoomPopUpTwo"; // Zoom Pop Up Two Atom Import
import ZoomPopUpThree from "../../atoms/ZoomPopUpThree"; // Zoom Pop Up Three Atom Import
import ZoomPopUpFour from "../../atoms/ZoomPopUpFour"; // Zoom Pop Up Four Atom Import
import ZoomPopUpFive from "../../atoms/ZoomPopUpFive"; // Zoom Pop Up Five Atom Import
import ZoomPopUpSix from "../../atoms/ZoomPopUpSix"; // Zoom Pop Up Six Atom Import
/**
   * @author: Pooja Dhamanekar
   * @function: ZoomPopUp
**/
function ZoomPopUp(props) {
    return (
      <>
        <Row className="session_loading_row_prop session_loading_margin_one session_loading_margin_two">
            Zoom Pop Up
        </Row>
        <Row className="session_loading_row_prop">
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4">
            <Row>
                <Col className="col-11 col-sm-11 col-xs-11 col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-margins-one">
                    <Row className="col-margins-three"> 
                        <ZoomPopUpOne />
                    </Row>
                </Col>
                <Col className="col-11 col-sm-11 col-xs-11 col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-margins-four">
                    <Row className="col-margins-three">
                        <ZoomPopUpTwo />
                    </Row>
                    <Row className="col-margins-three">
                        <ZoomPopUpThree />
                    </Row>
                </Col>
            </Row>
            <Row className="new-justify-prop-one">
                <ZoomPopUpFour />
            </Row>
          </Col>
          <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-margins-two">
            <Row>
                <ZoomPopUpFive />
            </Row>
            <Row>
                <ZoomPopUpSix />
            </Row>
          </Col>
        </Row>
      </>
    );
}
export default ZoomPopUp;
  