import React, { Component } from 'react';
import 'App.css';
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

class App extends Component {
  constructor(props) {
    super(props);
    }

  componentWillMount(){
    this.props.fetchUser();
  }

  render() {
    const {classes} = this.props;
    const Header = this.props.token && this.props.tokenValid ? <NavBarUser id={this.props.user_login.user} /> : <NavBar/>;
    const container = {paddingTop: 70};
    return (
      <div className={classes.main}>
        {Header}
        <div style={container} color="transparent">
          <Switch>
            <Route exact path="/" component={Home} {...this.props}/>
            {IndexRoute.map((prop, key) => {
              return <Route exact path={prop.path} key={key} component={prop.component} {...this.props}/>;
            })}
          </Switch>
        </div>
        <DefaultFooter/>
      </div>
    );
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
// todo - if logged in and refreshed redirect to dashboard
