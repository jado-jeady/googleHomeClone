<template>
    <div class="main">
      <button class="btns" type="button">Google Serach</button>
      <button class="btns" type="button">I'm Feeling Lucky</button>
    </div>


</template>
<script>
export default {
  name:'searchBtnsVue'
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
</style>