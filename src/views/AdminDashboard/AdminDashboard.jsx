import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import AllUsers from "./AllUsers/AllUsers";
import UserCampaign from "./UserCampaign/UserCampaignItem";
import FundingRequest from "./FundingRequest/FundingRequest";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
});

class AdminDashboard extends React.Component {
  state = {
    value: 0,
  };

  async componentWillMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
    try{
      const res = await axios.get('https://xvtebyxo60.execute-api.us-east-1.amazonaws.com/dev/api/v1/admin/:id/dashboard');
      this.setState({ dashboard: res.data });
    }catch (error) {
      if(error.status === 401 || 304) {
        this.props.history.push("/admin/login");
      }
    }
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} style={{padding: 10}}>
        <AppBar position="static" color="inherit">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Users" />
            <Tab label="Campaign" />
            <Tab label="Funding Request" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><AllUsers/></TabContainer>
          <TabContainer dir={theme.direction}><UserCampaign /></TabContainer>
          <TabContainer dir={theme.direction}><FundingRequest/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AdminDashboard);
