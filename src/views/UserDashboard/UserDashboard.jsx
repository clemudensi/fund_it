import React from 'react';
import axios from 'axios';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import UserCampaignSection from "./UserCampaign/UserCampaignSections";
import UserProfile from "./UserProfile/containers/UserProfile";
import Alert from "./Alert/Alert";
import {bindActionCreators} from "redux";
import fetchUserDashboard from "../../actions/dashboard";
import connect from "react-redux/es/connect/connect";
import { PATH_BASE } from "../../constants";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

  cardPadding: {
    paddingBottom: "30px"
  }
};


class UserDashboard extends React.Component{

  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.props.fetchUserDashboard();
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
    try{
      const res = await axios.get(`${ PATH_BASE }/api/v1/user/${id}`);
      this.setState({ dashboard: res.data });
    }catch (error) {
      if(error.response.status === 401 || 304) {
        this.props.history.push("/");
      }
    }
  }

  render(){
    // console.log(this.state.dashboard, 'USER DASH')
    const { classes, match, user_dashboard } = this.props;
    const alertUser = false;
    const showAlert = alertUser ? null : <Alert/>;
    return(
      <div className="cd-section" id="contentAreas">
        <div className={classes.container}>
          {showAlert}
          <GridContainer>
            <Grid container>
              <GridItem xs={12} sm={12} md={4}>
                <UserProfile id={match.params.id} user_info={user_dashboard[0]}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <UserCampaignSection id={match.params.id} user_info={user_dashboard[0]}/>
              </GridItem>
            </Grid>
          </GridContainer>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user_dashboard: state.user_dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserDashboard}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserDashboard));
