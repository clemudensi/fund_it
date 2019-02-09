import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

function StartCampaign(props) {
  const { classes } = props;
  return (
    <div>
      <Card>
        {/*<img*/}
        {/*className={classes.imgCardTop}*/}
        {/*src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"*/}
        {/*alt="Card-img-cap"*/}
        {/*/>*/}
        <CardBody>
          <h4 className={`${classes.title} ${classes.textCenter}`}>Start A Campaign</h4>
          <p>
            How much would you like to raise; What skills/expertise do you require; What assets
            would you like to get access to; Title of campaign; [Create My Campaign] (campaign can be edited or
            deleted). (Please refer to FundIt for options to Preview, Save campaign and Review &amp; Launch). Also
            for contents to complete the steps before campaign can be launched e.g. Campaign Tag Line,
            Campaign Image, Location, Category etc. Users have 6 months from starting a campaign to launching it
            (Can be reviewed later). The option for Pre-launch is also good- having a landing page to get e-mails
            and potential client information (Please refer to FundIt).
            <br/>

            <b>Sign Up</b> - Same information requested for by FundIt should be requested for:
            <br/>

            <b>Log In</b> - Same information requested for by FundIt should be requested for
            <br/>

            After Creating your profile, Please see how it’s done on FundIt.
            [My Campaigns, My Contributions, Profile, Settings, Log Out]
          </p>
          {/*<p>*/}
          {/*<small className={classes.textMuted}>*/}
          {/*Last updated 3 mins ago*/}
          {/*</small>*/}
          {/*</p>*/}
        </CardBody>
      </Card>
    </div>
  );
}

export default withStyles(style)(StartCampaign);
