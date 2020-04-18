import React from "react";
import { Paper, Box, Container } from "@material-ui/core";
import Header from "./Header";
import PropTypes from "prop-types";

const style = {
  Paper: {
    padding: "5px"
  }
};

class LayoutComponet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <Container maxWidth="lg" fixed>
        <Header />
        <Box>{children}</Box>
      </Container>
    );
  }
}

LayoutComponet.propTypes = {
  children: PropTypes.object
};

export default LayoutComponet;
