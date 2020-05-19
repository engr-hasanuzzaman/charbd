import React from "react";
import AdvertisementComponent from "./AdvertisementComponent";
import Layout from "../layout";
import { Grid, Box, withStyles, Paper } from "@material-ui/core";
import { fetchAllAdvertisements } from "../../api/advertisementApi";
import { PropTypes } from "prop-types";
import SidePane from './SidePane';
import Example from '../common/Slider';

const styles = (theme) => ({
  contentWrapper: {
    marginTop: "10px",
    marginBottom: "5px",
  },
});

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
    const { classes } = this.props;

    return (
      <Layout>
        <Grid container className={classes.contentWrapper}>
          <Grid item direction="column">
            <Grid container direction="row">
              <Grid item md={8}>
                <Example></Example>
              </Grid>
              <Grid md={4}>
                <Box component={Paper} ml={2}>
                  Text section
                </Box>
              </Grid>
            </Grid>
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
      </Layout>
    );
  }
}

AdvertisementPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvertisementPage);
