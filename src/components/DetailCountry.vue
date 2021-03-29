<template>
    <LayoutDefault>
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <router-link :to="{name: 'home'}"><button type="button" class="btn btn-dark float-start" :style="{margin:'0px'}">Back</button></router-link>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-6">
                    <img :src="country_1.flag" :alt="country_1.name" class="card-img-top" >
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-2 d-flex" ><h5>{{country_1.name}}</h5></div>
                    </div>
                    <div class="row">
                        <div class="col-6 ">
                            <p class="d-flex">Native name: {{country_1.nativeName}}</p>
                            <p class="d-flex">Population: {{country_1.population}}</p>
                            <p class="d-flex">Region: {{country_1.region}}</p>
                            <p class="d-flex">Sub Region: {{country_1.subregion}}</p>
                            <p class="d-flex">Capital: {{country_1.capital}}</p>
                        </div>
                        <div class="col-6">
                            <p class="d-flex" v-for="top in country_1.topLevelDomain" :key="top">Top Level Domain: {{top}}</p>
                            <p class="d-flex" v-for="curr in country_1.currencies" :key="curr.name">Currencies: {{curr.name}}</p>
                            <p class="d-flex" >Languages: </p>
                            <ul v-for="c in country_1.languages" :key="c.name">
                                <li>{{c.name}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <BorderCountries :borders='country_1.borders'></BorderCountries>
                        </div>
                    </div>
                    <div class="row" v-if="!country_1.borders.length">
                        <div class="col">
                            <h3>There is no borders with this country</h3>
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
            this.country_1= response.data;
            
        } catch (error) {
            console.log(error)
        }
    },
    async beforeRouteUpdate(to, from, next){
        try {
            let response = await CountryService.getCountryByAlpha3Code(to.params.id)
            this.country_1= response.data;
            next()
        } catch (error) {
            next()
        }
    }
}
</script>

<style>
    ul,li{
        list-style: none;
    }
</style>