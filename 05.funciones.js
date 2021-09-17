//Funciones declaradas 
//Funciones expresadas 
//Funciones flecha 
//Funciones autoejecutables anonimas autoejecutables 

//En las funciones declaradas existe el efecto 
//hoisting o elevación por ello nos permite 
//llamar a la función antes de escribir esta 


//clasica anonima autoejecutable 
//arriba de todas las otras funciones 

// (function(){

//     console.log('buenas madrugadas')

// })()

//funcion moderna anonima autoejecutable 
//arriba de todas las otras funciones
(()=>{
   console.log('bien')
})()

//funcion clasica anonima autoejecutable 



saludo('Javier','Rodriguez')

function saludo(nombre,apellido){
console.log(`Mi nombre es ${nombre} ${apellido}`)
}

//FUNCIONES EXPRESADAS *********************
//no existe el efecto hoisting o elevación 
//por lo que debo de llamar a la función depués 
//de escribirla y no antes 


const saltar=function(){
  console.log('Estoy saltando')
}
saltar()

//FUNCIONES FLECHA **************************

const suma=(numero1,numero2)=> console.log(numero1+numero2)
   
 
suma(9,3)




//FUNCIONES AUTOEJECUTABLES  Y 
//FUNCIONES ANÓNIMAS AUTOEJECUTABLES 

//función autoejecutable  clasica

const saludo2=(function(){
    console.log('buenas noches')
})()

//funcion moderna autoejecutable 

const saludo3=(()=>{
    console.log('buenas tardes')
})()

