import HomeIndex from '../pages/home'
import BlogIndex from '../pages/detail'
import LoadableComponent from '../components/loadable'

export default [
  {
    name: 'home',
    path: '/home',
    component: HomeIndex,
  },
  {
    name: 'detail',
    path: '/detail',
    component: BlogIndex,
  },
  {
    name: 'async-page',
    path: '/async-page',
    component: LoadableComponent(() => import('../pages/async-page')),
  },
]
