//dependecia
//comonjs, module

const request = require('request')
// direccion de la api endpoint
const url='https://narutodb.xyz/api/character'
//hacer operacion asincrono
let r = request(url, 
                {json:true} ,
                (error, reqpuesta, body)=>{
                    let character =body.characters
                    character.forEach(character => {
                        console.log (character.name)
                        console.log("----------------------------")
                        
                    });
                }

                )