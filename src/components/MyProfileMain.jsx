import React, { Component } from "react";
import { Col, Row, Dropdown, Button, Container } from "react-bootstrap";
import propic from "../assets/kids_icon.png";

class MyProfileMain extends Component {
  state = {
    autoplayNextEpisode: false,
    autoplayPreviews: false,
  };

  toggleButton = (button) => {
    button.classList.toggle("btn-clicked");
  };

  handleAutoplayNextEpisode = () => {
    this.setState({ autoplayNextEpisode: !this.state.autoplayNextEpisode });
  };

  handleAutoplayPreviews = () => {
    this.setState({ autoplayPreviews: !this.state.autoplayPreviews });
  };

  render() {
    const { autoplayNextEpisode, autoplayPreviews } = this.state;
    return (
      <main>
        <Container fluid className="px-3 width-custom-class2 pt-5 text-light">
          <h1 className="display-3">Edit Profile</h1>
          <div className="d-md-flex border-top border-bottom border-secondary py-3">
            <Col md={3} className="position-relative me-3" id="custom-height">
              <img src={propic} width="120px" alt="" />
              <i className="bi bi-pencil-square position-absolute bottom-0 start-0"></i>
            </Col>
            <Col md={9}>
              <Row>
                <Col md={12} className="pb-3 mt-0 gy-3 ps-0">
                  <h4 className="bg-secondary p-2 mt-3 mt-md-0">Strive Student</h4>
                </Col>
                <Col md={12} className="pb-3 mt-0 gy-3 ps-0">
                  <p className="mb-2 fs-5">Language:</p>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" className="btn-custom-class border-secondary">
                      Select Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#">Italian</Dropdown.Item>
                      <Dropdown.Item href="#">English</Dropdown.Item>
                      <Dropdown.Item href="#">Spanish</Dropdown.Item>
                      <Dropdown.Item href="#">French</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col md={12} className="py-3 mt-0 gy-3 ps-0 border-top border-secondary">
                  <p className="mb-2 fs-5">Maturity Settings:</p>
                  <Button variant="outline-secondary" className="dark-gray text-light border-0 p-1 rounded-0">
                    ALL MATURITY RATINGS
                  </Button>
                </Col>
                <Col md={12} className="pb-3 mt-0 gy-3 ps-0">
                  <p className="m-0">Show titles of all maturity ratings for this profile.</p>
                </Col>
                <Col md={12} className="pb-3 mt-0 gy-3 ps-0">
                  <Button variant="outline-secondary" className="rounded-0 px-4">
                    EDIT
                  </Button>
                </Col>
                <Col md={12} className="pb-3 mt-0 gy-3 ps-0">
                  <p className="mb-2 fs-5">Autoplay controls</p>
                  <div className="form-check">
                    <input
                      className="form-check-input bg-transparent border-secondary p-2 rounded-0 shadow-none"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                      checked={autoplayNextEpisode}
                      onChange={this.handleAutoplayNextEpisode}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input form-check-input bg-transparent border-secondary p-2 rounded-0 shadow-none"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                      checked={autoplayPreviews}
                      onChange={this.handleAutoplayPreviews}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
          <div className="pt-3 d-flex flex-wrap">
            <Button
              className="rounded-0 btn-outline-secondary px-4 fs-5 me-3 mb-3 bg-transparent"
              onClick={(e) => this.toggleButton(e.target)}
            >
              SAVE
            </Button>
            <Button
              className="rounded-0 btn-outline-secondary px-4 fs-5 me-3 mb-3 bg-transparent"
              onClick={(e) => this.toggleButton(e.target)}
            >
              CANCEL
            </Button>
            <Button
              className="rounded-0 btn-outline-secondary  px-4 fs-5 me-3 mb-3 bg-transparent"
              onClick={(e) => this.toggleButton(e.target)}
            >
              DELETE PROFILE
            </Button>
          </div>
        </Container>
      </main>
    );
  }
}

export default MyProfileMain;
