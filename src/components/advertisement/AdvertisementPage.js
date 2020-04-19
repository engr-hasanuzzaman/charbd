import React from "react";
import AdvertisementComponent from "./AdvertisementComponent";
import Layout from "../layout";
import { Grid } from "@material-ui/core";

class AdvertisementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [
        {
          title: "Get 20 discount on your favorite Cloth",
          description: "Get 20 discount on your favorite Cloth",
          price: "200 BDT",
          img:
            "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg"
        },
        {
          title: "Get 40 discount on your favorite Cloth",
          description: "Get 20 discount on your favorite Cloth",
          price: "2000 BDT",
          img:
            "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg"
        },
        {
          title: "Get 10 discount on your favorite Cloth",
          description: "Get 20 discount on your favorite Cloth",
          price: "3500 BDT",
          img:
            "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg"
        }
      ],
      title: "",
      description: ""
    };

    this.createNewOffer = this.createNewOffer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createNewOffer(event) {
    event.preventDefault();
    const ad = { title: this.state.title, description: this.state.description };
    this.setState(state => {
      return { ads: [...state.ads, ad], title: "", description: "" };
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Layout>
        <>
          <Grid item md={2}>
            Side Panel
          </Grid>
          <Grid item md={10}>
            {this.state.ads.map((ad, i) => (
              <AdvertisementComponent
                key={i}
                title={ad.title}
                description={ad.description}
                img={ad.img}
                price={ad.price}
              />
            ))}
          </Grid>
        </>
      </Layout>
    );
  }
}

export default AdvertisementPage;
