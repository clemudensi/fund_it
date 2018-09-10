import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx";

class Alert extends React.Component {
  render() {
    const padTop = {paddingTop: 10};
    return (
      <div style={padTop}>
        <SnackbarContent
          fixed
          message={
            <span color="danger">
              <b>INFO ALERT:</b> Update your profile to create or fund a campaign
            </span>
          }
          close
          color="info"
          icon={Warning}
        />
        <Clearfix />
      </div>
    );
  }
}

export default withStyles(notificationsStyles)(Alert);
