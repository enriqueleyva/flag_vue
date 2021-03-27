import axios from 'axios'

const api = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default{
    getCountries(){
        return api.get('/all');
    },
    getCountryByAlpha3Code( code){
        return api.get(`alpha/${code}`)
    }
    
}