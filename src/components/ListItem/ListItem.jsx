import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { formatDate, formatPrice } from "../../utils/helpers";
import { DateBox } from "../DateBox/Date";
import { Favourite } from "../Favourite/Favourite";

export function ListItem(props) {
  const { adId, address, image, price, uploadDate, contact, addedDate, showDate } = props;

  console.log('asd', props)

  const linkStateData = {
    adId,
    address,
    image,
    price,
    uploadDate,
    contact,
    
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
              <div className="product--details-inner">
                <div>
                  <Favourite adId={adId}/>
                  <Card.Title>{address}</Card.Title>
                  <Card.Text>{formatPrice(price)}</Card.Text>
                </div>
                { addedDate && showDate ? 
                <div className="list-item info-box">
                  <DateBox text={formatDate(addedDate)}/>
                </div>
                : null }
              </div>
            </div>
        </div>
      </Link>
  );
}
