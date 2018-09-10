import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Business from "@material-ui/icons/VoiceChat";
// import {bindActionCreators} from "redux";
// import connect from "react-redux/es/connect/connect";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "views/UserDashboard/components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";
import axios from "axios";
import AllUsers from "./AllUsers/AllUsers";
// import fetchAdmin from "actions/admin";


class SectionPills extends React.Component {

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
              <GridItem xs={12} sm={12} md={8} lg={6}>
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
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
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

// function mapStateToProps(state) {
//   return {
//     admin_login: state.admin_login
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchAdmin}, dispatch)
// }

export default withStyles(pillsStyle)(SectionPills);
