import React from 'react';
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
import axios from "axios";

class Organization extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      street: '',
      city: '',
      state: '',
      zip_code: '',
      rc_code: '',
      industry: '',
      about_us: '',
      completed: true,
      user_type: 'Organization',
    }
  }

  handleCompanyName = e => {
    this.setState({company_name: e.target.value})
  };

  handleStreet = e =>{
    this.setState({street: e.target.value});
  };

  handleCity = e =>{
    this.setState({city: e.target.value});
  };

  handleState = e =>{
    this.setState({state: e.target.value});
  };

  handleZipCode = e =>{
    this.setState({zip_code: e.target.value});
  };

  handleIndustry = e => {
    this.setState({industry: e.target.value})
  };

  handleRcCode = e => {
    this.setState({rc_code: e.target.value})
  };

  handleAboutUs = e => {
    this.setState({about_us: e.target.value})
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const {
      company_name,
      street,
      state,
      city,
      zip_code,
      rc_code,
      industry,
      user_type,
      about_us,
      completed
    } = this.state;

    try {
      return await axios.put(`/api/v1/user/${this.props.id}`, {
        company_name,
        street,
        state,
        city,
        zip_code,
        rc_code,
        industry,
        user_type,
        about_us,
        completed
      });
    } catch (err) {
      return err
    }
  };
  render(){
    const { classes } = this.props;
    const {
      company_name,
      street,
      city,
      state,
      zip_code,
      rc_code,
      industry,
      about_us
    } = this.state;
    return(
      <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h3 className={classes.cardTitleWhite}>Edit Organization Profile</h3>
                <p className={classes.cardCategoryWhite}>Update profile</p>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Company Name"
                      id="company-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: company_name,
                        onChange: this.handleCompanyName,
                        placeholder: "Street"
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
                      labelText="State"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: state,
                        onChange: this.handleState,
                        placeholder: "State"
                      }}
                    />
                  </GridItem>
                </Grid>
                <Grid container>
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
                      labelText="RC Code"
                      id="rc-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: rc_code,
                        onChange: this.handleRcCode,
                        placeholder: "RC Code"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Industry"
                      id="industry"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: industry,
                        onChange: this.handleIndustry,
                        placeholder: "Industry"
                      }}
                    />
                  </GridItem>
                </Grid>
                <Grid container>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About Us</InputLabel>
                    <CustomInput
                      labelText="Tell us about your company"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        value: about_us,
                        onChange: this.handleAboutUs,
                        placeholder: "About Us",
                        rows: 5
                      }}

                    />
                  </GridItem>
                </Grid>
              </CardBody>
              <CardFooter>
                <Button color="info" round onClick={this.props.cancelEdit} size="sm" justify="right">
                  Cancel
                </Button>
                <Button color="info" round size="sm">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>
    )
  }
}

export default withStyles(javascriptStyles)(Organization);
