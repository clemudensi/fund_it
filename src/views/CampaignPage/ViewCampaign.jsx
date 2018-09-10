import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion";
import Campaign from "views/Home/Sections/HomepageCampaign";
import Button from "components/CustomButtons/Button.jsx";

import Image1 from 'assets/img/examples/card-blog2.jpg';

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle";
import CampaignInfo from "./CampaignInfo";
import {bindActionCreators} from "redux";
import fetchViewCampaign from "actions/viewCampaign";
import connect from "react-redux/es/connect/connect";

class ViewCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }

  componentDidMount() {
    this.props.fetchViewCampaign();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    console.log(this.props.view_campaign, 'User props in Campaign PAge')
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
                <GridItem md={7} sm={4}>
                  <img src={Image1} alt="Campaign" style={{width: 580, height: 350}} />
                  <CampaignInfo/>
                </GridItem>
                <GridItem md={5} sm={4}>
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


function mapStateToProps(state) {
  return {
    view_campaign: state.view_campaign
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchViewCampaign}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(productStyle)(ViewCampaign));
