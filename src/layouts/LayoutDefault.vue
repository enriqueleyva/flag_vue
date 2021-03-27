<template>
    <div class="LayoutDefault">
        <Header></Header>
        <main>
            <slot/>
        </main>
        
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    name: 'LayoutDefault',
    components: {Header},
    data(){
        return{}
    },
    methods:{}
}
</script>

<style>

</style>