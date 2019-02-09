import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import FundIt from "../../assets/img/fund.jpg";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle";

class NavBar extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Header
          color="dark"
          brand={<img src={FundIt} alt={'fund-it'}/>}
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white"
          }}
        />

      </div>
    );
  }
}

export default withStyles(sectionsPageStyle)(NavBar);
