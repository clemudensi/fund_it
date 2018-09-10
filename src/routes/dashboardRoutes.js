import DashboardLayout from "../views/Unused/DashBoardPanel";
import UserCampaign from "../views/UserDashboard/UserCampaign/Sections/UserCampaign";
import UserProfile from "../views/UserDashboard/UserProfile/UserProfile";

let dashboard = [
  {path: '/panel', name: 'DashboardLayout', component: DashboardLayout },
  {path: '/user/:id', name: 'UserProfile', component: UserProfile },
  {path: '/panel/campaigner', name: 'UserCampaign', component: UserCampaign },
]

export default dashboard
