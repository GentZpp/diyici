<template>
  <div class="entry">
    <input type="number" v-model.number="n" />
    <button type="button" @click="add(n)">每次加{{n}}</button>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data () {
    return {
      n:1
    }
  },
  methods:{
    add(n){
      this.$emit('addevent',n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.entry{
  padding: 5px;
}
</style>
