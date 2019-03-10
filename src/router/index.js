import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import basic from '@/components/basic/basic'
import myAxios from '@/components/myAxios/myAxios'
import myRouter from '@/components/myRouter/myRouter'
import user from '@/components/user/user'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basic',
      name: 'basic',
      component: basic
    },
    {
      path: '/myAxios',
      name: 'myAxios',
      component: myAxios
    },
    {
      path: '/myRouter',
      name: 'myRouter',
      component: myRouter,
      children:[
        {path:'user/:user/age/:age',component:user},
        {path:"user/cc",name:'cc',component:user},
        {path:'user/dd',name:'dd',component:user}
      ]
    }
  ]
})
