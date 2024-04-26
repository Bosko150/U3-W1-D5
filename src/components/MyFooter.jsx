import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <Container className="mx-auto px-3 width-custom-class pt-5 text-secondary text-start">
        <div className="d-flex fs-4 pb-2">
          <i className="bi bi-facebook pe-3"></i>
          <i className="bi bi-instagram pe-3"></i>
          <i className="bi bi-twitter-x pe-3"></i>
          <i className="bi bi-youtube pe-3"></i>
        </div>
        <Row className="gy-2 pb-4">
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Audio and Subtitles
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Audio Description
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Help Center
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Gift Cards
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Media Center
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Investor Relations
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Jobs
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Terms of Use
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Privacy
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Legal Notices
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Cookie Preferences
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Corporate Information
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <a href="#test" className="text-decoration-none text-secondary footer-font">
              Contact Us
            </a>
          </Col>
        </Row>
        <span className="border border-secondary p-1 footer-font">Service Code</span>
        <p className="pt-3 custom-p">© 1997-2019 Netflix, Inc. {`{i-4893479adsdf32de}`}</p>
      </Container>
    );
  }
}

export default MyFooter;
