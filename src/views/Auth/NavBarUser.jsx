import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header";
import NavBarLink from "views/Auth/NavBarLink";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Header
          color="dark"
          brand="FundIt"
          links={<NavBarLink dropdownHoverColor="info" id={this.props.id}/>}
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
