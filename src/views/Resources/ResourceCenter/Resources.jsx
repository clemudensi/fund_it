import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import InfoArea from "../../../components/InfoArea/InfoArea.jsx";

import featuresStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActions';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "react-router-dom/es/Link";


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


function Resources({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>How to launch a campaign?</h2>
              <h5 className={classes.description}>
                Learn everything you need to know about CrowdFunding for your Project.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Education
                    </Typography>
                    <Typography component="p">
                      Everything you need for every stage of your product’s journey.
                      An expert compilation of advice for bringing your idea to life.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/*<Button size="small" color="primary">*/}
                    {/*Share*/}
                  {/*</Button>*/}
                  <Button size="small" color="primary" align="center">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Experts
                    </Typography>
                    <Typography component="p">
                      Launch your campaign, grow your business, and take your product to market with this select group of quality companies.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/*<Button size="small" color="primary">*/}
                    {/*Share*/}
                  {/*</Button>*/}
                  <Button size="small" color="primary" align="center">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Support
                    </Typography>
                    <Typography component="p">
                      Find advice about everything from planning your launch to shipping your product via articles, guides, webinars and more.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/*<Button size="small" color="primary">*/}
                    {/*Share*/}
                  {/*</Button>*/}
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Trust
                    </Typography>
                    <Typography component="p">
                      FundIt’s mission is to empower people to unite around ideas that matter to them and together make those ideas come to life.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/*<Button size="small" color="primary">*/}
                    {/*Share*/}
                  {/*</Button>*/}
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              <Link to={`/resources/apply-for-equity`}>Apply for  Equity</Link>
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

export default withStyles(featuresStyle)(Resources);
