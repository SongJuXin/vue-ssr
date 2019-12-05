<template>
    <div id="">
        <router-link to="/">首页</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/hello">hello</router-link>
        <div>{{a}}</div>
        <div>{{data}}</div>
        <div>n:{{n}}</div>
        <button @click="handleClick">+1</button>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            if (typeof window !== 'undefined') {
                window.n = Math.random()
            }
            console.log('data')

            return {
                a: 11,
                data: 'data',
                n: 0
            }
        },
        created() {
            console.log('created')

        },
        methods: {
            handleClick() {
                this.n++
            }
        }
    }
</script>

<style>
body{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
