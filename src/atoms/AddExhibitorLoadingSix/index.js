/* Add Exhibitor Loading Six Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./AddExhibitorLoadingSix.css"; // Add Exhibitor Loading Six Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: AddExhibitorLoadingSix
   **/
  const AddExhibitorLoadingSix = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="add_exh_loader_box_six_one"
        >
          <rect rx="30" ry="30" className="add_exh_loader_six_elem_one" />
        </ContentLoader>
      </>
    );
  };
  
  export default AddExhibitorLoadingSix;
  