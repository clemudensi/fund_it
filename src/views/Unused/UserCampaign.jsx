import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";

class UserCampaign extends React.Component{

  render(){
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classes.mrAuto}
              >
                <h2 className={classes.title}>User Campaign</h2>
                <Card plain blog className={classes.card}>
                  <GridContainer>
                    <GridItem xs={12} sm={4} md={4}>
                      <CardHeader image plain>
                        <a href="#pablito" onClick={e => e.preventDefault()}>
                          <img src={cardBlog4} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardBlog4})`,
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardBlog4})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={8} md={8}>
                      <Info>
                        <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                      </Info>
                      <h3 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </h3>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a traditional
                        boxed software company selling licenses. Today, it’s
                        moving to a subscription model. Yet its own business model
                        disruption is only part of the story — and…
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                      <p className={classes.author}>
                        by{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <b>Mike Butcher</b>
                        </a>{" "}
                        , 2 days ago
                      </p>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/*  END */}

      </div>
    );
  }
}

export default withStyles(blogsStyle)(UserCampaign);
