import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/bg7.jpg";
import LocalAuthService from "./components/LocalAuthService";
import decode from 'jwt-decode';
import Mail from "@material-ui/icons/Mail";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
    };
    this.Auth = new LocalAuthService();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
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
    const decoded = decode(res.data.token);
    if (decoded.local.role === 4){
      window.location.replace(`/admin/${res.data._id}/dashboard`);
    } else {
      window.location.reload();
    }
  };

  render() {
    const { email, password } = this.state;
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
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form} onSubmit={this.handleFormSubmit}>
                    <CardHeader
                      color="info"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Admin Login</h4>

                    </CardHeader>
                    <CardBody signup>
                      <CustomInput
                        id="email"
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
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
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
                    <div className={classes.textCenter}>
                      <Button simple color="info" size="lg" type="submit">
                        Get started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
