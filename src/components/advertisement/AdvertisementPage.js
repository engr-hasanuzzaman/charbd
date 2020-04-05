import React from 'react';
import AdvertisementComponent from './AdvertisementComponent';

class AdvertisementPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ads: [
        { title: 'Get 20 discount on your favorite Cloth', 
          description: 'Get 20 discount on your favorite Cloth', price: '200 BDT'
        },
        { title: 'Get 40 discount on your favorite Cloth', 
          description: 'Get 20 discount on your favorite Cloth', price: '2000 BDT'
        },
        { title: 'Get 10 discount on your favorite Cloth', 
          description: 'Get 20 discount on your favorite Cloth', price: '3500 BDT'
        }
      ],
      ad: { title: '', description: '' }
    }

    this.createNewOffer = this.createNewOffer.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  createNewOffer(){
    console.log('new offer create' + this)
  }

  handleTitleChange(e){
    console.log('new value is ' + e.target.value);
    this.setState((state, e) => (state.ad.title = e.target.value))
  }

  handleDescriptionChange(e){
    console.log('new value is ' + e.target.value);
    this.setState((state, e) => (state.ad.description = e.target.value))
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            {this.state.ads.map((ad) => (
              <AdvertisementComponent key={ad.title} title={ad.title} description={ad.description}/>
            ))}
          </div>
          <div className="col-4">
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="title" value={this.state.ad.title} onChange={this.handleTitleChange}/>
              </div>
              <div className="form-group"></div>
                <input type="text" className="form-control" placeholder="description" value={this.state.ad.description} onChange={this.handleDescriptionChange}/>
              <div className="form-group">
                <button className="btn btn-sm btn-success" type="submit" onClick={this.createNewOffer}>
                  Create New Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    );
  }
}

export default AdvertisementPage;