<template>
    <div class="main">
      <button class="btns" @click="search" type="button">Google Serach </button>
      <button class="btns" type="button">I'm Feeling Lucky</button>
      
    </div>
    
<p>Google Offered in : <a href="#">Francais</a> &nbsp; <a href="#">Francais</a> &nbsp;<a href="#">Francais</a></p>
    <ul>
      <li v-for="result in results" :key="result.FirstURL">
        <a :href="result.FirstURL" target="_blank">{{ result.Text }}</a>
      </li>
    </ul>



</template>
<script>
import axios from 'axios';
export default {
  name:'searchBtnsVue',
  props:['query'],
  data(){
    return {
      results:[]

    }

    },
    methods: {
  async search() {
    if (this.query.length < 3) {
      this.results = [];
      return;
    }
    try {
      const response = await axios.get('https://api.duckduckgo.com/', {
        params: {
          pretty: 1,
          q: this.query,
          format: 'json'
        }
      });

      if (response.data.RelatedTopics) {
        this.results = response.data.RelatedTopics.map(topic => ({
          Text: topic.Text,
          FirstURL: topic.FirstURL
        }));
      } else {
        console.error('No RelatedTopics found in response');
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

  }
}

  }

</script>
<style>

.container{
  display: flex;

}
.main .btns{
border-collapse: collapse;
max-width: fit-content;
background-color: aliceblue;
height: 4vh;
background-color:#303134;
border: none;
margin: 10px;
font-weight: bold;
border-radius: 4px;
color: whitesmoke;
padding: 10px 10px 16px 10px;
text-align: center;
cursor: pointer;
font-size: smaller;

}
ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 0px 20vw;
  gap: 10px;
  background-color: lavender;
  width: 60vw;
  justify-content: center;
  

}
ul li{
  
  display: flex;
  color: rgb(62, 151, 224);
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  

}
</style>