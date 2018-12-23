import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
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

function Equity({ ...props }) {
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
              <h2 className={classes.title}>Turn your community into investors</h2>
              <h4 className={classes.description}>
                Scale your business alongside an engaged community of investors, without sacrificing creative control.
              </h4>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Get exposed to an investor network"
                description="
Make connections with enthusiastic investors—and benefit from their dedication as well as their investment."
                iconColor="info"
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
                icon={Fingerprint}
                title="Do business your way"
                description="
Keep creative control of your company while getting assistance from a passionate community."
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={AttachMoney}
                title="Team up with experts"
                description="
We’re leaders in the crowdfunding and investing space who’ve helped thousands of companies get off the ground."
                iconColor="danger"
              />
              {/*<Link to={`/apply-for-equity`}>Apply for  Equity</Link>*/}
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

export default withStyles(featuresStyle)(Equity);
