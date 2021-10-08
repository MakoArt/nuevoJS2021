//OPERADORES DE COMPARACIÓN

//1. <   menor que 
//2. >   mayor que
//3. >=  mayor o igual que 
//4. <=  menor o igual que
//5. ==  igual que (igual valor)
//6. === estrictamente igual que (igual el valor y tipo de dato)
//7. !=  diferente que (distinto valor)
//8. !== estrictamente diferente que( distinto valor y tipo de dato)

let edadMaria=37; 
let edadJose='37';
let edadAntonio=14;
let edadCarmen=15; 
let edadCasimiro=36;

if(edadMaria===edadJose){
    console.log('tenemos la misma edad')
}else{
    console.log('no tenemos la misma edad')
}

//OPERADORES ARITMETICOS 

console.log(3+5)//suma 
console.log(56-34)//resta 
console.log(3*56)//multiplicación 
console.log(5/2)//operacion de división 
console.log(10%2)//operador de modulo o resto


//OPERADORES LÓGICOS 
// ! operador de negación 
// &&  operador and o y  
// || operador or  o   ó 

let nombre="Maria"; 
let nombreMascota="Pipe"; 


if(!nombreMascota){
    console.log(`La mascota tiene nombre y 
    su nombre es ${nombreMascota}`)
}else{
    console.log(`La mascota no tiene nombre`)
}


let nombreMujer="Carla"
let edadMujer ='27'
let estadoMujer='soltera'
let isMujer=true


if(nombreMujer=="Carla" && e  ){
    console.log('Se cumple la condición')
}else{
    console.log('No se cumple la condición ') 
}