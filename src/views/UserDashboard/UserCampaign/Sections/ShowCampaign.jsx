import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import map from 'lodash/map';
import axios from 'axios';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import fetchUserCampaign from "actions/userCampaigns";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "components/CustomButtons/Button";
import { PATH_BASE } from "../../../../constants";

class ShowAllUserCampaign extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      campaign_status: false,
      campaign_enabled: false
    }
  }

  componentWillMount(){
    this.props.fetchUserCampaign();
  }

  async publish(campaign_id){
    const {campaign_status, campaign_enabled} = this.state;
    try {
      await axios.patch(`${PATH_BASE}/api/v1/campaign/${campaign_id}/publish`, {campaign_status, campaign_enabled})
      window.location.reload()
    } catch (err) {
      return err
    }
  };

  async withdraw(campaign_id){
    const campaign_status = null;
    const campaign_enabled = true;
    try {
      await axios.patch(`${PATH_BASE}/api/v1/campaign/${campaign_id}/withdraw`, { campaign_status, campaign_enabled })
      window.location.reload()
    } catch (err) {
      return err
    }
  };

  async deleteCampaign(campaign_id){
    const {user_id} = this.props;
    try {
      if (window.confirm("Delete Campaign ?" )) {
        const res = await axios.delete(
          `${PATH_BASE}/api/v1/campaign/${ campaign_id }`, {user_id}
        );
        if(res.data.success === true) window.location.reload();
      }
      return false;
    } catch (err) {
      return err
    }
  }

  render(){
    // console.log(user_campaign, 'User campaign')
    const { classes, user_campaign } = this.props;
    // console.log(this.props.user_id, 'USer ID')
    return (
        map(user_campaign, (campaign, key) => <div className="cd-section" key={key} id={key}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={10}
                  md={10}
                  className={classes.mrAuto}
                >
                  <Card plain blog className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4}>
                        <CardHeader image plain>
                          <img src={campaign.campaign_image} alt="campaign" />
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
                          <h6 className={classes.cardCategory}>{campaign.campaign_type}</h6>
                        </Info>
                        <h3 className={classes.cardTitle}>
                          {campaign.campaign_title}
                        </h3>
                        <p className={classes.description}>
                          {campaign.campaign_description}
                        </p>
                        <div className={classes.author}>
                        <span><b>Amount to be raised:</b>
                        <h3>{campaign.campaign_amount}</h3></span>
                        </div>
                        <Grid container>
                          { campaign.campaign_enabled ? <div>
                            <Button
                              className={classes.mrAuto}
                              color="info"
                              onClick={()=> {this.props.onClickEdit(key)}}
                              round
                              size="sm">Edit</Button>
                            <Button
                              className={classes.mrAuto}
                              color="info"
                              onClick={()=> {this.deleteCampaign(campaign._id)}}
                              round
                              size="sm">Delete</Button>
                          </div>: null }
                        </Grid>
                        {campaign.campaign_status === null ?
                          <Button color="info" round onClick={()=>this.publish(campaign._id)} className={classes.floatRight} type="submit">
                            Publish
                          </Button> : <div>
                            <Button color="secondary" round size="sm">Pending...</Button>
                            <Button
                              onClick={()=>this.withdraw(campaign._id)}
                              color="info" round
                              className={classes.floatRight} >Withdraw</Button>
                          </div>}
                      </GridItem>
                    </GridContainer>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            {/*  END */}

          </div>
        )
    );
  }
}

function mapStateToProps(state) {
  return {
    user_campaign: state.user_campaign
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserCampaign}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(blogsStyle)(ShowAllUserCampaign));
