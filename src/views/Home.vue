<template>
    <LayoutDefault>

        
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <input type="text" v-model="search" placeholder="Search a country" class="form-control">
                </div>
                
                <div class="col-6">
                    <select class="form-select" v-model="selectedRegion" aria-label="Default select example">
                        <option v-for="region in regions" 
                                :key="region">
                                {{region}}
                        </option>
                    </select>
                </div>
            </div>
            <div v-if="filterCountries <=0">
                <div class="alert alert-info" role="alert">
                    Loading data 
                </div>
            </div>
            <br>
            <div class="row">
                    <div class="col-3"  v-for="country in filterCountries" 
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
            regions: ['','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
            search: '',
            selectedRegion: ''
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
    computed: {
        filterCountries(){
            let result = this.countries;

            if (this.search) {
                result = result.filter(e => e.name.toLowerCase() === this.search.toLowerCase())
            }

            if (this.selectedRegion) {
                result = result.filter(e => e.region === this.selectedRegion)
            }
            if (!result.length) {
                result = this.countries
            }
            return result;
        }
    }
}
</script>

<style>

</style>