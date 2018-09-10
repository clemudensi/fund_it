import React from 'react';
import UpdateCampaignForm from "./UpdateCampaignForm";
import map from "lodash/map";

class UpdateCampaign extends React.Component {
  render(){
    const { user_campaign, id } = this.props;
    const campaignArr = map(user_campaign, (campaign, key) => <UpdateCampaignForm
      campaign={campaign} onCancelEdit={this.props.onCancelEdit} key={key} />);
    const updateCampaign = campaignArr.find(campaign => campaign.key === `${id}`);
    return(
      <div>
        {updateCampaign}
      </div>
    )
  }
}

export default UpdateCampaign
