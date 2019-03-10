<template>
  <div class="user">
   <div v-show="$route.params.user">
     姓名:{{$route.params.user}}<br/>
      年龄:{{$route.params.age}}
   </div>
   <div v-show="$route.query.user">
     姓名:{{$route.query.user}}<br/>
      年龄:{{$route.query.age}}
   </div>

  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.user {

}
</style>
