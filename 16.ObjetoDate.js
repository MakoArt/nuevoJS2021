let time=new Date()

//dia del mes en numero 
console.log(time.getDate())
//dia de la semana en numero 
console.log(time.getDay())
//numero del mes 
console.log(time.getMonth())
//año en numero 
console.log(time.getFullYear())
//hora actual en primer parametro de la hora 
console.log(time.getHours())
//minutos actuales 
console.log(time.getMinutes())
//segundos actuales 
console.log(time.getSeconds())
//coge los milisegundos 
console.log(time.getMilliseconds())
//fecha en formato string //10:07:19 GMT+0200(hora de verano de Europa Central)
console.log(time.toString())
//fecha en string wed Jun 02 2021
console.log(time.toDateString())
//fecha local en string 
console.log(time.toDateString())                                                                                                                                                                 
//time to local string  
// 2/6/2021 11:33:10
console.log(time.toLocaleString())
//Convierte time a string  la hora usando la actual especificación local 
//11:33:53
console.log(time.toLocaleTimeString())
//Convierte time a string usando la espeficicacion local pero la fecha
//2/6/2021
console.log(time.toLocaleDateString())
//Coge la diferencia en minutos entre el tiempo local de la computadora
//y las coordenadas universales(UTC)
console.log(time.getTimezoneOffset());
//Coge el dia del mes usando las coordenadas universales(UTC)
console.log(time.getUTCDate());
//Coge las horas valor in un objeto time usando 
//las coordenadas de tiempo
console.log(time.getUTCHours());


const hora=document.createElement('h1')
document.body.appendChild(hora)

hora.textContent ='La fecha de hoy es' + time.getDate() +'/'+(time.getMonth()+1)+'/'+time.getFullYear()