// Main Page
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; // react-router-dom Library Import
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS Import 
import LoaderOneView from "../components/LoaderOneView"; // Loader One View Component Import
/**
 * @author: Pooja Dhamanekar
 * @function: MainPage
 **/
function MainPage(props) {
  return (
    <>
      <LoaderOneView />
    </>
  );
}
export default MainPage;
