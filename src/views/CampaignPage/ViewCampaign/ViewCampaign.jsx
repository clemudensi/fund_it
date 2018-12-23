import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Campaign from "views/Home/Sections/HomepageCampaign";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle";
import CampaignInfo from "./Sections/CampaignInfo";
import {bindActionCreators} from "redux";
import fetchViewCampaign from "actions/viewCampaign";
import connect from "react-redux/es/connect/connect";
import CampaignFundTypes from "./Sections/CampaignFundTypes";

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
    const { classes, view_campaign, user_id, match } = this.props;
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
                <GridItem md={7} sm={12}>
                  <img src={view_campaign.campaign_image} alt="Campaign" style={{width: 580, height: 350}} />
                  <CampaignInfo
                    info={view_campaign.campaign_description}
                    comments={view_campaign.comments}
                    funders={view_campaign.campaign_funds}
                    user_id={user_id}
                    campaign_id={match.params.id}
                  />
                </GridItem>
                <GridItem md={5} sm={12}>

                  <CampaignFundTypes
                    campaign_funds={this.props.view_campaign.campaign_funds}
                    id={this.props.view_campaign._id}
                    title={this.props.view_campaign.campaign_title}
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
