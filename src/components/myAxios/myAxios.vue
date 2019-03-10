<template>
  <div class="myAxios">
    手机号:<input type="text" v-model="phone"/><br/>
    密码:<input type="text" v-model="pwd"/><br/>
    <button type="button" @click="add">提交</button>
    <br/>
    <axiosShow ></axiosShow>
  </div>
</template>

<script>
import axiosShow from '@/components/axiosShow/axiosShow'
import axios from 'axios'
export default {
  name: 'myAxios',
  data () {
    return {
      msg:"myAxios",
      phone:"",
      pwd:"",
      //url:"http://127.0.0.1:82"
      url:""
    }
  },
  methods:{
    add(){
      axios.post(this.url+'/addPost',{phone:this.phone,pwd:this.pwd}).then(data=>{
        console.log('addPost data:', data)
      }).catch(err=>{
        console.log('addPost err:',err)
      })
    }
  },
  components:{
    axiosShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.basic {

}
</style>
