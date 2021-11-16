//footer element
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,

  //Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mail from "../images/icons/mail.svg";
import linkedin from "../images/icons/linkedin.svg";
import fb from "../images/icons/facebook.svg";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col className="footer_val mt-2 pt-2" /* footer_val */>
              <a>© 2021 - Zero Distance Platform. | Privacy Policy | Terms & Conditions | Contact Us</a>
            </Col>
            <Col lg="auto" className="footer_val1 mt-2 pt-2" /*footer_val1  mt-2 pt-2*/>
              <a className="ft_txt">Mail to admin@zerodistance.io</a>
              <Image className="ft_img" src={mail} />
              <Image className="ft_img" src={linkedin} />
              <Image className="ft_img" src={fb} />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
export default Footer;
