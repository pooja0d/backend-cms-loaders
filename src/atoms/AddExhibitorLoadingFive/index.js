/* Add Exhibitor Loading Five Atom */
import React, {
    Component,
    useState,
    TabList,
    TabPanel,
    useEffect,
  } from "react"; // react Library Import
  import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
  import ContentLoader from "react-content-loader"; // react-content-loader Library Import
  import "./AddExhibitorLoadingFive.css"; // Add Exhibitor Loading Five Atom CSS Import
  /**
   * @author: Pooja Dhamanekar
   * @function: AddExhibitorLoadingFive
   **/
  const AddExhibitorLoadingFive = (props) => {
    return (
      <>
        <ContentLoader
          speed={3}
          count={4}
          size="lg"
          type="card"
          className="add_exh_loader_box_five_one"
        >
          <rect rx="4" ry="4" className="add_exh_loader_five_elem_one" />
          <rect rx="0" ry="0" className="add_exh_loader_five_elem_two" />
          <rect rx="4" ry="4" className="add_exh_loader_five_elem_three" />
          <rect rx="0" ry="0" className="add_exh_loader_five_elem_four" />
          <rect rx="4" ry="4" className="add_exh_loader_five_elem_five" />
          <rect rx="0" ry="0" className="add_exh_loader_five_elem_six" />
          <rect rx="4" ry="4" className="add_exh_loader_five_elem_seven" />
          <rect rx="0" ry="0" className="add_exh_loader_five_elem_eight" />
        </ContentLoader>
      </>
    );
  };
  
  export default AddExhibitorLoadingFive;
  