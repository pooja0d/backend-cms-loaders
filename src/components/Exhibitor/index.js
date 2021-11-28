// Exhibitor Component
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
import { Row, Col } from "react-bootstrap"; // react-bootstrap Library Import
import "./Exhibitor.css"; // Exhibitor Component CSS Import
import "../../assets/css/fonts.css"; // Fonts CSS Import
import ExhibitorCardLoader from "../../atoms/ExhibitorCardLoader"; // Exhibitor Card Loader Atom Import

/**
   * @author: Pooja Dhamanekar
   * @function: Exhibitor
**/
function Exhibitor(props) {
    return (
      <>
        <Row className="session_loading_row_prop session_loading_margin_one session_loading_margin_two">
            Exhibitor
        </Row>
        <Row className="session_loading_row_prop">
            <ExhibitorCardLoader />
        </Row>
      </>
    );
}
export default Exhibitor;
  