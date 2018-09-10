import React from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CustomInput from "components/CustomInput/CustomInput";
import InputLabel from "@material-ui/core/InputLabel";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";

class Individual extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      zip_code: '',
      about_me: '',
      user_type: 'Individual',
      occupation: '',
    }
  }

  handleStreet = e =>{
    this.setState({street: e.target.value});
  };

  handlePhone = e =>{
    this.setState({phone: e.target.value});
  };

  handleCity = e =>{
    this.setState({city: e.target.value});
  };

  handleZipCode = e =>{
    this.setState({zip_code: e.target.value});
  };

  handleAboutMe = e =>{
    this.setState({about_me: e.target.value});
  };

  handleOccupation = e =>{
    this.setState({occupation: e.target.value});
  };

  handleFormSubmit= async (e) =>{
    e.preventDefault();
    const {
      street,
      city,
      zip_code,
      about_me,
      user_type,
      occupation,
      phone
    } = this.state;

    try {
      return await axios.put(`/api/v1/user/5b632e9c4a56d74944d18c2d`, {
        street,
        city,
        zip_code,
        about_me,
        user_type,
        occupation,
        phone
      });
    } catch (err) {
      return err
    }
  };

  render(){
    const { classes } = this.props;
    const {
      street,
      city,
      zip_code,
      about_me,
      occupation,
      phone
    } = this.state;
    return(
      <div>
        <form className={classes.form} onSubmit={this.handleFormSubmit}>
          <Grid container>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="info">
                  <h3 className={classes.cardTitleWhite}>Edit Personal Profile</h3>
                  <p className={classes.cardCategoryWhite}>Update profile</p>
                </CardHeader>
                <CardBody>
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
                    <GridItem xs={12} sm={12} md={8}>
                      <CustomInput
                        labelText="Street"
                        id="street"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: street,
                          onChange: this.handleStreet,
                          placeholder: "Street"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Phone"
                        id="phone"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: phone,
                          onChange: this.handlePhone,
                          placeholder: "Phone"
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
                        inputProps={{
                          value: city,
                          onChange: this.handleCity,
                          placeholder: "City"
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
                        inputProps={{
                          value: zip_code,
                          onChange: this.handleZipCode,
                          placeholder: "Postal Code"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Occupation"
                        id="occupation"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: occupation,
                          onChange: this.handleOccupation,
                          placeholder: "Occupation"
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
                          value: about_me,
                          onChange: this.handleAboutMe,
                          placeholder: "About Me",
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </GridItem>
                  </Grid>
                </CardBody>
                <CardFooter>
                  <Button color="rose" round onClick={this.props.cancelEdit} justify="right">
                    Cancel
                  </Button>
                  <Button type="submit" color="info" round >Update Profile</Button>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </form>
      </div>
    )
  }
}

export default withStyles(javascriptStyles)(Individual);
