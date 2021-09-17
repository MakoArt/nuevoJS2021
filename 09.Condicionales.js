//if(si)  - else (y si noo) 
//******************************* */
// let isCold=true; 

// if(isCold){
//   console.log('Me podre el abrigo')
// }else{
//   console.log('Saldré en manga corta')
// }


//if(si)    else-if(y sino sí)    else(si nooo) 
//***************************************************** */
// let oferta; 
// let hora=12; 

// if(hora>=8 && hora<=10){
//     console.log('El cafe esta en oferta')
// }else if(hora>10 && hora<=12){
//     console.log('Las tostadas esta en oferta')
// }else if(hora>12 && hora<=14){
//     console.log('La cerveza esta en oferta')
// }else if(hora>14 && hora<=16){
//     console.log('los menús estan en oferta')
// }else if(hora>16 && hora<=23.59){
//     console.log('Tenemos clases de billar en oferta')
// }else{
//     console.log('Tenemos masajes en oferta')
// }

//CONDICIONAL TERNARIO (Forma de simplificar un condicional simple)

let oferta; 
let hora=18; 

hora>=8 && hora<=10 ? console.log('El café esta en oferta'):console.log('El café ¡¡¡NO!!! esta en oferta')
hora>10 && hora<=12 ? console.log('Las tostadas estan en oferta') : console.log('Las tostadas ¡¡¡NOOO!!! estan en oferta')
hora>12 && hora <=14? console.log('La cerveza está en oferta'): console.log('La cerveza ¡¡¡¡NO!!! esta en oferta')
hora>14 && hora <=16? console.log('Los menús estan en oferta'):console.log('Los menus ¡¡¡¡NO!!! estan en oferta')
hora>16 && hora <=23.59 ? console.log('Tenemos clases de billar en oferta') : console.log(' ¡¡¡¡NO!!! tenemos clases')
hora>0 && hora<8 ? console.log('Tenemos masajes en oferta') : console.log('¡¡¡¡NO!!! tenemos masajes en oferta')


//SWITCH CASE  

let edad=20;

switch(edad){

    case 18: 
       console.log('Eres apto para el nivel 5')
    break;
    case 19: 
       console.log('Eres apto para el nivel 6')
    break;
    case 20: 
       console.log("Eres apto para el nivel 7")
    break;
    case 21: 
        console.log("Eres apto para el primer nivel")
    break;
    default: 
         console.log("no eres apto para el puesto")




}