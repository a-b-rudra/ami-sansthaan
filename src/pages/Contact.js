import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const queryInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredPhone = phoneInput.current.value;
    const enteredEmail = emailInput.current.value;
    const enteredQuery = queryInput.current.value;

    const message = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      query: enteredQuery,
    };
    console.log(message);
  };
  return (
    <Container className="container-contact">
      <h2
        style={{
          fontFamily: "Fira Sans Condensed, sans-serif",
          fontWeight: 700,
          fontSize: "2.3rem",
          paddingLeft: "90px",
          paddingTop: "70px",
        }}
      >
      Connect with us!
      </h2>
      <Row>
        <Col className="colsection">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={nameInput}
            />
            <Form.Control
              type="text"
              placeholder="Phone"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={phoneInput}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={emailInput}
            />
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              placeholder="Your message here"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={queryInput}
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={submitHandler}
            style={{ backgroundColor: "#183a1d" }}
          >
            Submit Query
          </Button>
        </Col>
        <Col>
          <h4>Address here</h4>
          <h6>Contact info here</h6>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;