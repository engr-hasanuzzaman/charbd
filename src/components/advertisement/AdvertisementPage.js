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
      title: '',
      description: '',
    }

    this.createNewOffer = this.createNewOffer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createNewOffer(event){
    event.preventDefault();
    const ad = {title: this.state.title, description: this.state.description };
    this.setState((state) => {
      return { ads: [...state.ads, ad], title: '', description: '' };
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            {this.state.ads.map((ad, i) => (
              <AdvertisementComponent key={i} title={ad.title} description={ad.description}/>
            ))}
          </div>
          <div className="col-4">
            <form action="#" onChange={this.handleChange}>
              <div className="form-group">
                <input type="text" className="form-control" name='title' value={this.state.title} />
              </div>
              <div className="form-group"></div>
                <input type="text" className="form-control" name='description' value={this.state.description}/>
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