// Main Page
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; // react-router-dom Library Import
import React, {
  Component,
  useState,
  TabList,
  TabPanel,
  useEffect,
} from "react"; // react Library Import
import { Row, Col, Image, Button, Overlay } from "react-bootstrap"; // react-bootstrap Library Import
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS Import 
import LoaderOneView from "../components/LoaderOneView"; // Loader One View Component Import
import SessionLoadingView from "../components/SessionLoadingView"; // Session Loading View Component Import
import AddExhibitorView from "../components/AddExhibitorView"; // Add Exhibitor View Component Import
import ExhibitorDemoRoom from "../components/ExhibitorDemoRoom"; // Exhibitor Demo Room Component Import
import ZoomPopUp from "../components/ZoomPopUp"; // Zoom Pop Up Component Import
import People from "../components/People"; // People Component Import
import Exhibitor from "../components/Exhibitor"; // Exhibitor Component Import
import Session from "../components/Session"; // Session Component Import
/**
 * @author: Pooja Dhamanekar
 * @function: MainPage
 **/
function MainPage(props) {
  return (
    <>
      <LoaderOneView />
      <SessionLoadingView />
      <AddExhibitorView />
      <ExhibitorDemoRoom />
      <ZoomPopUp />
      {/* Mobile Screen Loaders  */}
      <People />
      <Exhibitor />
      <Session />
    </>
  );
}
export default MainPage;
