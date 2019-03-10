<template>
  <div id="app">
    <div>
      <router-link to="/hello">hello</router-link>
      <router-link to="/basic">basic</router-link>
      <router-link to="/myAxios">myAxios</router-link>
      <router-link to="/myRouter">myRouter</router-link>
    </div>
    <router-view :a="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      a:11234
    }
  }
}
</script>

<style>
#app {
}
div#app a.active{
  color: red;
}
</style>
