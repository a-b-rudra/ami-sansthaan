import emailjs from 'emailjs-com'
import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

    emailjs.sendForm(
      'dev-ami-sansthaan', 
      'dev-ami-sansthaan', 
      e.target,
      '0fmIa1B1THz4SVrYt'
      ).then(res => {
        console.log(res)
      }).catch(err=> console.log(err))
  };
  return (
    <Container className="container-contact">
      <h2
        style={{
          fontFamily: "Sans-serif",
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
              name="name"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={nameInput}
            />
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              style={{ fontFamily: "Fira Sans Condensed, sans-serif" }}
              required
              ref={phoneInput}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
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
            <Button
            type="submit"
            onClick={submitHandler}
            style={{ backgroundColor: "#183a1d" }}
          >
            Submit Query
          </Button>
          </Form.Group>
        </Col>
        <Col>
          <h4>Address here</h4>
          <h6>Contact info here</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;