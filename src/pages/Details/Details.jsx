import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import {Row, Col }  from 'react-bootstrap';
import { formatPrice } from '../../utils/helpers';

export function Details(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  console.log('aaa', location)
    
    return (
      <div className="details-view">
        <Row>
          <Col xs={4}>
            <button onClick={() => navigate(-1)}>Vissza</button>
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
        </div>
      </div>
    )
  }