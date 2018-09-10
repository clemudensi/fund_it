import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/bg7.jpg";
import Person from "@material-ui/icons/Person";
import LocalAuthService from "./components/LocalAuthService";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: '',
      confirmPassword: '',
      adminCode: ''
    };
    this.Auth = new LocalAuthService();
  }

  handleFirstName = (e) =>{
    this.setState({firstName:e.target.value});
  };

  handleLastName = (e) =>{
    this.setState({ lastName: e.target.value });
  };

  handleEmail = (e) =>{
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) =>{
    this.setState({ password: e.target.value });
  };

  handleConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

  handleAdminCode = (e) => {
    this.setState({adminCode: e.target.value});
  };

  handleFormSubmit = async e =>{
    e.preventDefault();
    const { firstName, lastName, email, password, adminCode } = this.state;
    const res = await this.Auth.adminSignup(firstName, lastName, email, password, adminCode);
    if( res.data.token){
      window.location.replace(`/admin/${res.data._id}/dashboard`);
    }
  };

  confirmPassword = () => {
    if(this.state.password !== this.state.confirmPassword ){
      this.setState({confirm: "Password did not match"});
    } else {
      this.setState({confirm: <div className="lighten-4 green-text text-darken-4">Password Matched</div>});
      setTimeout(function(){
        this.setState({confirm: false});
      }.bind(this), 5000);
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword, adminCode } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <Card className={classes.cardSignup} style={{ maxWidth: "460px" }}>
                <h2 className={classes.cardTitle}>Admin Registration</h2>
                <CardBody>
                  <GridItem xs={12} sm={12} md={12}>
                    <form className={classes.form} onSubmit={this.handleFormSubmit}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "text",
                          value: firstName,
                          onChange: this.handleFirstName,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "First Name..."
                        }}
                        required
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "text",
                          value: lastName,
                          onChange: this.handleLastName,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Person className={classes.inputAdornmentIcon}/>
                            </InputAdornment>
                          ),
                          placeholder: "Last Name..."
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "email",
                          value: email,
                          onChange: this.handleEmail,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                        required={true}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "password",
                          value: password,
                          min: 6,
                          onChange: this.handlePassword,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "Password..."
                        }}
                        required="true"
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "password",
                          value: confirmPassword,
                          onChange: this.handleConfirmPassword,
                          minLength: 6,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Lock
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "Confirm Password..."
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          type: "password",
                          value: adminCode,
                          onChange: this.handleAdminCode,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Lock
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "Admin Code"
                        }}
                      />
                      <div className={classes.textCenter}>
                        <Button round color="info" type="submit">
                          Get started
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </CardBody>
              </Card>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Components);
