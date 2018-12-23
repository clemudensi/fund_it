import React from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Success from "components/Typography/Success.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import cardBlog2 from "assets/img/examples/card-blog2.jpg";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import fetchAllCampaign from "../../../actions/allCampaigns";
import Link from "react-router-dom/es/Link";
import omit from 'lodash/omit';
import map from 'lodash/map';
import Timelapse from '@material-ui/icons/Timelapse';
import Countdown from "../components/CampaignCountDown";
import { PATH_BASE } from "../../../constants";


class Campaigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: true,
      campaign_status: true,
      status: false
    };
  }

  componentWillMount(){
    this.props.fetchAllCampaign();
  }

  componentWillUpdate(prevProps, prevState){
    try {
      if (prevState.status !== this.state.status) {
        this.props.fetchAllCampaign();
      }
    }catch (err) {
      return err
    }
  }

  componentWillUnmount(){
    this.props.fetchAllCampaign();
  }

  async followCampaign (key){
    const { user_id } = this.props;
    const { follow } = this.state;
    this.setState((prevState) =>
      ({ follow: !prevState.follow })
    );
    this.setState((prevState => ({
        status: !prevState.status
      })
    ));
    const campaign = this.props.all_campaign[key]
    const campaignId = campaign._id;
    // const status = campaign.campaign_followers.includes(user_id);
    const campaign_followers = user_id;
    // this.setState({ campaign_status: status });
    try {
      await axios.patch(`${PATH_BASE}/api/v1/${campaignId}/follow`, { campaign_followers, campaignId, follow })
      // return this.setState({campaigns: campaigns})
    } catch (err) {
      return err
    }
  }

  campaignStatus () {
    const { campaign_status } = this.state;
    // console.log(campaign_status, 'Campaign status')
    return campaign_status ? "success" : "gray";
  };

  renderCampaign(){
    const { classes, all_campaign, user_id } = this.props;
    return(
      map(all_campaign, (campaign, key) => {
        let foundCampaign = campaign.campaign_followers.includes(user_id)
          const color = foundCampaign ? "error" : "disabled";

        return (
          <GridItem md={4} sm={4} className={`${classes.mlAuto} ${classes.mrAuto} ${
            classes.textCenter
            }`} key={key}>
            <Card blog>
              <CardHeader image>
                <img src={campaign.campaign_image} alt="Campaign" />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardBlog2})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody>
                <Success>
                  <h6 className={classes.cardCategory}>{campaign.campaign_type}</h6>
                </Success>
                <h4 className={classes.cardTitle}>
                  <Link to={`/campaign/${campaign._id}`}>
                    {campaign.campaign_title}
                  </Link>
                </h4>
                <p className={classes.cardDescription}>
                  {campaign.campaign_description}
                </p>
              </CardBody>
              <CardFooter>
                <div className={classes.author}>
                  <span><h4>${campaign.campaign_amount}</h4></span>
                </div>
                <div className={`${classes.stats} ${classes.mlAuto}`}>
                  <Favorite color={color} onClick={() => this.followCampaign(key)} style={{ cursor: 'pointer'}}/>
                  <Countdown campaign_duration={campaign.campaign_duration}/>
                  <Timelapse/>
                </div>
              </CardFooter>
              <div className="container-fluid">
                <CustomLinearProgress
                  variant="determinate"
                  color={this.campaignStatus()}
                  value={100}
                  style={{ width: "92%", display: "inline-block" }}
                />
              </div>
            </Card>
          </GridItem>
        )
      })
    )
  }

  render() {
    const { classes, } = this.props;
    const rest = omit(this.props, 'fetchAllCampaign', 'staticContext');
    return (
      <div className="cd-section" {...rest}>
        <div className={classes.container}>
          <div>
            {/* BLOG CARDS START */}
            <div className={classes.features2}>
              <div className={classes.container}>
                <h2 className={classes.title} align="center">Campaign Explore</h2>
                <GridContainer>
                  {this.renderCampaign()}
                  {/*<GridItem md={4} sm={4}>*/}
                    {/*<Card blog>*/}
                      {/*<CardHeader image>*/}
                        {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                          {/*<img src={blog8} alt="..." />*/}
                        {/*</a>*/}
                        {/*<div*/}
                          {/*className={classes.coloredShadow}*/}
                          {/*style={{*/}
                            {/*backgroundImage: `url(${cardBlog2})`,*/}
                            {/*opacity: "1"*/}
                          {/*}}*/}
                        {/*/>*/}
                      {/*</CardHeader>*/}
                      {/*<CardBody>*/}
                        {/*<Success>*/}
                          {/*<h6 className={classes.cardCategory}>Legal</h6>*/}
                        {/*</Success>*/}
                        {/*<h4 className={classes.cardTitle}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*Best Campaign to fund on the Planet!*/}
                          {/*</a>*/}
                        {/*</h4>*/}
                        {/*<p className={classes.cardDescription}>*/}
                          {/*Don't be scared of the truth because we need to*/}
                          {/*restart the human foundation in truth And I love you*/}
                          {/*like Kanye loves Kanye I love Rick Owens’ bed design*/}
                          {/*but the back is...*/}
                        {/*</p>*/}
                      {/*</CardBody>*/}
                      {/*<CardFooter>*/}
                        {/*<div className={classes.author}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*<span><h4>$1,459</h4></span>*/}
                          {/*</a>*/}
                        {/*</div>*/}
                        {/*<div className={`${classes.stats} ${classes.mlAuto}`}>*/}
                          {/*<Favorite color="error" />*/}
                          {/*345*/}
                        {/*</div>*/}
                      {/*</CardFooter>*/}
                      {/*<div className="container-fluid">*/}
                        {/*<CustomLinearProgress*/}
                          {/*variant="determinate"*/}
                          {/*color={this.campaignStatus()}*/}
                          {/*value={100}*/}
                          {/*style={{ width: "65%", display: "inline-block" }}*/}
                        {/*/>*/}
                      {/*</div>*/}
                    {/*</Card>*/}
                  {/*</GridItem>*/}

                  {/*<GridItem md={4} sm={4}>*/}
                    {/*<Card blog>*/}
                      {/*<CardHeader image>*/}
                        {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                          {/*<img src={blog8} alt="..." />*/}
                        {/*</a>*/}
                        {/*<div*/}
                          {/*className={classes.coloredShadow}*/}
                          {/*style={{*/}
                            {/*backgroundImage: `url(${cardBlog2})`,*/}
                            {/*opacity: "1"*/}
                          {/*}}*/}
                        {/*/>*/}
                      {/*</CardHeader>*/}
                      {/*<CardBody>*/}
                        {/*<Success>*/}
                          {/*<h6 className={classes.cardCategory}>Legal</h6>*/}
                        {/*</Success>*/}
                        {/*<h4 className={classes.cardTitle}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*Best Campaign to fund on the Planet!*/}
                          {/*</a>*/}
                        {/*</h4>*/}
                        {/*<p className={classes.cardDescription}>*/}
                          {/*Don't be scared of the truth because we need to*/}
                          {/*restart the human foundation in truth And I love you*/}
                          {/*like Kanye loves Kanye I love Rick Owens’ bed design*/}
                          {/*but the back is...*/}
                        {/*</p>*/}
                      {/*</CardBody>*/}
                      {/*<CardFooter>*/}
                        {/*<div className={classes.author}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*<span><h4>$1,459</h4></span>*/}
                          {/*</a>*/}
                        {/*</div>*/}
                        {/*<div className={`${classes.stats} ${classes.mlAuto}`}>*/}
                          {/*<Favorite color="error" />*/}
                          {/*345 days left*/}
                          {/*<Timelapse/>*/}
                        {/*</div>*/}
                      {/*</CardFooter>*/}
                      {/*<div className="container-fluid">*/}
                        {/*<CustomLinearProgress*/}
                          {/*variant="determinate"*/}
                          {/*color={this.campaignStatus()}*/}
                          {/*value={100}*/}
                          {/*style={{ width: "65%", display: "inline-block" }}*/}
                        {/*/>*/}
                      {/*</div>*/}
                    {/*</Card>*/}
                  {/*</GridItem>*/}

                  {/*<GridItem md={4} sm={4}>*/}
                    {/*<Card blog>*/}
                      {/*<CardHeader image>*/}
                        {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                          {/*<img src={blog8} alt="..." />*/}
                        {/*</a>*/}
                        {/*<div*/}
                          {/*className={classes.coloredShadow}*/}
                          {/*style={{*/}
                            {/*backgroundImage: `url(${cardBlog2})`,*/}
                            {/*opacity: "1"*/}
                          {/*}}*/}
                        {/*/>*/}
                      {/*</CardHeader>*/}
                      {/*<CardBody>*/}
                        {/*<Success>*/}
                          {/*<h6 className={classes.cardCategory}>Legal</h6>*/}
                        {/*</Success>*/}
                        {/*<h4 className={classes.cardTitle}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*User Campaign for promo Purpose only*/}
                          {/*</a>*/}
                        {/*</h4>*/}
                        {/*<p className={classes.cardDescription}>*/}
                          {/*Don't be scared of the truth because we need to*/}
                          {/*restart the human foundation in truth And I love you*/}
                          {/*like Kanye loves Kanye I love Rick Owens’ bed design*/}
                          {/*but the back is...*/}
                        {/*</p>*/}
                      {/*</CardBody>*/}
                      {/*<CardFooter>*/}
                        {/*<div className={classes.author}>*/}
                          {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                            {/*<span><h4>$1,459</h4></span>*/}
                          {/*</a>*/}
                        {/*</div>*/}
                        {/*<div className={`${classes.stats} ${classes.mlAuto}`}>*/}
                          {/*<Favorite />*/}
                          {/*345*/}
                        {/*</div>*/}
                      {/*</CardFooter>*/}
                      {/*<div className="container-fluid">*/}
                        {/*<CustomLinearProgress*/}
                          {/*variant="determinate"*/}
                          {/*color={this.campaignStatus()}*/}
                          {/*value={100}*/}
                          {/*style={{ width: "35%", display: "inline-block" }}*/}
                        {/*/>*/}
                      {/*</div>*/}
                    {/*</Card>*/}
                  {/*</GridItem>*/}
                </GridContainer>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Campaigns));
