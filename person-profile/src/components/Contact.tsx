import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <h2 className="text-center text-primary poppins-medium mb-5">
          Contact Me
        </h2>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <div>
              <h5 className="poppins-light text-accent">Email</h5>
              <p className="poppins-light">1allancontactme@gmail.com</p>

              <h5 className="poppins-light text-accent">Phone</h5>
              <p className="poppins-light">(42) 99927-2741</p>

              <h5 className="poppins-light text-accent">LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/allan-cordova-b2b53135a"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                linkedin.com/in/allan-cordova
              </a>
            </div>
          </Col>

          <Col md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="poppins-light">Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="poppins-light"
                  style={{
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="poppins-light">Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="poppins-light"
                  style={{
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label className="poppins-light">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message..."
                  className="poppins-light"
                  style={{
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                />
              </Form.Group>

              <Button
                variant="outline-light"
                type="submit"
                className="poppins-light btn w-100"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
