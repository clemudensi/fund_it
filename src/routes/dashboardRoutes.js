import DashboardLayout from "../views/dashboard/DashBoardPanel";
import UserCampaign from "../views/dashboard/UserCampaign/Sections/UserCampaign";
import UserProfile from "../views/dashboard/UserProfile/UserProfile";

let dashboard = [
  {path: '/panel', name: 'DashboardLayout', component: DashboardLayout },
  {path: '/user/:id', name: 'UserProfile', component: UserProfile },
  {path: '/panel/campaigner', name: 'UserCampaign', component: UserCampaign },
]

export default dashboard
