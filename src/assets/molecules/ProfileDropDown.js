import { useRef, useState } from "react";
import { Image, Row, Container, Col, Button, Overlay, Popover } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profile from "../images/icons/Sign_in.svg";

import NoteIcon from "../../assets/images/icons/Icon (30).svg";
import "./styles/header.css";
import "./styles/profileDropDown.css";
const dropDownObject = [
	{
		title: "PROFILE",
		path: "/my-profile",
		icon: NoteIcon,
	},
	{
		title: "FAVOURITES",
		path: "/my-profile#favourites",
		icon: NoteIcon,
	},
	{
		title: "MEETINGS",
		path: "/my-profile#meetings",
		icon: NoteIcon,
	},
	{
		title: "NOTES",
		path: "/my-profile#notes",
		icon: NoteIcon,
	},
	{
		title: "CALENDAR",
		path: "/my-profile#calendar",
		icon: NoteIcon,
	},
	{
		title: "LOGOUT",
		path: "/logout",
		icon: NoteIcon,
	},
];

function ProfileDropDown(props) {
	// const [show, setShow] = useState(false);
	// const [target, setTarget] = useState(null);
	// const ref = useRef(null);
	const { ref, show, target, handleMouseOver } = props;

	// const handleClick = (event) => {
	// 	setShow(!show);
	// 	setTarget(event.target);
	// };

	return (
		<Overlay show={show} target={target} placement="bottom" container={ref} containerPadding={20}>
			<Popover id="popover-contained">
				<Popover.Content>
					<Col className="profile_dropdown" id="profile_dropdown" name="profile_dropdown">
						{dropDownObject.map((item) => (
							<Row className="mt-1 pt-0 profile-dropdown-link">
								<NavLink to={item.path} eventKey={item.name} onClick={handleMouseOver}>
									<Image src={item.icon} className="note_image_css"></Image>
									<p className="profile_dp_text pt-0">{item.title}</p>
								</NavLink>
							</Row>
						))}
					</Col>
				</Popover.Content>
			</Popover>
		</Overlay>
	);
}
export default ProfileDropDown;
