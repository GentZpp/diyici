<template>
  <div class="show">
    结果:{{n}}
  </div>
</template>

<script>
export default {
  name: 'show',
  props:["n"],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.entry{

}
</style>
