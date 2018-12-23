import React from 'react';
// core components
import NavPills from "components/NavPills/NavPills.jsx";
import UserCampaign from "../../../containers/UserCampaigns";
import FundedCampaign from "./Sections/FundedCampaign";
import CampaignForm from "./Sections/CreateCampaign";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../../assets/jss/material-dashboard-react/layouts/dashboardStyle";

class UserCampaignSection extends React.Component{

  campaignId(){
    try {
      return this.props.user_info.dashboard_info[0]._id ? this.props.user_info.dashboard_info[0]._id : null
    }catch (err) {
      return err
    }
  }
  render(){
    const { id } = this.props;
    const padTop = {paddingTop: 30};
    // console.log(this.campaignId(), 'UCS')
    return (
      <div style={padTop}>
        <NavPills
          color="info"
          tabs={[
            {
              tabButton: "Create Campaign",
              tabContent: (
                <CampaignForm id={id} user_info_id={this.campaignId()} />
              )
            },
            {
              tabButton: "User Campaign",
              tabContent: (
                <UserCampaign id={id} user_info_id={this.campaignId()}/>
              )
            },
            {
              tabButton: "Funded Campaign",
              tabContent: (
                <FundedCampaign user_info={this.props.user_info}/>
              )
            }
          ]}
        />
      </div>
    );
  }
};

export default withStyles(dashboardStyle)(UserCampaignSection);
