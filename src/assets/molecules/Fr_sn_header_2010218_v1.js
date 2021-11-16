//this is a Navbar import the same in any page for future developments

import React, { Component, useRef, useState } from "react";
import { Navbar, Nav, Image, Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";
import logo from "../images/logos/0d.png";
import Notifications from "../images/icons/Notifications.svg";
import Messages from "../images/icons/Messages.svg";
import Leaderboard from "../images/icons/leaderboard.svg";
import profile from "../images/icons/Sign_in.svg";
import { NavLink } from "react-router-dom";
import People from "../../components/Fr_sn_people_20210218_v1";
import { useDispatch, useSelector } from "react-redux";
import { get_specific_people_id_action } from "../../actions/VP_Specific_Details_Action_20210401_V01";
import ProfileDropDown from "./ProfileDropDown";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import Notification from "../../components/Notifications";
class Header extends Component {
	state = { notification: false, leaderBoard: false };
	render() {
		if (window.location.pathname === "/reset_password" || window.location.pathname === "/sign_in" || window.location.pathname === "/sign_up") {
			return null;
		}
		if (window.location.pathname === "/sign_in") {
			return null;
		}

		function SignIn() {
			const [show, setShow] = useState(false);
			const [target, setTarget] = useState(null);
			const handleMouseOver = (event) => {
				setShow(!show);
				setTarget(event.target);
			};

			// const handleMouseOut = () => {
			// 	setIsHovering(false);
			// };
			let dispatch = useDispatch();
			const ref = useRef(null);
			let currentUser = useSelector((state) => state.peopleDetails.currentUser);
			if (useSelector((state) => state.logInDetails) === true) {
				if (Object.keys(currentUser) !== 0) {
					let profile = currentUser.profilePic === "N/A" ? `https://ui-avatars.com/api/?name=${currentUser.firstName + ` ` + currentUser.lastName}` : currentUser.profilePic;
					return (
						<Nav.Link className="ml-4 header_text1" href="#">
							<Row className="justify-content-center header_img1" eventKey="2">
								<Image className="pro_icon rounded-circle" src={profile} />
							</Row>
							<NavLink
								className="sign_in_link"
								to={`/my-profile`}
								onMouseOver={handleMouseOver}
								/*onMouseOut={handleMouseOver}
								onClick={() => dispatch(get_specific_people_id_action(parseInt(localStorage.getItem("id"))))}*/ eventKey="2"
							>
								<Row className="nv_txt">{currentUser.firstName + ` ` + currentUser.lastName}</Row>
							</NavLink>
							{show && <ProfileDropDown ref={ref.current} show={show} target={target} handleMouseOver={handleMouseOver} />}
						</Nav.Link>
					);
				}
			} else {
				return (
					<Nav.Link className="ml-4 header_text1" href="#">
						<Row className="justify-content-center header_img1" eventKey="2">
							<Image className="pro_icon" src={profile} />
						</Row>
						<NavLink className="sign_in_link" to="/login" eventKey="2">
							<Row className="nv_txt">Sign-in</Row>
						</NavLink>
					</Nav.Link>
				);
			}
		}
		//else
		//{
		{
			return (
				<Navbar className="header" expand="lg" collapseOnSelect={true}>
					<Container>
						<Navbar.Brand>
							<NavLink to="/">
								<Image className="nv_img" src={logo} />
							</NavLink>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-4 mr-auto">
								<Nav.Link as={NavLink} className="ml-4 header_text" to="/homepage" eventKey="1">
									HOME
								</Nav.Link>

								<Nav.Link as={NavLink} className="ml-4 header_text" to="/activity" eventKey="2">
									ACTIVITY FEED
								</Nav.Link>

								<Nav.Link as={NavLink} className="ml-4 header_text" to="/people" eventKey="3">
									PEOPLE
								</Nav.Link>

								<Nav.Link as={NavLink} className="ml-4 header_text" to="/exhibitor" eventKey="4">
									EXHIBITORS
								</Nav.Link>

								<Nav.Link as={NavLink} className="ml-4 header_text" to="/sessions" eventKey="5">
									SESSIONS
								</Nav.Link>

								<Nav.Link as={NavLink} className="ml-4 header_text" to="/meeting" eventKey="6">
									MEETING
								</Nav.Link>
							</Nav>
							<Nav className="justify-content-end p-1">
								<Nav.Link className="ml-4  mt-2 header_text1" href="#" eventKey="2">
									<Row className="justify-content-center header_img1" onClick={() => this.setState({ notification: !this.state.notification })}>
										<Image className="header_img" src={Notifications} />
									</Row>
									<Row className="nv_txt">Notifications</Row>
								</Nav.Link>
								{this.state.notification ? <Notification Close={() => this.setState({ notification: !this.state.notification })} /> : null}

								<Nav.Link className="ml-4 mt-2 header_text1" href="#" eventKey="2">
									<Row className="justify-content-center header_img1">
										<Image className="header_img" src={Messages} />
									</Row>
									<Row className="nv_txt">Messages</Row>
								</Nav.Link>

								<Nav.Link className="ml-4 mt-2 header_text1" href="#" eventKey="2">
									<Row className="justify-content-center header_img1" onClick={() => this.setState({ leaderBoard: !this.state.leaderBoard })}>
										<Image className="header_img" src={Leaderboard} />
									</Row>
									<Row className="nv_txt">Leaderboard</Row>
								</Nav.Link>
								{this.state.leaderBoard ? <LeaderBoard Close={() => this.setState({ leaderBoard: !this.state.leaderBoard })} /> : null}
								{/* <Nav.Link className="ml-4 mt-2 header_text1" href="#" eventKey="2">
									<ProfileDropDown />
								</Nav.Link> */}
								<SignIn />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			);
			//}
		}
	}
}
export default Header;
