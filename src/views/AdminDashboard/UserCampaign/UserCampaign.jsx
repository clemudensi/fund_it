import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import {bindActionCreators} from "redux";
import fetchAllCampaign from "actions/allCampaigns";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import UserCampaignItem from "./UserCampaignItem";
import omit from "lodash/omit";


class UserCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign_status: true,
      campaign_stop: false,
      add_comment: false,
    }
  }

  componentWillMount(){
    this.props.fetchAllCampaign();
  }

  async startCampaign(campaign_id){
    const { campaign_status } = this.state;
    try {
      await axios.patch(`https://xvtebyxo60.execute-api.us-east-1.amazonaws.com/dev/api/v1/campaign/${campaign_id}/start`, { campaign_status })
    } catch (err) {
      return err
    }
  };

  async stopCampaign(campaign_id){
    const stopCampaign = this.state.campaign_stop;
    const campaign_status = stopCampaign;
    try {
      await axios.patch(`https://xvtebyxo60.execute-api.us-east-1.amazonaws.com/dev/api/v1/campaign/${campaign_id}/stop`, { campaign_status })
    } catch (err) {
      return err
    }
  };

  handleAdminComment = e => {
    this.setState({ admin_comment: e.target.admin_comment });
  };

  // handleAddComment(campaignId) {
  //    const { all_campaign } = this.props;
  //   all_campaign.find( campaign => campaign._id === campaignId)
  //   this.setState({ add_comment: true });
  // };

  async addComment (campaignId) {
    const { add_comment } = this.state;
    await axios.post(`https://xvtebyxo60.execute-api.us-east-1.amazonaws.com/dev/api/v1/campaign/${campaignId}/admin-comment`, add_comment)
  };

  render() {
    const rest = omit(this.props, 'fetchAllCampaign');
    const { classes, all_campaign } = this.props;
    const filterCampaign = all_campaign.filter( (campaign) => campaign.campaign_status !== null);
    console.log(filterCampaign, 'FC')
    return (
      <div {...rest} className="cd-section" id="contentAreas">
        {/*<h2>Funded Campaign</h2>*/}
        <div id="tables">
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={8}
              // className={`${classes.mrAuto} ${classes.mlAuto}`}
            >
              <Table
                tableHead={[
                  "#",
                  "Image",
                  "Campaign Name",
                  "Status",
                  "Actions",
                  "Comments"
                ]}
                tableData={
                  filterCampaign.map( (campaign, key) =>
                   [ <UserCampaignItem key={key} campaign={campaign} />])
                }
                customCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />


            </GridItem>
          </GridContainer>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    all_campaign: state.all_campaign
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAllCampaign}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(UserCampaign));
