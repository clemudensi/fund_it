import React, { Component } from 'react';
import 'App.css';
import {Route, Switch} from 'react-router-dom';
import classNames from "classnames";
import IndexRoute from 'routes/index';
import withAuth from 'views/auth/components/WithAuth';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from "views/home/SectionsPage";
import withStyles from "@material-ui/core/styles/withStyles";
import NavBar from 'views/auth/NavBar';
import NavBarUser from 'views/auth/NavBarUser';
import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import DefaultFooter from 'views/home/Sections/DefaultFooter'

class App extends Component {

    render() {
      console.log(this.props, 'All props of App')
      const {classes} = this.props;
      const Header = this.props.tokenValid ? <NavBarUser/> : <NavBar/>;
      const container = {paddingTop: 70};
      return (
        <div className={classes.main}>
          {Header}
          <div style={container} color="transparent">
            <Switch>
              <Route exact path="/" component={Home} {...this.props}/>
              {IndexRoute.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} {...this.props}/>;
              })}
            </Switch>
          </div>
          <DefaultFooter/>
        </div>
      );
    }
}

export default withAuth(withStyles(componentsStyle)(App));


//todo - Adding of react pop-up package
// todo - if logged in and refreshed redirect to dashboard
