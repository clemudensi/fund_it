import React from 'react';
import Loadable from 'react-loadable';
import asyncComponent from 'components/asyncComponent'
import {MyLoadingComponent} from 'components/loadingComponent'

const AsyncUserDashboard = asyncComponent(() => import('views/UserDashboard/UserDashboard'));
const AsyncAdminSignUp = asyncComponent(() => import('views/Auth/AdminSignUp'));
const AsyncReset = asyncComponent(() => import('views/Auth/reset'));
const AsyncForgotPass = asyncComponent(() => import('views/Auth/forgot-pass'));
const AsyncCampaignPage = asyncComponent(() => import('views/CampaignPage/ViewCampaign'));
const AsyncAllCampaigns = asyncComponent(() => import('views/CampaignPage/AllCampaign'));
const AsyncFAQ = asyncComponent(() => import('views/FAQ/FAQ'));

const AsyncAdminLogin = Loadable({
  loader: () => import('views/Auth/AdminLogin'),
  loading: MyLoadingComponent
});
const AsyncContact = Loadable({
  loader: () => import('views/Contact/Contact'),
  loading: MyLoadingComponent
});
const AsyncPolicy = Loadable({
  loader: () => import('views/Policy/Policy'),
  loading: MyLoadingComponent
});
const AsyncAdminDashboard = Loadable({
  loader: () => import('views/AdminDashboard/AdminDashboard'),
  loading: MyLoadingComponent
});

let indexRoute = [
  {path: '/user/:id/dashboard', name: 'Dashboard', component: (props) => <AsyncUserDashboard {...props}/> },
  {path: '/admin/:id/dashboard', name: 'Dashboard', component: (props) => <AsyncAdminDashboard {...props}/> },
  {path: '/admin/signup', name: 'Admin SignUp', component: AsyncAdminSignUp},
  {path: '/admin/login', name: 'Admin Login', component: AsyncAdminLogin},
  {path: '/reset', name: 'Reset Password', component: AsyncReset},
  {path: '/forgot-pass', name: 'Forgot Password', component: AsyncForgotPass},
  {path: '/campaign/:id', name: 'Campaign Page', component: AsyncCampaignPage},
  {path: '/campaigns', name: 'Campaign Page', component: AsyncAllCampaigns},
  {path: '/policy', name: 'Policy', component: AsyncPolicy},
  {path: '/contact', name: 'Contact', component: AsyncContact},
  {path: '/faq', name: 'Contact', component: AsyncFAQ},
];

export default indexRoute
