//DESTRUCTURANDO OBJETOS
const mascota={
    raza:'Salchicha',
    color:"Pardo",
    edad:3, 
    propietario:"Daniel Gutierrez"
}

const{raza,color,edad,propietario}=mascota


console.log(edad)
console.log(propietario)

//DESTRUCTURANDO ARRAYS 

const camareras=['Juanita','Carla','Michaella','Gabriela']

const[Juanita,Carla,Michaella,Gabriela]=camareras

console.log(Carla)