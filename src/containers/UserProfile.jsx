import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

import avatar from "assets/img/faces/marc.jpg";
import  fetchUser from 'actions/users'
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import Individual from "views/dashboard/UserProfile/UserFormSection/Individual";
import Organization from "views/dashboard/UserProfile/UserFormSection/Organization";


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dashboard: '',
      isEditing: false,
      showIndividual: false,
      showOrganization: false
    }
  }

  componentWillMount(){
    this.props.fetchUser();
  }

  onClickEdit = () =>{
    this.setState({isEditing: true})
  };

  onClickCancel = () =>{
    this.setState({isEditing: false})
  };

  renderIndividual = () => {
    this.setState((prevState) =>
      ({ showIndividual: prevState, showOrganization: false })
    )
  };

  renderOrganization = () =>{
    this.setState((prevState) =>
      ({ showOrganization: prevState, showIndividual: false })
    )
  };

  render(){
    const { classes } = this.props;
    let showIndividual = this.state.showIndividual ? <Individual cancelEdit={this.onClickCancel}/> : null;
    let showOrganization = this.state.showOrganization ? <Organization cancelEdit={this.onClickCancel}/> : null;
    return (
      this.state.isEditing ?
        <div>
          <Button onClick={this.renderIndividual} color="info" size="lg" round>Individual</Button>
          <Button onClick={this.renderOrganization} color="info" size="lg" round>Organization</Button>
          <Button onClick={this.onClickCancel} color="rose" size="lg" round>Cancel Edit</Button>
          <div>
            {showIndividual}
          </div>
          <div>
            {showOrganization}
          </div>
        </div> :
        <div>
          <Grid container>
            <h3 className={classes.cardPadding}>{this.props.user_login.msg}</h3>
            <GridItem xs={12} sm={12} md={12}>
              <Card  profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h6 className={classes.cardCategory}>Entrepreneur</h6>
                  <h4 className={classes.cardTitle}>{this.props.user_login.firstName} {this.props.user_login.lastName}</h4>
                  <p className={classes.description}>
                    I am a founder of several start ups and I enjoy entrepreneurship.
                    I always seek to create new opportunities from challenges with the aim of
                    creating benefits wih social impact.
                  </p>
                  <Button color="info" round onClick={this.onClickEdit}>
                    Edit
                  </Button>
                </CardBody>
              </Card>
            </GridItem>

          </Grid>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    user_login: state.user_login
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(javascriptStyles)(UserProfile));
