import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { formatPrice } from "../../utils/helpers";

export function Details() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleShow = () => setShow((show) => !show);

  const { state } = location;
  console.log("aaa", location);

  return (
    <div className="details-view">
      <Row>
        <Col xs={4}>
          <button className="back-button" onClick={() => navigate(-1)}>
            Vissza
          </button>
        </Col>
        <Col xs={8}>
          <div className="details-panel">
            <h1>Részletek</h1>
          </div>
        </Col>
      </Row>

      <div className="details-address-form">
        <Row>
          <Col xs={12}>
            <strong>{state.address}</strong>
            <p>{formatPrice(state.price)}</p>
          </Col>
          <Col xs={12}>
            <p className="date">{state.uploadDate}</p>
          </Col>
          <Col xs={12}>
            <div className="description-box">
              <p className="description">Lorem ipsum</p>
            </div>
          </Col>
        </Row>
        <div className="details-contact">
          <Row>
            <Col>
              <Button onClick={handleShow}>Kapcsolatfelvétel</Button>
            </Col>
          </Row>
        </div>
      </div>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Kapcsolatfelvétel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email cím: {state.contact.email}</p>
          <p>Telefonszám(ok):</p>
            <ul>
              {state.contact.parsedPhoneNumbers.map((element) => (
                <li key={element}>{element}</li>
              ))}
            </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}
