import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import axios from 'axios';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";
import NavBarUser from "../../auth/NavBarUser";

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

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dashboard: '',
      isEditing: false
    }
  }

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

  onClickEdit = () =>{
    this.setState({isEditing: true})
  };

  onClickCancel = () =>{
    this.setState({isEditing: false})
  };

  onNavUser(){
    return <NavBarUser {...this.props}/>
  }

  render(){
    console.log(this.props.match.params.id, 'profilw props')
    console.log(this.state.dashboard);
    console.log(window.location.pathname, 'Window Href');
    const { classes } = this.props;
    return (
      this.state.isEditing ?
        <div>
          <Grid container>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="info">
                  <h3 className={classes.cardTitleWhite}>Edit Profile</h3>
                  <p className={classes.cardCategoryWhite}>Update your profile</p>
                </CardHeader>
                <CardBody>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company (disabled)"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true
                        }}
                      />
                    </GridItem>
                  </Grid>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </Grid>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </Grid>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                      <CustomInput
                        labelText="All the fun and great things about yourself"
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </GridItem>
                  </Grid>
                </CardBody>
                <CardFooter>
                  <Button color="rose" round onClick={this.onClickCancel} justify="right">
                    Cancel
                  </Button>
                  <Button color="info" round >Update Profile</Button>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </div> :
        <div>
          <Grid container>
            <h3 className={classes.cardPadding}>{this.state.dashboard.msg}</h3>
            <GridItem xs={12} sm={12} md={12}>
              <Card  profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h6 className={classes.cardCategory}>Entrepreneur</h6>
                  <h4 className={classes.cardTitle}>{this.state.dashboard.firstName} {this.state.dashboard.lastName}</h4>
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

export default withStyles(styles)(UserProfile);
