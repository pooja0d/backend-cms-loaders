import React, { Component } from "react";
import Header from "./Fr_sn_header_2010218_v1";
import Footer from "./Fr_sn_footer_20210218_v1";
import { Container, Jumbotron } from "react-bootstrap";

/**
 * @author Shashidhara
 * @class Layout
 **/

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToken: localStorage.getItem("token"),
		};
	}
	render() {
		const { isToken } = this.state;
		const { fullScreen } = this.props;
		console.log(fullScreen);
		return (
			<>
				{fullScreen ? (
					<div className="ml-0 pl-0 mr-0 pr-0">
						<Container className="no_pd pt-0 mt-0 mb-0 pb-0 ml-0 pl-0 mr-0 pr-0" fluid style={{ objectFit: "fill" }}>
							{this.props.children}
						</Container>
					</div>
				) : (
					<div>
						<Header />
						<Jumbotron
							style={{
								paddingTop: "0px",
								margiTop: "0px" /* , verticalAlign:'-webkit-baseline-middle' */,
							}}
						>
							<Container className="pt-0 mt-0 mb-0 pb-0">{this.props.children}</Container>
						</Jumbotron>
						<Footer />
					</div>
				)}
			</>
		);
	}
}

export default Layout;
