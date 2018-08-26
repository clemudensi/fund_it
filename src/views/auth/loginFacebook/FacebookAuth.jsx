import React, { Component } from 'react';
import axios from 'axios';
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import withStyles from "@material-ui/core/styles/withStyles";

class FacebookLogin extends Component{

  componentDidMount(){
    // Load the required SDK asynchronously for facebook, google and linkedin
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1643606585737443',
        cookie     : true,  // enable cookies to allow the server to access the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use version 2.1
      });
    };
  }

  facebookLogin = () => {
    window.FB.login(
      function(resp){
        this.registerFbUser(resp);
      }.bind(this),{ scope : 'email,public_profile' });
  }

  async registerFbUser(response){
    console.log(response, 'Login token');
    try {
      const resolve = await axios.post('/api/auth/facebook', {
        access_token: response.authResponse.accessToken
      });
      let result = await Promise.resolve(resolve);
      let token = result.headers["x-auth-token"];
      if (token) {
        window.location.replace(`/user/${result.data._id}`);
        localStorage.setItem('id_token', token)
      }
      this.fetchDataFacebook();
      console.log(result, 'inhere')
    } catch (err) {
      return err
    }
  }

  fetchDataFacebook = () => {
    console.log('Welcome!  Fetching your information.... ');

    window.FB.api('/me', 'GET', {"fields":"id,email,first_name,last_name"}, function(user) {
    });
  };

  render(){
    const { classes } = this.props;
    return(
      <div>
        <Button className={classes.socialLineButton}
                onClick={ () => this.facebookLogin() }
                size="lg" color="instagram" round>
          <i className="fab fa-facebook" />
          <b>FaceBook Sign in</b>
        </Button>
      </div>

    )
  }
}

export default withStyles(javascriptStyles)(FacebookLogin);
