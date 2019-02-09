import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

function AboutUs(props) {
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
          <h4 className={`${classes.title} ${classes.textCenter}`}>About Us</h4>
          <p>
            FundIt is an Investment platform that helps start-ups and small businesses raise capital online.
            <br/>
            What we look out for
            Our investors are always looking for great opportunities. If you have a company with a unique idea,
            then we are interested in learning more. Our platform is interested in helping companies or start-ups
            raise funds from $500 to $1,000,000 in capital in exchange for equity to help them bring their ideas to
            life.

            <h5><b>What Our Investors Look for:</b></h5>

            1. A unique or new idea. If it’s not new, they want to see an innovative spin on old
            technology.
            <br/>
            2. Market traction, which could be in Alpha or Beta customers, partnerships,
            revenue, or other metrics that define success. They’re not just looking for good
            ideas—they want ideas + execution.
            <br/>
            3. A solid team with experience in their industry.
            <br/>
            In other words, our investors look for three things: Good Ideas, Market Traction, and a Good Team.
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

export default withStyles(style)(AboutUs);
