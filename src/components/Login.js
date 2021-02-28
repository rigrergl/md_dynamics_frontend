import React from "react";
import "../styles/login.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <div className="login">
      <Form style={{ width: "40vh" }}>
        <h1 style={{ margin: "0 auto" }}>Sign-In</h1>
        <Row>
          <Col
            style={{
              marginBottom: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Form.Control placeholder="First name" />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginBottom: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
      <Form>
        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
