<template>
    <div class="row ">
        <div class="col-12">
            <div class="card " >
            <img :src="country.flag" :alt="country.name" class="card-img-top ">
            <div class="card-body">

                <router-link :to="{name: 'detail-country', params: {id:country.alpha3Code}}"><h5 class="card-title">{{country.name}}</h5></router-link>
                <p>Population: {{country.population}}</p>
                <p>Region: {{country.region}}</p>
                <p>Capital: {{country.capital}}</p>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>

export default {
    props: ['country'],
    name: 'Country',
}
</script>

<style scoped>

    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }
    h5{
        font-weight: bold;
        text-decoration: none;
    }
</style>