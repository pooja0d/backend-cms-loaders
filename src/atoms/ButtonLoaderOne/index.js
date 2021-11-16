/* Button Loader One Atom Component */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./ButtonLoaderOne.css"; // Button Loader One Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: ButtonLoaderOne
   **/
  const ButtonLoaderOne = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="button_loader_one_content_loader_box"
        >
        <rect rx="0" ry="0" className="button_loader_one_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default ButtonLoaderOne;
  