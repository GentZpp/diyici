<template>
  <div class="basic">
    <entry v-on:addevent="getN"></entry>
    <show :n="m"></show>

    <br/>
    000a:{{a}}
  </div>
</template>

<script>
// 引入组件add
import entry from '@/components/entry/entry'
import show from '@/components/show/show'
export default {
  name: 'basic',
  props:["a"],
  data () {
    return {
      m:0
    }
  },
  components: {
    entry,
    show
  },
  methods:{
    getN(n){
      this.m+=n;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.basic {

}
</style>
