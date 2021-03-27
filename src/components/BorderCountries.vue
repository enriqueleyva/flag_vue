<template>
    <div class="container">
        <div class="row">
            <div class="col-2 offset-1 d-flex"  v-for="border in borders" 
                                :key="border">
                <br>
                <router-link :to="{name: 'detail-country', params: {id:border}}"><button type="button" class="btn btn-dark" >{{border}}</button></router-link>
            </div >
        </div>
    </div>
</template>

<script>
export default {
    props:['borders']

}
</script>

<style>

</style>