import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Success from "components/Typography/Success.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import cardBlog2 from "assets/img/examples/card-blog2.jpg";

import blog8 from "assets/img/examples/blog8.jpg";

class SectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: "",
      onGoing: true,
      follow: true,
      campaign_status: true
    };
  }

  handleFollow = () => {
    const { follow } = this.state;
    return follow ? "error" : "disabled";
  };

  campaignStatus = () => {
    const { campaign_status } = this.state;
    return campaign_status ? "success" : "disabled";
  };

  onClickFollow = () => {
    this.setState({follow: !this.state.follow});
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section">
        <div className={classes.container}>
          <div>
            {/* BLOG CARDS START */}
            <div className={classes.features2}>
              <div className={classes.container}>
                <h2 className={classes.title} align="center">Why Choose Us!</h2>
                <GridContainer>
                  <GridItem md={4} sm={4} className={`${classes.mlAuto} ${classes.mrAuto} ${
                    classes.textCenter
                    }`}>
                    <Card blog>
                      <CardHeader image>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={blog8} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardBlog2})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Success>
                          <h6 className={classes.cardCategory}>Legal</h6>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            5 Common Legal Mistakes That Can Trip-Up Your
                            Startup
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className={classes.author}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <span><h4>$1,459</h4></span>
                          </a>
                        </div>
                        <div className={`${classes.stats} ${classes.mlAuto}`}>
                          <Favorite color={this.handleFollow()} onClick={this.onClickFollow}/>
                          345
                        </div>
                      </CardFooter>
                      <div className="container-fluid">
                        <CustomLinearProgress
                          variant="determinate"
                          color={this.campaignStatus()}
                          value={100}
                          style={{ width: "92%", display: "inline-block" }}
                        />
                      </div>
                    </Card>
                  </GridItem>
                  <GridItem md={4} sm={4}>
                    <Card blog>
                      <CardHeader image>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={blog8} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardBlog2})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Success>
                          <h6 className={classes.cardCategory}>Legal</h6>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            5 Common Legal Mistakes That Can Trip-Up Your
                            Startup
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className={classes.author}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <span><h4>$1,459</h4></span>
                          </a>
                        </div>
                        <div className={`${classes.stats} ${classes.mlAuto}`}>
                          <Favorite color="error" />
                          345
                        </div>
                      </CardFooter>
                      <div className="container-fluid">
                        <CustomLinearProgress
                          variant="determinate"
                          color={this.campaignStatus()}
                          value={100}
                          style={{ width: "65%", display: "inline-block" }}
                        />
                      </div>
                    </Card>
                  </GridItem>
                  <GridItem md={4} sm={4}>
                    <Card blog>
                      <CardHeader image>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={blog8} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardBlog2})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Success>
                          <h6 className={classes.cardCategory}>Legal</h6>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            5 Common Legal Mistakes That Can Trip-Up Your
                            Startup
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className={classes.author}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <span><h4>$1,459</h4></span>
                          </a>
                        </div>
                        <div className={`${classes.stats} ${classes.mlAuto}`}>
                          <Favorite />
                          345
                        </div>
                      </CardFooter>
                      <div className="container-fluid">
                        <CustomLinearProgress
                          variant="determinate"
                          color={this.campaignStatus()}
                          value={100}
                          style={{ width: "35%", display: "inline-block" }}
                        />
                      </div>

                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionCards);
