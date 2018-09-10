import React, { Component } from 'react';
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from '@material-ui/icons/People';
// import PropTypes from "prop-types";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import IconButton from "../../../components/CustomButtons/Button";
import CardBody from "../../../components/Card/CardBody";
import LockOutline from "../../../../node_modules/@material-ui/icons/LockOutline";
import CardFooter from "../../../components/Card/CardFooter";

class Personal extends Component{
  render(){
    return(
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[this.state.cardAnimaton]}>
              <form className={classes.form} onSubmit={this.handleFormSubmit}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Register</h4>
                </CardHeader>
                {message !== '' &&
                <div className="lighten-4 red-text text-darken-4 container-fluid">{message}</div>}
                <CardBody>
                  <CustomInput
                    labelText="Date of birth"
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      // value: firstName,
                      // onChange: this.handleFirstName,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Person className={classes.inputIconsColor}/>
                        </InputAdornment>
                      )
                    }}
                    required
                  />
                  <CustomInput
                    labelText="Last Name..."
                    id="last"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      value: lastName,
                      onChange: this.handleLastName,
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor}/>
                        </InputAdornment>
                      )
                    }}
                    required
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    required
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      value: email,
                      onChange: this.handleEmail,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor}/>
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      value: password,
                      min: 6,
                      onChange: this.handlePassword,
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutline className={classes.inputIconsColor}/>
                        </InputAdornment>
                      )
                    }}
                    required
                  />
                  <CustomInput
                    labelText="Confirm Password"
                    id="confirmPass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      value: confirmPassword,
                      onChange: this.handleConfirmPassword,
                      minLength: 6,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Lock className={classes.inputIconsColor}/>
                        </InputAdornment>
                      )
                    }}
                    required
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg" type="submit">
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Personal.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};
