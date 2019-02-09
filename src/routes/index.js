import Loadable from 'react-loadable';
import asyncComponent from 'components/asyncComponent'
import  Timer from 'views/CampaignPage/components/CampaignCountDown'
import {MyLoadingComponent} from 'components/loadingComponent'

const AsyncUserDashboard = asyncComponent(() => import('views/UserDashboard/UserDashboard'));
const AsyncAdminSignUp = asyncComponent(() => import('views/Auth/AdminSignUp'));
const AsyncReset = asyncComponent(() => import('views/Auth/reset'));
const AsyncForgotPass = asyncComponent(() => import('views/Auth/forgot-pass'));
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
const AsyncHowItWorks = Loadable({
  loader: () => import('views/Resources/HowItWorks/HowItWorks'),
  loading: MyLoadingComponent
});

const AsyncNotFound = Loadable({
  loader: () => import('views/NotFound/NotFound'),
  loading: MyLoadingComponent
});

const AsyncEquity = Loadable({
  loader: () => import('views/Resources/Equity/Equity'),
  loading: MyLoadingComponent
});

const AsyncFees = Loadable({
  loader: () => import('views/Resources/Fees/Fees'),
  loading: MyLoadingComponent
});

const AsyncResourceCenter = Loadable({
  loader: () => import('views/Resources/ResourceCenter/Resources'),
  loading: MyLoadingComponent
});

const AsyncAboutUs = Loadable({
  loader: () => import('views/Resources/About/AboutUs'),
  loading: MyLoadingComponent
});

const AsyncStartCamapign = Loadable({
  loader: () => import('views/Resources/Start-a-Campaign/Start-a-Campaign'),
  loading: MyLoadingComponent
});

// const AsyncEquity = Loadable({
//   loader: () => import('views/Resources/Equity/Equity'),
//   loading: MyLoadingComponent
// });

let indexRoute = [
  {path: '/user/:id/dashboard', name: 'Dashboard', component: AsyncUserDashboard },
  {path: '/admin/:id/dashboard', name: 'Admin Dashboard', component: AsyncAdminDashboard },
  {path: '/admin/signup', name: 'Admin SignUp', component: AsyncAdminSignUp},
  {path: '/admin/login', name: 'Admin Login', component: AsyncAdminLogin},
  {path: '/reset', name: 'Reset Password', component: AsyncReset},
  {path: '/forgot-pass', name: 'Forgot Password', component: AsyncForgotPass},
  {path: '/resources/how-it-works', name: 'How It Works', component: AsyncHowItWorks},
  {path: '/resources/fees', name: 'How It Works', component: AsyncFees},
  {path: '/resources/center', name: 'Resources', component: AsyncResourceCenter},
  {path: '/resources/apply-for-equity', name: 'Equity', component: AsyncEquity},
  {path: '/policy', name: 'Policy', component: AsyncPolicy},
  // {path: '/equity', name: 'Equity', component: AsyncPolicy},
  {path: '/about', name: 'About', component: AsyncAboutUs},
  {path: '/start-campaign', name: 'Start Campaign', component: AsyncStartCamapign},
  {path: '/contact', name: 'Contact', component: AsyncContact},
  {path: '/faq', name: 'Contact', component: AsyncFAQ},
  {path: '/timer', name: 'Timer', component: Timer},
  {path: '', name: 'Not Found', component: AsyncNotFound}
];

export default indexRoute
