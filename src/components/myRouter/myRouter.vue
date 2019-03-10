<template>
  <div class="myRouter">
    <router-link to="/myRouter/user/aa/age/20">动态路由aa</router-link>
    <router-link to="/myRouter/user/bb/age/10">动态路由bb</router-link>
    <router-link :to="{name:'cc',params:{user:'cc',age:30}}">params cc</router-link>
    <router-link :to="{path:'/myRouter/user/dd',query:{user:'dd',age:40}}">query dd</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myRouter',
  data () {
    return {
      msg: 'myRouter'
    }
  },
  created() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.user {

}
</style>
