import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// import People from "@material-ui/icons/People";
import LocalAuthService from './components/LocalAuthService';
import FacebookAuth from "./loginFacebook/FacebookAuth";

// core components
// import Header from "../../components/Header/Header.jsx";
// import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import IconButton from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
        email: '',
        password: '',
        message: '',
        username: null
    };
    this.Auth = new LocalAuthService();
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

  onFacebookLogin = (loginStatus, resultObject) => {
    console.log('THis is a facebook login fire')
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  handleLoginEmail = (e) => {
      this.setState({email: e.target.value});
  };

  handleLoginPass = (e) =>{
      this.setState({password: e.target.value});
  };

  handleFormSubmit = async e =>{
    console.log("I m being fired");
      e.preventDefault();
      const {email, password} = this.state;
      try {
          const res = await this.Auth.login(email, password);
          if( res.data.token){
              this.props.history.replace('/dashboard');
          }
      }catch (error) {
          this.setState({message: error.response.data.msg});
      }
  };

  render() {
    const { email, password, message } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {/*<Header*/}
          {/*absolute*/}
          {/*color="transparent"*/}
          {/*brand="Material Kit React"*/}
          {/*rightLinks={<HeaderLinks />}*/}
          {/*{...rest}*/}
        {/*/>*/}
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
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleFormSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <FacebookAuth />
                          {/*<button onClick={this.onFacebookLogin}>Facebook</button>*/}
                        {/*</FacebookAuth>*/}
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-facebook"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-google-plus-g"
                            }
                          />
                        </IconButton>
                      </div>
                    </CardHeader>
                    {message !== '' &&
                    <div className="lighten-4 red-text text-darken-4 container-fluid">{message}</div>}
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      {/*<CustomInput*/}
                        {/*labelText="First Name..."*/}
                        {/*id="first"*/}
                        {/*formControlProps={{*/}
                          {/*fullWidth: true*/}
                        {/*}}*/}
                        {/*inputProps={{*/}
                          {/*type: "text",*/}
                          {/*endAdornment: (*/}
                            {/*<InputAdornment position="end">*/}
                              {/*<People className={classes.inputIconsColor}/>*/}
                            {/*</InputAdornment>*/}
                          {/*)*/}
                        {/*}}*/}
                      {/*/>*/}
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
                          onChange: this.handleLoginEmail,
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
                          onChange: this.handleLoginPass,
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline className={classes.inputIconsColor}/>
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
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
