import Vue from 'vue'
import Router from 'vue-router'
//懒加载
const lazyload = (name) => (resolve) => require([`@/components/${name}`], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component:lazyload("hello")
    },{
  path: '/index/questions',
  name: 'questions',
  component: lazyload('questions'),

},{
  path: '/*',
  name: 'error',
  component: lazyload('error'),

}
  ]
})

