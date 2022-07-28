import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

export function ListItem(props) {
  const { adId, address, image, price, uploadDate, contact } = props;

  const linkStateData = {
    adId,
    address,
    image,
    price,
    uploadDate,
    contact
  }

  return (
      <Link
        to={`/details/${adId}`}
        state={linkStateData}
        >
        <Row className="product">
            <div
              className="product--image"
              style={{
                backgroundImage: `url(${image})` ,
              }}
            ></div>
            <div className="product--details">
              <Card.Title>{address}</Card.Title>
              <Card.Text>{formatPrice(price)}Ft</Card.Text>
            </div>
        </Row>
      </Link>
  );
}
