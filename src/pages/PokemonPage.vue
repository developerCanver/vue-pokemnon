<template>
<h1 v-if="!pokemon">..Espere por favor...</h1>
<div v-else>
    <h1>¿Qué POKEMON es?</h1> 
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPm" />
    <PokemonOption  :pokemons="pokemonArr" 
            @selection="checkAnswer( $event)" />

    <template v-if="showAnswer">

        <h3 class="fade-in">{{message}}</h3>
        <button @click="newGame()">Reiniciar</button>
    </template>
</div>


</template>

<script>
import PokemonOption  from '../components/PokemonOption'
import PokemonPicture from '../components/PokemonPicture'

import getPkOptions  from '../js/getPmOptions'

export default {
    
    components:{
        PokemonOption,PokemonPicture
    },
    data(){
        return{
            pokemonArr:[],
            pokemon:null,
            showPm:false,
            message:'',
            showAnswer:false
        }
    },
    methods:{
        async mixPkA(){
            //comoes una promesa debe ir con async
            this.pokemonArr = await getPkOptions()
            //console.log(this.pokemonArr )
            const rndInt = Math.floor( Math.random()*4 )
            //numero ramdon para del 0 al 3
            //console.table(rndInt)
            //escoger un id de las 4 opciones con el index escogido
            this.pokemon = this.pokemonArr[ rndInt ]
            //console.log(this.pokemon.id)
        },
        checkAnswer(pokemon_id){
            this.showPm     = true
            this.showAnswer = true
            if (this.pokemon.id==pokemon_id) {
                this.message='Correcto, '+ this.pokemon.name
                
            }else{
                this.message='Ooops, erá '+ this.pokemon.name
            }
            //console.log(pokemon_id)
        },
        newGame(){
            this.pokemonArr = []
            this.pokemon    = null
            this.showPm     = false
            this.message    = ''
            this.showAnswer = false
             this.mixPkA()
        }

    },
    mounted(){
        this.mixPkA()
    }

}
</script>
