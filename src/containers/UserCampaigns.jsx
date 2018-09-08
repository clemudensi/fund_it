import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import map from 'lodash/map';
import find from 'lodash/find'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import fetchUserCampaign from "../actions/userCampaigns";
import UpdateCampaign from "../views/dashboard/UserCampaign/Sections/UpdateCampaign";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "components/CustomButtons/Button";

class UserCampaigns extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
  }

  componentWillMount(){
    this.props.fetchUserCampaign();
  }

  onClickEdit = () => {
    this.setState({isEditing: true});
  };

  onCancelEdit = () => {
    this.setState({isEditing: false})
  };

  updateCampaign(key){
    const { user_campaign } = this.props;
    {/*  start*/}
    console.log(key,'key here')
    console.log(this.props.user_campaign[key],'key here')
    const campaignArr = map(user_campaign, (campaign, key) => <UpdateCampaign
      campaign={campaign} onCancelEdit={this.onCancelEdit} key={key} />)

     return (
       <div>
         {find(campaignArr, (campaign) => campaign )}
       </div>
     )
  }

  render(){
    const {isEditing} = this.state;
    const { classes, user_campaign } = this.props;
    {/*  start*/}
    return (
      isEditing ? this.updateCampaign() :
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
                        <img src={campaign.campaign_image} alt="campaign image" />
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
                        <Button
                          className={classes.mrAuto}
                          color="info"
                          onClick={()=> {this.onClickEdit(); this.updateCampaign(key)}}
                          round
                          size="sm">Edit</Button>
                      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(blogsStyle)(UserCampaigns));
