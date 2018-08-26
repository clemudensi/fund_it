import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GroupWork from "@material-ui/icons/GroupWork";
import Business from "@material-ui/icons/Business";
import Launch from "@material-ui/icons/Launch";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

function WhyUs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
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
              <h2 className={classes.title}>Why Choose Us!</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={GroupWork}
                title="Collaborate"
                description={
                  <span>
                    <p>
                      A perfect place where users and businesses meet, with
                      a common goal to bring  brilliant projects to life.
                    </p>

                  </span>
                }
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={Business}
                title="Build"
                description={
                  <span>
                    <p>
                      We provide the perfect opportunity to transform your ideas
                      into a real business with unlimited potential for growth.
                    </p>
                  </span>
                }
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={Launch}
                title="Dynamic "
                description={
                  <span>
                    <p>
                      In an ever changing and dynamic business landscape,
                      higher standards is a must, we make that easy for you.
                    </p>
                  </span>
                }
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(WhyUs);
