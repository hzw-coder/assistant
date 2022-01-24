import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import( /* webpackChunkName: "Home" */ '../views/Home.vue')
const Customer = () => import( /* webpackChunkName: "Customer" */ '../views/Customer/Customer.vue')
const AddCustomer = () => import( /* webpackChunkName: "Addcustomer" */ '../views/AddCustomer/AddCustomer.vue')
const SelectPotential = () => import( /* webpackChunkName: "Selectpotential" */ '../views/SelectPotential/SelectPotential.vue')
const Transfer = () => import( /* webpackChunkName: "Transfer" */ '../views/Transfer/Transfer.vue')
const Distribution = () => import( /* webpackChunkName: "Distribution" */ '../views/Distribution/Distribution.vue')
const Default = () => import( /* webpackChunkName: "Default" */ '../views/Default/Default.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/selectpotential',
    name: 'SelectPotential',
    component: SelectPotential
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/distribution',
    name: 'Distribution',
    component: Distribution
  },
  {
    path: '/default',
    name: "Default",
    component: Default
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router