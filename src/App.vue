<template>
  <div class="main">
    <HeaderViewVue></HeaderViewVue>
<div style="height: 20vh;">

</div>
    <h1 class="googleText">Google </h1>
<form-view @receiveData="getQuery" />
<searchBtns :query="query" />





<bottomView />
  </div>
</template>

<script>
import formView from './views/formView.vue'
import HeaderViewVue from './views/HeaderView.vue'
import searchBtns from './views/searchBtns.vue'
import bottomView from './views/bottomView.vue'

export default {
  components:{
    formView,searchBtns,HeaderViewVue,bottomView
  },
  data(){
    return{
      query:''
    }
  },
  methods:{
    getQuery(data){
      this.query=data
    }
   
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color:#202124;
  padding: 0;
  margin: 0;
  
}
p{
  color: whitesmoke;
  font-size: 0.7em;
  letter-spacing: 0.5px;

}
p a{
  text-decoration: none;
  color: rgb(103, 172, 230)
  
}
.googleText{
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 3em;
  
}

</style>
