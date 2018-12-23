import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header";
import NavBarLink from "views/Auth/NavBarLink";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle";
import FundIt from "../../assets/img/fundit-logo.png";

class NavBar extends React.Component {

  render() {
    const { id, profile_image } = this.props;
    return (
      <div>
        <Header
          color="dark"
          brand={<img src={FundIt}/>}
          links={<NavBarLink dropdownHoverColor="info" id={id} profile_image={profile_image}/>}
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
