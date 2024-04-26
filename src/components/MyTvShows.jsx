import { Component } from "react";
import { Container, ButtonGroup, Dropdown } from "react-bootstrap";

class MyTvShows extends Component {
  render() {
    return (
      <Container fluid className="d-flex justify-content-between align-items-center px-lg-5 py-lg-3">
        <div className="d-flex align-items-center text-light">
          <h1>TV Shows</h1>
          <div className="mx-4">
            <ButtonGroup>
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  className="border border-secondary btn-custom-class"
                  id="dropdown-genres"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#">Animation</Dropdown.Item>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Horror</Dropdown.Item>
                  <Dropdown.Item href="#">Comedy</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </div>
        <div className="d-flex text-light">
          <i className="bi bi-text-left px-2 icon-custom-class"></i>
          <i className="bi bi-grid-fill border border-secondary text-secondary px-2"></i>
        </div>
      </Container>
    );
  }
}

export default MyTvShows;
