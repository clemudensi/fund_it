import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Lock from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import LocalAuthService from './components/LocalAuthService';
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: '',
      confirmPassword: '',
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
    return this.setState({ password: e.target.value });
  };

  handleConfirmPassword = (e) => {
    return this.setState({ confirmPassword: e.target.value });
  }

  handleFormSubmit = async e =>{
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    try {
      const res = await this.Auth.signup(firstName, lastName, email, password);
      if( res.data.token){
        this.props.history.replace('/dashboard');
      }
    }catch (error) {
      if(this.state.isMounted) {
        this.setState({message: error.response.data.msg})
      }
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
    const { firstName, lastName, email, password, confirmPassword, message } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {/*<Header*/}
          {/*fixed*/}
          {/*color="transparent"*/}
          {/*brand="Clem's Exchange"*/}
          {/*rightLinks={<HeaderLinks />}*/}
          {/*changeColorOnScroll={{*/}
            {/*height: 50,*/}
            {/*color: "white"*/}
          {/*}}*/}
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
                      <h4>Register</h4>
                      <div className={classes.socialLine}>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-twitter"}
                          />
                        </IconButton>
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
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          value: firstName,
                          onChange: this.handleFirstName,
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
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
