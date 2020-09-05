import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const { business } = this.props;
    const maps = `http://maps.google.com/?q=${this.props.business.address}${business.name}`;

    return (
      <div className="Business">
        <div className="image-container">
          <a target="_blank" href={business.site}>
            <img src={business.imageSrc} alt="" />
          </a>
        </div>
        <h2>{business.name}</h2>

        <div className="Business-information">
          <div className="Business-address">
            <a href={maps} target="_blank">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{`${business.state} ${business.zipCode}`}</p>
            </a>
          </div>

          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
