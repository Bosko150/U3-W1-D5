import { Container, Row, Col, Button } from "react-bootstrap";
import avatar from "../assets/avatar.png";
function MySettingsMain() {
  return (
    <div>
      <Container fluid className="mx-auto px-3 width-custom-class pt-5">
        <h1 className="display-5">Account</h1>
        <Row className="border-top border-secondary">
          <Col xs={12} sm={3}>
            <div className="d-flex d-sm-block justify-content-between">
              <p className="fs-6 text-secondary">MEMBERSHIP & BILLING</p>
              <Button variant="light" className="rounded-0 active">
                Cancel Membership
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={9}>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <span className="fw-bold">student@strive.school</span>
              </div>
              <a href="#test" className="text-decoration-none">
                Change account email
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <span className="text-secondary">Password: ********</span>
              </div>
              <a href="#test" className="text-decoration-none">
                Change password
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between border-bottom border-secondary">
              <div>
                <span className="text-secondary">Phone: 321 044 1279</span>
              </div>
              <a href="#test" className="text-decoration-none">
                Change phone number
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <span className="fw-bold">
                  <i class="bi bi-paypal"></i> PayPal admin@strive.school
                </span>
              </div>
              <a href="#test" className="text-decoration-none">
                Update payment info
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between border-bottom border-secondary">
              <div>
                <span></span>
              </div>
              <a href="#test" className="text-decoration-none">
                Billing details
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <span></span>
              </div>
              <a href="#test" className="text-decoration-none">
                Redeem gift card or promo code
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <div>
                <span></span>
              </div>
              <a href="#test" className="text-decoration-none">
                Where to buy gift cards
              </a>
            </div>
          </Col>
        </Row>
        <Row className="border-top border-secondary">
          <Col xs={12} sm={3}>
            <p className="fs-6 text-secondary">PLAN DETAILS</p>
          </Col>
          <Col xs={12} sm={9}>
            <div className="col-12 d-flex justify-content-between">
              <div className="align-content-center">
                <span className="fw-bold">Premium </span> <i class="bi bi-badge-hd"></i>
              </div>
              <a href="#test" className="text-decoration-none">
                Change plan
              </a>
            </div>
          </Col>
        </Row>
        <Row className="border-top border-secondary">
          <Col xs={12} sm={3}>
            <p className="fs-6 text-secondary">SETTINGS</p>
          </Col>
          <Col xs={12} sm={9}>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Parental controls
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Test participation
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Manage download devices
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Activate a device
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Recent device streaming activity
              </a>
            </div>
            <div className="col-12 d-flex justify-content-between">
              <a href="#test" className="text-decoration-none">
                Sign out of all devices
              </a>
            </div>
          </Col>
        </Row>
        <Row className="border-top border-secondary">
          <Col xs={12} sm={3}>
            <p className="fs-6 text-secondary">MY PROFILE</p>
          </Col>
          <Col xs={12} sm={9}>
            <div className="col-12 d-flex justify-content-between">
              <div className="align-content-center">
                <img src={avatar} alt="" width="30px" className="me-2" />
                <span className="fw-bold">Strive Student</span>
              </div>
              <div>
                <div className="text-end">
                  <a href="#test" className="text-decoration-none">
                    Manage profiles
                  </a>
                </div>
                <div>
                  <a href="#test" className="text-decoration-none">
                    Add profile email
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 d-flex justify-content-between">
              <div>
                <a href="#test" className="text-decoration-none">
                  Language
                </a>
              </div>
              <div>
                <a href="#test" className="text-decoration-none">
                  Viewing activity
                </a>
              </div>
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-between">
              <div>
                <a href="#test" className="text-decoration-none">
                  Playback settings
                </a>
              </div>
              <div>
                <a href="#test" className="text-decoration-none">
                  Ratings
                </a>
              </div>
            </div>
            <div className="col-9 d-flex justify-content-between">
              <div>
                <a href="#test" className="text-decoration-none">
                  Subtitle appearance
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MySettingsMain;
