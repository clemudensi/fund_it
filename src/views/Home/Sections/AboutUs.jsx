import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// import GroupWork from "@material-ui/icons/GroupWork";
// import Airplay from "@material-ui/icons/Airplay";
// import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import InfoArea from "components/InfoArea/InfoArea.jsx";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";


function WhyUs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>

        <div className={classes.features2}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>About US</h2>
              <h5 className={classes.description}>
                FundIt is a unique business concept, you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>

        </div>

      </div>
      {/* Feature 5 END */}
    </div>
  );
}

export default withStyles(featuresStyle)(WhyUs);
