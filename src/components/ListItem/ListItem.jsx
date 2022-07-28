import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { Favourite } from "../Favourite/Favourite";

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
        <div className="product-row">
            <div
              className="product--image"
              style={{
                backgroundImage: `url(${image})` ,
              }}
            ></div>
            <div className="product--details">
              <Favourite adId={adId}/>
              <Card.Title>{address}</Card.Title>
              <Card.Text>{formatPrice(price)}Ft</Card.Text>
            </div>
        </div>
      </Link>
  );
}
