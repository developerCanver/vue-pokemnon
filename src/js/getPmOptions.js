import PKapi from '../api/PKapi'
const getPk=()=>{
    //cerar un arreglo con 650 numeos
    const pokemonArr=Array.from(Array(650))
    return pokemonArr.map( ( _ , index ) => index+1)
}

const getPkOptions = async()=>{
    //traer los arreglos y desordernaros
    const mixedPk=getPk()
                .sort( ()=> Math.random() - 0.5 )
  //  console.log(mixedPk)

    //enviar los cuatro numeros primeros 
    const pokemos = await  getPkName( mixedPk.splice(0,4) )
   
 //  console.table(pokemos)
    return pokemos

}

const getPkName = async ( [a,b,c,d] = [] )=>{
    //const resp =await PKapi.get(`/1`)
    //console.log(resp.data.name)
  // console.log(a,b,c,d)
    const arrPromises=[
        PKapi.get(`/${ a }`),
        PKapi.get(`/${ b }`),
        PKapi.get(`/${ c }`),
        PKapi.get(`/${ d }`),
    ]
    const [ p1,p2,p3,p4 ] = await  Promise.all(arrPromises)
    return [
        { name: p1.data.name, id: p1.data.id},
        { name: p2.data.name, id: p2.data.id},
        { name: p3.data.name, id: p3.data.id},
        { name: p4.data.name, id: p4.data.id},
    ]
   // console.log(resps)
} 
export default getPkOptions