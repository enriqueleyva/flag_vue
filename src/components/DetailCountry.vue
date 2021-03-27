<template>
    <LayoutDefault>
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <router-link :to="{name: 'home'}"><button type="button" class="btn btn-dark">Back</button></router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <img :src="country_1.flag" :alt="country_1.name" class="card-img-top" >
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-2"><h5>{{country_1.name}}</h5></div>
                    </div>
                    <div class="row">
                        <div class="col-6 ">
                            <p class="d-flex">Native name {{country_1.nativeName}}</p>
                            <p class="d-flex">Population {{country_1.population}}</p>
                            <p class="d-flex">Region {{country_1.region}}</p>
                            <p class="d-flex">Sub Region {{country_1.subregion}}</p>
                            <p class="d-flex">Capital {{country_1.capital}}</p>
                        </div>
                        <div class="col-6">
                            <p class="d-flex">Top Level Domain: {{country_1.topLevelDomain[0]}}</p>
                            <p class="d-flex">Currencies: {{country_1.currencies[0].name}}</p>
                            <p class="d-flex">Lenguajes {{country_1.languages}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <BorderCountries :borders='country_1.borders'></BorderCountries>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import CountryService from '../services'
import BorderCountries from '../components/BorderCountries'
export default {
    props: ['country'],
    name: 'DetailCountry',
    components: {LayoutDefault, BorderCountries},
    computed:{
        getAlpha3Code(){
            return this.$route.params.id
        }
    },
    data(){
        return{
            country_1: [],
        }
    },
    async mounted(){
        try {
            let response = await CountryService.getCountryByAlpha3Code(this.$route.params.id)
            console.log(response)
            this.country_1= response.data;
            
        } catch (error) {
            console.log(error)
        }
    },
    async beforeRouteUpdate(to, from, next){
        try {
            let response = await CountryService.getCountryByAlpha3Code(to.params.id)
            console.log(response)
            this.country_1= response.data;
            next()
        } catch (error) {
            next()
        }
    }
}
</script>

<style>

</style>