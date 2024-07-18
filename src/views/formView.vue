<template>
  <div>
    <form action="#">
      <div class="input-container">
        
  <span class="leftIcon" ><font-awesome-icon icon="search" ></font-awesome-icon></span>
  <input type="text" class="searchField" placeholder="">
  <span class="icon iconRightOne"><font-awesome-icon class="righti" icon="camera"></font-awesome-icon></span>
  <span class="icon iconRightTwo"><font-awesome-icon icon="microphone"></font-awesome-icon></span>
</div>

    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.input-container {
  position: relative;
  display: inline-block;
}

.input-container input {
  padding-right: 75px; /* Adjust based on the icon width */
}

.input-container .icon {
  position: absolute;
  right: 25px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  pointer-events: none; /* Prevents clicking the icon */
}
.input-container .leftIcon{
  color: whitesmoke;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Prevents clicking the icon */
}
.input-container .iconRightTwo{
  right: 70px;
  color:whitesmoke;
}
.iconRightOne {
  color:whitesmoke;
  
}
.searchField{
  border-style: solid;
    border: 1px solid whitesmoke;
    width: 20vw;
    height: 40px;
    border-radius: 50px;
    background-color: #202124;
    font-size: 20px;
    color: white;
    padding: 0px 30px 0px 50px;
}

.contai{
  width: 100;
  height: 40px;
  background-color: white;

}
@media (max-width: 1080px) {
  .searchField {
    width: 40vw;

  }
}

</style>
