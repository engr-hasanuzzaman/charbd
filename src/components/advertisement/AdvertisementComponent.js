import React from "react";
import PropTypes from "prop-types";

function AdvertisementComponent(props) {
  return (
    <div className="ad-container">
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
}

AdvertisementComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default AdvertisementComponent;
