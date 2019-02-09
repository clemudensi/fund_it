import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Chat from "@material-ui/icons/VoiceChat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Shop from "@material-ui/icons/Shop";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import InfoArea from "../../../components/InfoArea/InfoArea.jsx";

import featuresStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import iphone from "../../../assets/img/sections/iphone.png";
import iphone2 from "../../../assets/img/sections/iphone2.png";
import bg9 from "../../../assets/img/bg9.jpg";
import Link from "react-router-dom/es/Link";

function HowItWorks({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>How to launch a campaign</h2>
              <h5 className={classes.description}>
                Dream it. Fund it. Make it. Ship it.
                We help at every step from concept to market.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Raise funds with a crowdfunding campaign"
                description="
Acquire starter capital and validate your idea by tapping into FundIt’s global network of early adopters."
                iconColor="success"
              />
            </GridItem>
            {/*<GridItem xs={12} sm={3} md={3}>*/}
              {/*<InfoArea*/}
                {/*vertical*/}
                {/*icon={VerifiedUser}*/}
                {/*title="Extend your campaign with InDemand"*/}
                {/*description="*/}
{/*After your crowdfunding campaign, continue raising money and building your community with InDemand. No fundraising target, no deadline limits."*/}
                {/*iconColor="success"*/}
              {/*/>*/}
            {/*</GridItem>*/}
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Shop}
                title="Generate early sales in the FundIt Marketplace"
                description="
Sell your product directly to our audience of tech consumers – we even have the partners to provide fulfillment tools."
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={AttachMoney}
                title="Raise investment from the crowd or conduct ICOst"
                description="
Let the crowd invest in your company along with (or instead of) traditional investors. Offer securities, revenue sharing, or even cryptocurrency and token sales."
                iconColor="success"
              />
              <Link to={`/resources/apply-for-equity`}>Apply for Equity</Link>
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
        {/* Feature 2 START */}


      {/* Feature 5 END */}
    </div>
    </div>
  );
}

export default withStyles(featuresStyle)(HowItWorks);
