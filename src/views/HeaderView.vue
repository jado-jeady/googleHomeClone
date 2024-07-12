<template>
    <div>
        <div class="main">
            <p>Gmail</p>
            <p>Images</p>
            <p><font-awesome-icon icon="flask"  style="font-size: 15px;"/></p>
            <p><img src="../assets/menuIcon.png" style="max-width: 20px;" alt=""></p>

            <div class="PROFILE">
                
                <img src="../../src/assets/userPhoto.jpg" style="max-width: 34px; padding: 3px 0px 0px 3px; border-radius: 50%; position:absolute;" alt="">
                <img src="../assets/LinearColor.jpg"  style=" max-width: 40px; border-radius: 50%; " alt="">
            </div>

        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    justify-content: flex-end;
    gap: 10px 20px;
    
    
}

</style>

<script>
export default {
    name:'HeaderView',

}
</script>