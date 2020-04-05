import React from 'react';

function AdvertisementComponent(props) {
  return(
    <div className="ad-container">
      <p className="title">{ props.title }</p>
      <p className="description">{ props.description }</p>
    </div>
  );
}

export default AdvertisementComponent;