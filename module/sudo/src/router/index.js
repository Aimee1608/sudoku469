import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import four from '@/pages/four.vue'
import six from '@/pages/six.vue'
import nine from '@/pages/nine.vue'
import result from '@/pages/result.vue'
import home from '@/pages/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/six',
      name: 'six',
      component: six
    },
    {
      path: '/nine',
      name: 'nine',
      component: nine
    },
    {
        path: '/result',
        name: 'result',
        component: result
    }
  ]
})
