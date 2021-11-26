// Session Loading View Component
import React, {
  Component,
  useState,
  TabList,
  TabPanel,
  useEffect,
} from "react"; // react Library Import
import { Row, Col } from "react-bootstrap"; // react-bootstrap Library Import
import "./SessionLoadingView.css"; // Session Loading View Component CSS Import
import "../../assets/css/fonts.css"; // Fonts CSS Import
import SessionLoadingOne from "../../atoms/SessionLoadingOne"; // Session Loading One Atom Import
import SessionLoadingTwo from "../../atoms/SessionLoadingTwo"; // Session Loading Two Atom Import
import SessionLoadingThree from "../../atoms/SessionLoadingThree"; // Session Loading Three Atom Import
import SessionLoadingFive from "../../atoms/SessionLoadingFive"; // Session Loading Five Atom Import
import SessionLoadingSix from "../../atoms/SessionLoadingSix"; // Session Loading Six Atom Import
import SessionLoadingSeven from "../../atoms/SessionLoadingSeven"; // Session Loading Seven Atom Import
import SessionLoadingEight from "../../atoms/SessionLoadingEight"; // Session Loading Eight Atom Import
/* import SessionLoadingFour from "../../atoms/SessionLoadingFour"; // Session Loading Four Atom Import */
/**
 * @author: Pooja Dhamanekar
 * @function: SessionLoadingView
 **/
function SessionLoadingView(props) {
  return (
    <>
      <Row className="session_loading_row_prop session_loading_margin_one session_loading_margin_two">
       Add Session
      </Row>
      <Row className="session_loading_row_prop col-margins-one">
        <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4 ml-0 pl-0 mr-0 pr-0">
          <Row className=""> 
            <SessionLoadingOne />
          </Row>
          <Row>
            <SessionLoadingThree />
          </Row>
          <Row>
            <Col className="col-11 col-sm-11 col-xs-11 col-lg-7 col-xl-7 col-xxl-7 col-md-7 col-margins-one">
              <SessionLoadingFive /> 
            </Col>
            <Col className="col-11 col-sm-11 col-xs-11 col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-margins-one">
              <SessionLoadingSix />
            </Col>
          </Row>
          <Row>
            <SessionLoadingEight />
          </Row>
        </Col>
        <Col className="col-11 col-sm-11 col-xs-11 col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-margins-two">
          <Row>
            <SessionLoadingSeven /> 
          </Row>
          <Row>
            <SessionLoadingTwo />
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default SessionLoadingView;
