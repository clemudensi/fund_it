import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion";
import Campaign from "views/home/Sections/HomepageCampaign";
import Button from "components/CustomButtons/Button.jsx";

import Image1 from 'assets/img/examples/card-blog2.jpg';

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle";
import AllCampaignInfo from "./AllCampaignInfo";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const floatRight = {float: "right"};
    return (
      <div className={classes.productPage}>
        <Parallax
          image={require("assets/img/TBA.jpg")}
          // filter="info"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.main)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={7} sm={7}>
                  {/*<ImageGallery*/}
                    {/*showFullscreenButton={false}*/}
                    {/*showPlayButton={false}*/}
                    {/*startIndex={3}*/}
                    {/*// items={images}*/}
                  {/*/>*/}
                  <img src={Image1} alt="Campaign Image" style={{width: 570, height: 350}} />
                  <AllCampaignInfo/>
                </GridItem>
                <GridItem md={5} sm={5}>
                  <h2 className={classes.title}>Ultimate Fund raiser</h2>
                  <h3 className={classes.mainPrice}>Amount to be raise: <b>$5000</b></h3>
                  <Accordion
                    // active={0}
                    activeColor="info"
                    collapses={[
                      {
                        title: "Funding Type 1",
                        content: (
                          <div>
                            <p>
                              Funds of $500 from 10 individuals
                            </p>
                            <Button color="info" round onClick={this.onClickCancel} style={floatRight}>
                              fund
                            </Button>
                          </div>
                        )
                      },
                      {
                        title: "Funding Type 2",
                        content: (
                         <div>
                           <p>
                             FMCG items
                           </p>
                           <Button color="info" round onClick={this.onClickCancel} style={floatRight}>
                             fund
                           </Button>
                         </div>
                        )
                      },
                      {
                        title: "Funding Type 3",
                        content: (
                          <div>
                            <ul>
                              <li>
                                A choice location in Ikeja
                              </li>
                            </ul>
                            <Button color="info" round onClick={this.onClickCancel} style={floatRight}>
                              fund
                            </Button>
                          </div>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
            </div>
            <div className={classes.relatedProducts}>
              <Campaign/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductPage);
