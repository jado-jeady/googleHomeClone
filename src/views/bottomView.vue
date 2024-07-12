<template>
    <div class="container">
        <div class="footer topFotter">
            Rwanda
        </div>
        <div class="footer bottomFooter">
            <a href="#">About</a>
            <a href="#">Advitising</a>
            <a href="#">Business</a>
            <a href="#" class="">How Serach Work</a>
            <i class="thisItem"></i>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>

        </div>
    </div>
</template>

<script>
export default {
    name: 'bottomView'
}
</script>

<style scoped>
.footer{

    
}
.thisItem{
    flex-grow: 1;
}
.topFotter{
    bottom: 0;
    color: whitesmoke;
    width: 97%;
    height: 6vh;
    background-color: #171717;
    border-collapse: collapse;
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: white;
    border-spacing: 0px;
    display: flex;
    align-content: center;
    align-items: center;
    padding: 0px 0px 0px 3vw;
    font-size: smaller;

}
.bottomFooter{
    bottom: 0;
    color: rgb(146, 77, 77);
    width: 95%;
    height: 6vh;
    background-color: #171717;

    display: flex;
    align-content: center;
    align-items: center;
    padding: 0px 2vw 0px 3vw;
    font: small tahoma;
    gap: 10px;

}
.bottomFooter a{
    color: whitesmoke;
    text-decoration: none;
}
.container{
    background-color: #e6e1ec;
    color: whitesmoke;
    width: 100vw;
    height: 12vh;
    left: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 1px;
    
    
    

}
</style>