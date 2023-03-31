import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function Output({ data, error, repositories }) {
  return (
    <>
      <Row className="mt-2 text-center">
        {error && <p className="error-message">This user is not found :/</p>}
      </Row>
      <Row className="d-flex align-items-center justify-content-center mt-5">
        <Col className="col-12 mb-3">
          {data && (
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <div className="d-flex align-items-start justify-content-center gap-1">
                  <img
                    src={data.avatar_url}
                    alt="profile"
                    style={{ width: "265px" }}
                    className="card"
                  />
                  <ListGroup className="w-100">
                    <ListGroup.Item>Fullname: {data.name}</ListGroup.Item>
                    <ListGroup.Item>Username: {data.login}</ListGroup.Item>
                    <ListGroup.Item>Location: {data.location}</ListGroup.Item>
                    <ListGroup.Item>Email Address: {data.email}</ListGroup.Item>
                  </ListGroup>
                </div>
                <Card.Title className="py-4">
                  Repositories by {data.name}:{" "}
                </Card.Title>

                <ListGroup className="w-100">
                  {repositories &&
                    repositories.map((repo, key) => (
                      <ListGroup.Item key={key}>
                        <span style={{ color: "blue" }}>{repo.name}</span>:{" "}
                        {repo.description}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}
