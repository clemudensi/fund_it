import React from 'react';
// import Signup from '../views/auth/signup';
import Login from 'views/auth/Sign in';
import Signup from 'views/auth/Register'
import Dashboard from 'views/dashboard/dashboard1';
import Dash from 'views/dashboard/Dashboard';
import ResetPass from 'views/auth/reset';
import ForgotPass from 'views/auth/forgot-pass';
import LoginPage from 'views/auth/LoginPage';
import Register from 'views/auth/Register';
import CampaignPage from 'views/campaignPage/ProductPage';
import CampaignForm from 'views/campaignPage/CampaignForm';
import NavBarUser from 'views/auth/NavBarUser1';
import DashboardLayout from 'views/dashboard/DashBoardPanel'
import UserCampaign from "views/dashboard/UserCampaign/Sections/UserCampaign";
import Cloudinary from 'views/campaignPage/Cloudinary';
import Contact from "views/Contact/Contact";

let indexRoute = [
  {path: "/signup", name: "Signup", component: (props) => <Register {...props}/>},
  {path: "/register", name: "Register", component: (props) => <Signup {...props}/>},
  {path: '/login-pass', name: 'Login', component: (props) => <Login {...props}/>},
  // {path: '/user/:id', name: 'Dashboard1', component: Dashboard },
  {path: '/dash', name: 'Dashboard1', component: Dash },
  {path: '/panel', name: 'DashboardLayout', component: (props) => <DashboardLayout {...props}/> },
  {path: '/user/:id', name: 'UserProfile', component: (props) => <DashboardLayout {...props}/> },
  {path: '/navuser', name: 'NavBar User', component: NavBarUser },
  {path: '/user/campaigns', name: 'UserCampaign', component: (props) => <DashboardLayout {...props}/> },
  {path: '/reset', name: 'Reset Password', component: ResetPass},
  {path: '/forgot-pass', name: 'Forgot Password', component: ForgotPass},
  {path: '/login', name: 'Login Page', component: LoginPage},
  {path: '/campaign', name: 'Campaign Page', component: CampaignPage},
  {path: '/cloud', name: 'Cloudinary', component: Cloudinary},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/campaign-form', name: 'Create Campaign', component: CampaignForm}
];

export default indexRoute
