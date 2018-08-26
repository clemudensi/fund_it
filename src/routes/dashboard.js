import React from 'react'
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views
import DashboardPage from "views/dashboard/Dashboard.jsx";
import UserProfile from "containers/UserProfile";
import UserCampaign from "views/dashboard/UserCampaign/UserCampaignSections";

const spliLink = window.location.pathname.split('/')[2];
console.log(spliLink, 'split link', this.props);


class dashboardRoutes extends React.Component{
  routes(){
    const userId = window.location.pathname.split('/')[2];
    return(
    [
      {
        path: "/panel",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
      },
      {
        path: `/user/${userId}`,
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        component: UserProfile
      },
      {
        path: `/campaigns`,
        sidebarName: "User Campaign",
        navbarName: "UserCampaign",
        icon: Person,
        component: UserCampaign
      },
      { redirect: true, path: "/", to: "/panel", navbarName: "Redirect" },
    ]
  )

  }
}

const routes = new dashboardRoutes();
const callRoutes = routes.routes();

export default callRoutes;
