import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Mail from "@material-ui/icons/Mail";
import LockOutline from "@material-ui/icons/LockOutline";
import {NavLink} from "react-router-dom";
// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import LocalAuthService from './components/LocalAuthService';
import FacebookAuth from "./loginFacebook/FacebookAuth";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      loginModal: false
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

  handleLoginEmail = (e) => {
    this.setState({email: e.target.value});
  };

  handleLoginPass = (e) =>{
    this.setState({password: e.target.value});
  };

  handleFormSubmit = async e=> {
    e.preventDefault();
    const {email, password} = this.state;
    const res = await this.Auth.login(email, password);
    if(res.data.success === true) {
      window.location.replace(`/user/${res.data._id}/dashboard`);
      this.setState({
        id: res.data._id,
      })
    }
    this.setState({
      err: res.data.msg
    })
  };

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;
    return (
      <div>

        <Button
          onClick={() => this.handleClickOpen("loginModal")}
          color={window.innerWidth < 960 ? "transparent":"transparent"}
          className={classes.navButton}
          round
        >
          Log in
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLogin
          }}
          open={this.state.loginModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("loginModal")}
          aria-labelledby="login-modal-slide-title"
          aria-describedby="login-modal-slide-description"
        >
          <Card plain className={classes.modalLoginCard}>
            {this.state.err ? <div style={{ color: '#FF0000', padding: '30px', textAlign: 'center'}}>{this.state.err}</div> : null}
            <DialogTitle
              id="login-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <CardHeader
                plain
                className={`${classes.textCenter} ${classes.cardLoginHeader}`}
              >
                <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => this.handleClose("loginModal")}
                >
                  {" "}
                  <Close className={classes.modalClose} />
                </Button>
                <h5 className={classes.cardTitleWhite}>Log in</h5>
                <div className={classes.socialLine}>
                  <FacebookAuth />
                </div>
              </CardHeader>
            </DialogTitle>
            <DialogContent
              id="login-modal-slide-description"
              className={classes.modalBody}
            >
              <form onSubmit={this.handleFormSubmit}>
                <CardBody className={classes.cardLoginBody}>
                  <CustomInput
                    id="login-modal-email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      value: email,
                      onChange: this.handleLoginEmail,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail className={classes.icon} />
                        </InputAdornment>
                      ),
                      placeholder: "Email..."
                    }}
                    required
                    validate
                  />
                  <CustomInput
                    id="login-modal-pass"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                    inputProps={{
                      type: "password",
                      value: password,
                      onChange: this.handleLoginPass,
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutline className={classes.icon} />
                        </InputAdornment>
                      ),
                      placeholder: "Password..."
                    }}
                    required
                  />
                </CardBody>
                <Button color="info" simple size="lg" type="submit">
                  Get started
                </Button>
                <NavLink to="/forgot-pass" className="login-pad waves-float float-right loginpad">forgot password?</NavLink>
              </form>
            </DialogContent>
            <DialogActions
              className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
            >

            </DialogActions>
          </Card>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(Login);
