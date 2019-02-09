import React from 'react';
import axios from 'axios';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CustomInput from "components/CustomInput/CustomInput";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Cancel from '@material-ui/icons/Cancel';
import Save from '@material-ui/icons/Save';
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import Media from "components/Media/Media";
import placeholder from "assets/img/placeholder.jpg";
import {PATH_BASE} from "../../../../constants";
import {toast} from "react-toastify";

class Individual extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      zip_code: '',
      state: '',
      about_me: '',
      phone: '',
      user_image: '',
      occupation: '',
      user_type: 'Individual'
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

  handleState = e =>{
    this.setState({state: e.target.value});
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

  uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'fundit-app', upload_preset: 'fua6wfmh', tags:['fundit']},
      (error, result) => {
        try {
          this.setState({
            profile_image: result[0].url,
            fileName: result[0].original_filename,
            format: result[0].format
          })
        } catch (err) {
          return err
        }
      });
  }

  notify(){
    toast.success('You have successfully updated your info', {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: true,
      className: 'foo-bar',
      style: { color: '#5cb960'}
    });
  }

  handleFormSubmit= async (e) =>{
    e.preventDefault();
    const user_id = this.props.id;
    const {
      street,
      city,
      state,
      zip_code,
      about_me,
      user_type,
      occupation,
      phone,
      profile_image
    } = this.state;

    try {
      const res = await axios.put(`${PATH_BASE}/api/v1/user/update`, {
        user_id,
        street,
        city,
        state,
        zip_code,
        about_me,
        user_type,
        occupation,
        phone,
        profile_image
      });
      if (res.status === 200) {
        this.notify();
        this.setState({
          street: '',
          city: '',
          state: '',
          zip_code: '',
          about_me: '',
          user_type: '',
          occupation: '',
          phone: '',
          profile_image: ''});
        window.location.reload();
      }
    } catch (err) {
      return err
    }
  };

  render(){
    const { classes } = this.props;
    const {
      street,
      city,
      state,
      zip_code,
      about_me,
      occupation,
      phone
    } = this.state;
    return(
      <div>
        <form className={classes.form} onSubmit={this.handleFormSubmit} >
          <Card>
            {/*<CardHeader color="info">*/}
            {/*<h3 className={classes.cardTitleWhite}>Edit Personal Profile</h3>*/}
            {/*<p className={classes.cardCategoryWhite}>Update profile</p>*/}
            {/*</CardHeader>*/}
            <CardBody>
              <Media
                title={<div>
                  <Button round onClick={this.uploadWidget} size="sm">
                    Upload Image
                  </Button>
                  <h4>{this.state.fileName}.{this.state.format}</h4>
                </div>
                }
                avatar={placeholder}
                body={
                  <div>

                    {/*User Name*/}
                    {/*<GridContainer container>*/}
                      {/*<GridItem xs={12} sm={12} md={6}>*/}
                        {/*<CustomInput*/}
                          {/*labelText="First Name"*/}
                          {/*id="first-name"*/}
                          {/*formControlProps={{*/}
                            {/*fullWidth: true*/}
                          {/*}}*/}
                        {/*/>*/}
                      {/*</GridItem>*/}
                      {/*<GridItem xs={12} sm={12} md={6}>*/}
                        {/*<CustomInput*/}
                          {/*labelText="Last Name"*/}
                          {/*id="last-name"*/}
                          {/*formControlProps={{*/}
                            {/*fullWidth: true*/}
                          {/*}}*/}
                        {/*/>*/}
                      {/*</GridItem>*/}
                    {/*</GridContainer>*/}
                    <GridContainer container>
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
                    </GridContainer>
                    <GridContainer container>
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
                    </GridContainer>
                    <GridContainer container>
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
                    </GridContainer>
                  </div>
                }
                footer={
                  <div className={classes.signInButton}>
                    <Button
                      color="info"
                      round
                      onClick={this.props.cancelEdit}
                      justify="right" size="sm"
                      className={classes.floatRight}>
                      <Cancel />
                    </Button>
                    <Button
                      type="submit"
                      color="info"
                      round
                      size="sm">
                      <Save />
                    </Button>
                  </div>
                }
              />
            </CardBody>
          </Card>
        </form>
      </div>
    )
  }
}

export default withStyles(javascriptStyles)(Individual);
