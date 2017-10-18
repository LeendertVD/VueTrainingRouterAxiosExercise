import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import PostList from './PostList.vue'
import Post from './Post.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: PostList},
    { name: 'posts', path: '/posts', component: PostList},
    { name: 'comments', path: '/posts/:id/comments', component: Post},
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
