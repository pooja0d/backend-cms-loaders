/* Card Loader Two Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./CardLoaderTwo.css"; // Card Loader Two Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: CardLoaderTwo
   **/
  const CardLoaderTwo = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="card_loader_two_content_loader_box"
        >
          <rect rx="45" ry="45" className="exh_team_elem_one" />
          <rect rx="0" ry="0" className="exh_team_elem_two" />
          <rect rx="0" ry="0" className="exh_team_elem_three" />
          <rect rx="0" ry="0" className="exh_team_elem_four" />
          <rect rx="0" ry="0" className="exh_team_elem_five" />
        </ContentLoader>
      </>
    );
  };
  
  export default CardLoaderTwo;
  