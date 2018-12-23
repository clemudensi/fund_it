/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Login from 'views/Auth/Login';
import SignUp from 'views/Auth/SignUp';

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
import Button from "../CustomButtons/Button";

function HeaderLinks({ ...props }) {

  const { classes } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="/campaigns"
          className={classes.navLink}
          color="transparent"
        >
          Campaign
        </Button>
      </ListItem>

      {/*Sign in Button*/}
      <ListItem className={classes.listItem}>
        <Login />
      </ListItem>

      {/*Sign Up Button*/}
      <ListItem className={classes.listItem}>
        <SignUp />
      </ListItem>

    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
