import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import dg6 from "assets/img/dg6.jpg";
import dg10 from "assets/img/dg10.jpg";
import dg9 from "assets/img/dg9.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/blogStyle.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";
import Favorite from "@material-ui/icons/Favorite";

const Campaign = props => {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>Latest Articles</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg6} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg6})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
                <h6
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Trends
                </h6>
                <h4 className={classes.cardTitle}>
                  <a href="#pablo">
                    Learn how to wear your scarf with a floral print shirt
                  </a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg10} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg10})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
                <h6
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Fashion Week
                </h6>
                <h4 className={classes.cardTitle}>
                  <a href="#pablo">
                    Katy Perry was wearing a Dolce & Gabanna arc dress
                  </a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyContentBetween}>
                <div className={classes.price}>
                  <h4>$1,459</h4>
                </div>
                <div className={classes.stats}>
                  <Tooltip
                    id="tooltip-top"
                    title="Save to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon color="rose" simple>
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card blog>
              <CardHeader image>
                <a href="#pablo">
                  <img src={dg9} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dg9})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody>
                <h6
                  className={classNames(classes.cardCategory, classes.textRose)}
                >
                  Fashion Week
                </h6>
                <h4 className={classes.cardTitle}>
                  <a href="#pablo">
                    Check the latest fashion events and which are the trends
                  </a>
                </h4>
                <p className={classes.cardDescription}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
              <CardFooter>
                <div className={classes.authorWhite}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {/*<img*/}
                      {/*src={avatar}*/}
                      {/*alt="..."*/}
                      {/*className={`${classes.imgRaised} ${*/}
                        {/*classes.avatar*/}
                        {/*}`}*/}
                    {/*/>*/}
                    <span>Tania Andrew</span>
                  </a>
                </div>
                <div
                  className={`${classes.statsWhite} ${classes.mlAuto}`}
                >
                  <Favorite />
                  2.4K ·
                  {/*<Share />*/}
                  {/*45*/}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(styles)(Campaign);
