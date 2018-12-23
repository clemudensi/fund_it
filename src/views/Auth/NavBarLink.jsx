/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh

import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Person from "@material-ui/icons/Person";
import Chat from "@material-ui/icons/Chat";
import Eject from "@material-ui/icons/Eject";
// @material-ui/icons
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown";

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import Button from "components/CustomButtons/Button";
import profileImage from "assets/img/faces/avatar.jpg";

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const logout = () => {
    localStorage.removeItem('id_token');
    window.location.reload();
  };

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>

      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          className={classes.navLink}
          color="transparent"
        >
          Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/campaigns"
          className={classes.navLink}
          color="transparent"
        >
          Campaign
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText={
            <img
              src={props.profile_image}
              className={classes.img}
              alt="profile"
            />
          }
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to={`/user/${props.id}/dashboard`} className={classes.dropdownLink}>
              <Person className={classes.dropdownIcons} /> Profile
            </Link>,
            <Link to="/campaigns" className={classes.dropdownLink}>
              <Chat className={classes.dropdownIcons} /> Campaign
            </Link>,
            <Button color="transparent" onClick={logout}>
              <Eject className={classes.dropdownIcons} /> Log Out
            </Button>
          ]}
        />
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

export default withStyles(navbarsStyle)(HeaderLinks);
