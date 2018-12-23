import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Business from "@material-ui/icons/VoiceChat";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "views/UserDashboard/components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";
import axios from "axios";
import AllUsers from "./AllUsers/AllUsers";
import UserCampaign from "./UserCampaign/UserCampaignItem";
// import fetchAdmin from "actions/admin";


class AdminDashboard extends React.Component {

  async componentWillMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
    try{
      const res = await axios.get('/api/v1/admin/:id/dashboard');
      this.setState({ dashboard: res.data });
    }catch (error) {
      if(error.response.status === 401 || 304) {
        this.props.history.push("/admin/login");
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>Admin Dashboard</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  tabs={[
                    {
                      tabButton: "All Users",
                      tabIcon: Dashboard,
                      tabContent: (
                        <AllUsers/>
                      )
                    },
                    {
                      tabButton: "User Campaign",
                      tabIcon: Business,
                      tabContent: (
                        <span>
                          <UserCampaign />
                        </span>
                      )
                    },
                    {
                      tabButton: "Funding Request",
                      tabIcon: AttachMoney,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(AdminDashboard);
