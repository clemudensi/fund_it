import React from 'react';
import axios from 'axios';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import UserCampaignSection from "./UserCampaign/UserCampaignSections";
import UserProfile from "../../containers/UserProfile";
import Alert from "./Alert/Alert";

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

  async componentWillMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
    try{
      const res = await axios.get('/api/v1/user/:id/dashboard');
      this.setState({ dashboard: res.data });
    }catch (error) {
      if(error.response.status === 401 || 304) {
        this.props.history.push("/");
      }
    }
  }

  render(){
    const { classes } = this.props;
    const alertUser = false;
    const showAlert = alertUser ? null : <Alert/>;
    return(
      <div className="cd-section" id="contentAreas">
        <div className={classes.container}>
          {showAlert}
          <GridContainer>
            <Grid container>
              <GridItem xs={4} sm={4} md={4}>
                <UserProfile/>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <UserCampaignSection/>
              </GridItem>
            </Grid>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(UserDashboard);
