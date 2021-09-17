
class Animal{
    constructor(nombre,raza){
        this.nombre=nombre; 
        this.raza=raza;
    }
    ladrar(){
        console.log('estoy ladrando')
    }
}

export const perro=new Animal('Chuchi','Carlino')

