<template>
  <div class="axiosShow">
    <ul>
      <li v-for="(item,i) in arr" :key="i">
        手机号:{{item.phone}}<br/>
        密码:{{item.pwd}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axiosShow',
  data () {
    return {
      //url:"http://127.0.0.1:82",
      url:"",
      arr:[]
    }
  },
  created() {
   this.getData();
  },
  methods: {
    getData(){
      axios.get(this.url+'/getData').then(data=>{
        console.log('getData data:', data)
        this.arr=data.data.arr
      }, err=>{
        console.log('getData err:', err)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.axiosShow {

}
</style>
