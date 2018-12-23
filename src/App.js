import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import IndexRoute from 'routes/index';
import withAuth from 'views/Auth/components/WithAuth';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'views/Home/HomePage';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from 'views/Auth/NavBar';
import NavBarUser from 'views/Auth/NavBarUser';
import componentsStyle from 'assets/jss/material-kit-pro-react/views/componentsStyle.jsx';
import DefaultFooter from 'views/Footer/DefaultFooter'
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from "redux";
import fetchUser from './actions/users';
import connect from 'react-redux/es/connect/connect';
import asyncComponent from "./components/asyncComponent";
import decode from "jwt-decode";
const AsyncViewCampaign = asyncComponent(() => import('views/CampaignPage/ViewCampaign/ViewCampaign'));
const AsyncFundCampaign = asyncComponent(() => import('views/CampaignPage/FundCampaign/FundCampaign'));
const AsyncAllCampaigns = asyncComponent(() => import('views/CampaignPage/AllCampaign/AllCampaign'));
const AsyncViewFundingRequest = asyncComponent(() => import('views/AdminDashboard/FundingRequest/ViewFundingRequest'));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show_profile: false,
      user_login: {
        _id: ''
      },
      profile: {
        profile_image: ''
      }
    };
  }

  componentWillMount(){
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
   try {
     if(nextProps.user_login !== this.props.user_login) {
       this.setState({user_login: nextProps.user_login[0]});
       this.setState({ profile: nextProps.user_login[0].dashboard_info[0].user})
     }
   } catch (err) {
     return err
   }
  };

  render() {
    const token = localStorage.getItem('id_token')
    if (token) {
      const decoded = decode(localStorage.getItem('id_token'));
      const {token, tokenValid, classes } = this.props;
      const { user_login, profile } = this.state;
      const Header = token && tokenValid ? <NavBarUser id={decoded._id} profile_image={profile.profile_image}/> : <NavBar/>;
      const container = {paddingTop: 70};
      return (
        <div className={classes.main}>
          {Header}
          <div style={container} color="transparent">
            <Switch>
              <Route exact path="/" component={Home} userId={decoded._id} />
              <Route exact path="/campaigns" render={(props)=> <AsyncAllCampaigns user_id={decoded._id} {...props}/>} />
              <Route exact path="/campaign/:id" render={(props)=> <AsyncViewCampaign user_id={decoded._id} {...props}/>} />
              <Route exact path="/campaign/:id/funds-request" render={(props)=> <AsyncViewFundingRequest user_id={decoded._id} {...props}/>} />
              <Route exact path="/campaign/:id/fund/:type"
                     render={(props)=> <AsyncFundCampaign
                       user_id={decoded._id} email={decoded.local.email} {...props}/>} />
              {IndexRoute.map((prop, key) => {
                return <Route exact path={prop.path} key={key} component={prop.component} userId={decoded._id}/>;
              })}
            </Switch>
          </div>
          <DefaultFooter/>
        </div>
      );
    }
    else {
      const { classes } = this.props;
      const Header = <NavBar/>;
      const container = {paddingTop: 70};
      return (
        <div className={classes.main}>
          {Header}
          <div style={container} color="transparent">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campaigns" render={(props)=> <AsyncAllCampaigns {...props}/>} />
              <Route exact path="/campaign/:id" render={(props)=> <AsyncViewCampaign {...props}/>} />
              <Route exact path="/campaign/:id/funds-request" render={(props)=> <AsyncViewFundingRequest {...props}/>} />
              <Route exact path="/campaign/:id/fund/:type" render={(props)=> <AsyncFundCampaign {...props}/>} />
              {IndexRoute.map((prop, key) => {
                return <Route exact path={prop.path} key={key} component={prop.component} />;
              })}
            </Switch>
          </div>
          <DefaultFooter/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user_login: state.user_login
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}


export default withRouter(withAuth(connect(mapStateToProps, mapDispatchToProps)(withStyles(componentsStyle)(App))));


//todo - Adding of react pop-up package
// todo - if logged in and refreshed redirect to UserDashboard
