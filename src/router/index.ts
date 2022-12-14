import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import PageView from '../views/PageView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/private/DashboardView.vue'
import MyPortfoliosView from '../views/private/MyPortfoliosView.vue'
import CreatePortfoilioView from '../views/private/CreatePortfoilioView.vue'
import MyProfileView from '../views/private/MyProfileView.vue'
import PortfoliosView from '../views/PortfoliosView.vue'
import EditPortfolioView from '../views/private/EditPortfolioView.vue'
import UserPortfoliosView from '../views/private/UserPortfoliosView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsConditionsView from '../views/TermsConditionsView.vue'
import ForgotPassword from '../views/private/ForgotPasswordView.vue'
import ChangePassword from '../views/private/ChangePasswordView.vue'
import SuggestionsView from '../views/private/SuggestionsView.vue'
import Guard from '../middleware/auth'
import VerifyToken from '../middleware/verify-token'
const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'PageView',
    component: PageView
}, {
    path: '/login',
    name: 'Login',
    component: LoginView
}, {
    path: '/register',
    name: 'Register',
    component: RegisterView
}, {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: Guard.auth
}, {
    path: '/my-portfolios',
    name: 'MyPortfolios',
    component: MyPortfoliosView,
    beforeEnter: Guard.auth
}, {
    path: '/create-portfolio',
    name: 'CreatePortfolios',
    component: CreatePortfoilioView,
    beforeEnter: Guard.auth
}, {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfileView,
    beforeEnter: Guard.auth
}, {
    path: '/portfolios',
    name: 'Portfolios',
    component: PortfoliosView,
    // beforeEnter: Guard.auth
}, {
    path: '/edit-portfolio/:id',
    name: 'EditPortfolio',
    component: EditPortfolioView,
    props: true
}, {
    path: '/u/:user',
    name: 'UserPortfolios',
    component: UserPortfoliosView,
    // beforeEnter: Guard.auth,
    props: true
}, {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView
}, {
    path: '/terms-conditions',
    name: 'TermsConditions',
    component: TermsConditionsView
}, {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
}, {
    path: '/change-password/:token',
    name: 'ChangePassword',
    component: ChangePassword,
    props: true,
    beforeEnter: VerifyToken.verifyToken
}, {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
}, {
    path: '/suggestions',
    name: 'Suggestions',
    component: SuggestionsView,
    beforeEnter: Guard.auth
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;