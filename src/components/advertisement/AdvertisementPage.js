import React from 'react';
import AdvertisementComponent from './AdvertisementComponent';

class AdvertisementPage extends React.Component {
  render(){
    const ads = [
      { title: 'Get 20 discount on your favorite Cloth', 
        description: 'Get 20 discount on your favorite Cloth', price: '200 BDT'
      },
      { title: 'Get 40 discount on your favorite Cloth', 
        description: 'Get 20 discount on your favorite Cloth', price: '2000 BDT'
      },
      { title: 'Get 10 discount on your favorite Cloth', 
        description: 'Get 20 discount on your favorite Cloth', price: '3500 BDT'
      }
    ];

    return(
      <div className="container-fluid">
        {ads.map((ad) => (
          <AdvertisementComponent key={ad.title} title={ad.title} description={ad.description}/>
          ))}
      </div>
    );
  }
}

export default AdvertisementPage;