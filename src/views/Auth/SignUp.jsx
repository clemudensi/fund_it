import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Face from "@material-ui/icons/Face";
import LockOutline from "@material-ui/icons/LockOutline";
import Lock from "@material-ui/icons/Lock";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import LocalAuthService from "./components/LocalAuthService";
import Person from "@material-ui/icons/Person";
import checkboxAdnRadioStyle from "../dashboard/components/checkboxAdnRadioStyle";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Singup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: '',
      confirmPassword: '',
      terms_condition: false,
      signupModal: false
    };
    this.Auth = new LocalAuthService();
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
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

  handleCheckBox = () => {
    this.setState({terms_condition: !this.state.checked});
  }

  handleFormSubmit = async e =>{
    e.preventDefault();
    const { firstName, lastName, email, password, terms_condition } = this.state;
    const res = await this.Auth.signup(firstName, lastName, email, password, terms_condition);
    if( res.data.token){
      window.location.replace(`/user/${res.data._id}`);
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
    // console.log(this.handleCheckBox, 'Checked Props');
    // console.log(this.state.checked, 'Checked State');
    const { firstName, lastName, email, password, confirmPassword, message } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={() => this.handleClickOpen("signupModal")}
          color={window.innerWidth < 960 ? "transparent":"info"}
          className={classes.navButton}
          round
        >
          Sign Up
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalSignup
          }}
          open={this.state.signupModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("signupModal")}
          aria-labelledby="signup-modal-slide-title"
          aria-describedby="signup-modal-slide-description"
        >
          <Card plain className={classes.modalSignupCard}>
            <DialogTitle
              id="signup-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => this.handleClose("signupModal")}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
              <h5 className={`${classes.cardTitle} ${classes.modalTitle}`}>
                Sign Up
              </h5>
            </DialogTitle>
            <DialogContent
              id="signup-modal-slide-description"
              className={classes.modalBody}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} className={classes.mrAuto}>
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
                            <Person className={classes.inputIconsColor}/>
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
                    <FormControlLabel
                      classes={{
                        label: classes.label
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => {this.handleCheckBox()}}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked
                          }}
                          required={true}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <a href="#pablo">terms and conditions</a>.
                        </span>
                      }
                    />
                    <div className={classes.textCenter}>
                      <Button round color="primary" type="submit">
                        Get started
                      </Button>
                    </div>
                  </form>
                </GridItem>
              </GridContainer>
            </DialogContent>
          </Card>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(Singup);
