/* Card Loader Four Atom Component */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./CardLoaderFour.css"; // Card Loader Four Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: CardLoaderFour
   **/
  const CardLoaderFour = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="card_loader_four_content_loader_box"
        >
            <rect rx="0" ry="0" className="exh_media_new_elem_one" />
            <rect rx="0" ry="0" className="exh_media_new_elem_two" />
            <rect rx="0" ry="0" className="exh_media_new_elem_three" />
        </ContentLoader>
      </>
    );
  };
  
  export default CardLoaderFour;
  