import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function FormComponent({handleSearch}) {
  const [userName, setUserName] = useState("");

  return (
    <Row className="d-flex align-items-center justify-content-center mt-3">
      <Col className="col-8">
        <Form>
          <Form.Group className="mb-3" controlId="UserName">
            <Form.Label>Enter user's name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the user"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => handleSearch(userName)}>
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
