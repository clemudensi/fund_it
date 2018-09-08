import  React from 'react';
import {bindActionCreators} from "redux";
import fetchUser from "actions/users";
import connect from "react-redux/es/connect/connect";
import withStyles from "@material-ui/core/styles/withStyles";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import Grid from "@material-ui/core/Grid/Grid";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import avatar from "assets/img/faces/marc.jpg";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";

class ShowProfile extends React.Component {

  componentWillMount(){
    this.props.fetchUser();
  }

  render(){
    const { classes } = this.props;
    const padButton = {paddingTop: 30, paddingLeft: 20};
    return(
      <div style={padButton}>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.cardPadding} align="center">{this.props.user_login.msg}</h3>
            <Card profile>
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
                <Button color="info" round onClick={this.props.onClickEdit}>
                  Edit
                </Button>
              </CardBody>
            </Card>
          </GridItem>

        </Grid>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(javascriptStyles)(ShowProfile))
