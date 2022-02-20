import axios from 'axios'

const PKapi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})

export default PKapi