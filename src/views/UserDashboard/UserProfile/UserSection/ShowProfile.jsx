import  React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import Grid from "@material-ui/core/Grid/Grid";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import avatar from "assets/img/faces/marc.jpg";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
import {bindActionCreators} from "redux";
import fetchUserDashboard from "../../../../actions/dashboard";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import Individual from "./Individual";

class ShowProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show_profile: false,
      user_dashboard: {
        local: {
          firstName: '',
          lastName: ''
        },
      },
      profile: {
        profile_image: ''
      }
    };
  }

  componentWillMount() {

    this.props.fetchUserDashboard();

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user_dashboard !== this.props.user_dashboard) {
      this.setState({user_dashboard: nextProps.user_dashboard[0]});
      this.setState({ profile: nextProps.user_dashboard[0].dashboard_info[0].user})
    }
  };


  render(){
    const { classes } = this.props;
    const padButton = {paddingTop: 30, paddingLeft: 20};
    const { user_dashboard, profile } = this.state
    return(
      <div style={padButton}>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <h3
              className={classes.cardPadding}
              align="center"
            >
              {`Welcome ${user_dashboard.local.firstName} ${user_dashboard.local.lastName}!`}
            </h3>
            <Card profile>
              <CardAvatar profile>
                <img src={profile.profile_image} alt="profile" />
              </CardAvatar>
              <CardBody>
                <h6 className={classes.cardCategory}>{profile.occupation}</h6>
                <h4
                  className={classes.cardTitle}
                >
                  {user_dashboard.local.firstName} {user_dashboard.local.lastName}
                </h4>
                <p className={classes.description}>
                  {profile.about_me}
                </p>
                <Button color="info" round onClick={this.props.onClickEdit}>
                  Edit
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          {this.state.show_profile ? <Individual userInfo_id={this.state.user_dashboard.dashboard_info[0]._id}/> : null}
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(javascriptStyles)(ShowProfile));
