import React from 'react';
import Loadable from 'react-loadable';
import asyncComponent from 'components/asyncComponent'
import {MyLoadingComponent} from 'components/loadingComponent'

const AsyncDashboard = asyncComponent(() => import('views/dashboard/UserDashboard'));
const AsyncReset = asyncComponent(() => import('views/Auth/reset'));
const AsyncForgotPass = asyncComponent(() => import('views/Auth/forgot-pass'));
const AsyncCampaignPage = asyncComponent(() => import('views/CampaignPage/ViewCampaign'));
const AsyncAllCampaigns = asyncComponent(() => import('views/CampaignPage/AllCampaign'));

const AsyncContact = Loadable({
  loader: () => import('views/Contact/Contact'),
  loading: MyLoadingComponent
});
const AsyncFAQ = asyncComponent(() => import('views/FAQ/FAQ'));

let indexRoute = [
  {path: '/user/:id/dashboard', name: 'Dashboard', component: (props) => <AsyncDashboard {...props}/> },
  {path: '/reset', name: 'Reset Password', component: AsyncReset},
  {path: '/forgot-pass', name: 'Forgot Password', component: AsyncForgotPass},
  {path: '/campaign/:id', name: 'Campaign Page', component: AsyncCampaignPage},
  {path: '/campaigns', name: 'Campaign Page', component: AsyncAllCampaigns},
  {path: '/contact', name: 'Contact', component: AsyncContact},
  {path: '/faq', name: 'Contact', component: AsyncFAQ},
];

export default indexRoute
