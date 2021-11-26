/* Add Exhibitor Loading Four Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./AddExhibitorLoadingFour.css"; // Add Exhibitor Loading Four Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: AddExhibitorLoadingFour
   **/
  const AddExhibitorLoadingFour = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="add_exh_loader_box_four"
        >
            <rect  rx="10" ry="10" className="add_exh_loader_four_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default AddExhibitorLoadingFour;
  