<template>
    <LayoutDefault>
        <div class="container">
            <div class="row">
                    <div class="col-3"  v-for="country in countries" 
                                :key="country.name">
                    <div >
                        <Country :country='country'></Country>
                    </div>
                </div>
               
                
            </div>
        </div>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import CountryService from '../services'
import Country from '../components/Country'

export default {
    name: "Home",
    components: {LayoutDefault, Country},
    data(){
        return{
            countries: [],
        }
    },
    methods:{},
    async mounted(){
        try {
            let response = await CountryService.getCountries()
            console.log(response)
            this.countries = response.data;
        } catch (error) {
            console.log(error)
        }
    },
}
</script>

<style>

</style>