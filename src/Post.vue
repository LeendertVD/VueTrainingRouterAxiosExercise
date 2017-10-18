<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <h2>POST</h2>
                <h3>{{post.title}}</h3>
                <span>({{post.id}})</span>
                <p>{{post.body}}</p>
            <div>COMMENTS</div>
            <ul>
                <li v-for="comment in comments" :key="comment.id">
                    <div>{{comment.name}}</div>
                    <span>({{comment.id}})</span>
                    <p>{{comment.body}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'

function getPost(postId) {
    return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
}
function getComments(postId) {
    return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}

export default {
    props: [ 'id' ],
    data() {
        return {
            comments: [],
            post: {},
            isLoading: true,
        }
    },
    beforeRouteEnter(to, from, next) {
        /* Axios.get(`http://jsonplaceholder.typicode.com/posts/${to.params.id}/comments`)
            .then(data => next(vm => 
                { 
                    vm.comments = data.data; 
                    vm.isLoading = false; 
                    //console.log(vm.posts);
                }))
            .catch() */
        axios.all([getPost(to.params.id), getComments(to.params.id)])
            .then(axios.spread((post, comments) => next(vm => {
                vm.post = post.data; 
                vm.comments = comments.data;
                vm.isLoading = false; 
            })))
    },
    methods: {
    }
}
</script>