/* Card Loader One Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./CardLoaderOne.css"; // Card Loader One Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: CardLoaderOne
   **/
  const CardLoaderOne = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="card_loader_one_content_loader_box"
        >
          <rect x="20" y="24" rx="0" ry="0" width="16" height="16" />
          <rect x="48.9" y="3.18" rx="5" ry="5" width="85.3" height="56.53" />
          <rect rx="0" ry="0" className="elem_one" />
          <rect rx="0" ry="0" className="elem_two" />
          <rect rx="0" ry="0" className="elem_three" />
          <rect rx="10" ry="10" className="elem_four" />
          <rect rx="0" ry="0" className="elem_five" />
          <rect rx="0" ry="0" className="elem_six" />
          <rect rx="0" ry="0" className="elem_seven" />
          <rect rx="0" ry="0" className="elem_eight" />
        </ContentLoader>
      </>
    );
  };
  
  export default CardLoaderOne;
  