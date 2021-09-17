//ÁMBITO SUPERGLOBAL
//Tenemos acceso desde cualquier archivo 

//ÁMBITO GLOBAL *********************************************
//Es el contexto que engloba un mismo archivo 

//VAR 
var perro="lucas"

//LET 
let pez="tiburon"

//CONST 
//Se comporta igual que let

// console.log(perro)
 

//ÁMBITO LOCAL ***********************************************
//Es el contexto que engloba a una función

//VAR (su ámbito es local)

function saltar(){
    var gato="felino"

  
}
saltar()
//LET 
//let nos respeta el ambito local

//CONST 
//Se comporta igual que let 

function gritar(){
   let dinosaurio="era antigua"
    
  
}
gritar()

console.log(dinosaurio)

// console.log(gato)

//ÁMBITO DE BLOQUE********************************************** 
//Es el contexto que esta englobado dentro de 
// un bucle o un condicional un if  

//VAR 
//var se sale del ambito de bloque 
// no recomendado su uso

//LET 
//let no se sale del bloque 

//CONST  
//Se comporta igual que let 

let nombre="Maria"

if(nombre==="Maria"){
    var apellido="Gonzalez"
    let mascota="gato"
    // console.log(pez)
}

// console.log(mascota)