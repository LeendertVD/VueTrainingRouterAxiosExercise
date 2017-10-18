<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <router-link :to="{ name: 'comments', params: { id: post.id } }"><h3>{{post.title}}</h3></router-link>
                    <span>{{post.id}}</span>
                    <p>
                        {{post.body}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
            isLoading: true,
        }
    },
    beforeRouteEnter(to, from, next) {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(data => next(vm => 
                { 
                    vm.posts = data.data;
                    vm.isLoading = false;
                    //console.log(vm.posts);
                }))
            .catch()
    }
}
</script>