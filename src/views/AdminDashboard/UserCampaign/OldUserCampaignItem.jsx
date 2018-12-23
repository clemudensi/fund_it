import React from 'react'
import {Link} from "react-router-dom";
import Button from "../../../components/CustomButtons/Button";
import Cancel from "@material-ui/core/SvgIcon/SvgIcon";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import axios from "axios";
import Check from "@material-ui/icons/Check";
import withStyles from "@material-ui/core/styles/withStyles";
import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas";
import { PATH_BASE } from "../../../constants";

class OldUserCampaignItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      campaign_status: true,
      campaign_stop: false,
      add_comment: false,
    }
  }

  async startCampaign(campaign_id){
    const { campaign_status } = this.state;
    try {
      await axios.patch(`${PATH_BASE}/api/v1/campaign/${campaign_id}/start`, { campaign_status })
    } catch (err) {
      return err
    }
  };

  async stopCampaign(campaign_id){
    const stopCampaign = this.state.campaign_stop;
    const campaign_status = stopCampaign;
    try {
      await axios.patch(`${PATH_BASE}/api/v1/campaign/${campaign_id}/stop`, { campaign_status })
    } catch (err) {
      return err
    }
  };

  handleAdminComment = e => {
    this.setState({ admin_comment: e.target.admin_comment });
  };

  handleAddComment(campaignId) {
    const { all_campaign } = this.props;
    all_campaign.find( campaign => campaign._id === campaignId)
    this.setState({ add_comment: true });
  };

  async addComment (campaignId) {
    const { add_comment } = this.state;
    await axios.post(`/api/v1/campaign/${campaignId}/admin-comment`, add_comment)
  };

  render(){
    const { classes, campaign } = this.props;
    console.log(this.props.campaign, 'All camp')
    // const { }
    return(
      [

          <img src={`${campaign.campaign_image}`} alt="Campaign" style={{width: 150, height: 120}}/>,
          <Link to={`/campaign/${campaign._id}`}>{campaign.campaign_title}</Link>,
          campaign.campaign_status === true ? "Active" : "Inactive",
          campaign.campaign_status === true ?
            <Button color="transparent" onClick={()=>this.stopCampaign(campaign._id)}><Cancel color="error"/></Button> :
            <Button color="transparent" onClick={()=>this.startCampaign(campaign._id)}><Check color="primary"/></Button>
          ,
            this.state.add_comment ? <GridItem >
              <CustomInput
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.admin_comment,
                  onChange: this.handleAdminComment,
                  placeholder: "Admin Comment"
                }}
              />
              <Button className={classes.floatRight} color="info" onClick={()=>this.addComment(campaign._id)} size="sm">Post</Button>
            </GridItem> : <Button color="info" size="sm" onClick={()=>this.handleAddComment(campaign._id)}>Comment</Button>
      ]
    )
  }
}

export default withStyles(style)(OldUserCampaignItem);
