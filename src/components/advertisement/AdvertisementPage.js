import React from "react";
// import { Connect } from 're'
import AdvertisementComponent from "./AdvertisementComponent";
import Layout from "../layout";
import { Grid, Box } from "@material-ui/core";
import { fetchAllAdvertisements } from "../../api/advertisementApi";

class AdvertisementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
      title: "",
      description: "",
    };

    this.createNewOffer = this.createNewOffer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchAllAdvertisements().then((ads) => {
      this.setState({ ...this.state, ads: ads });
    });
  }

  createNewOffer(event) {
    event.preventDefault();
    const ad = { title: this.state.title, description: this.state.description };
    this.setState((state) => {
      return { ads: [...state.ads, ad], title: "", description: "" };
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Layout>
        <Grid container>
          <Grid item md={1}>
            Side Panel
          </Grid>

          <Grid item md={11} direction="column">
            <Grid container spacing={5}>
              {this.state.ads.map((ad, i) => (
                <Grid key={i} md={4} spacing={5} item>
                  <AdvertisementComponent
                    key={i}
                    title={ad.title}
                    description={ad.description}
                    img={ad.img}
                    price={ad.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent>
          <p>This flex with right justify content</p>
        </Box>
      </Layout>
    );
  }
}

// const mapStateToDispatch = () => {};
// const mapDispatchToProps = {
//   fetchAllAdvertisements,
// };
export default AdvertisementPage;
