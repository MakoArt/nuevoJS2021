let numbers=new Set([1,2,3,4,5,6,7,8,9])

let iterador=numbers[Symbol.iterator]()

//nos va a dar dos valores en consola uno 
//es el indice del set y el otro es el done 
//que me devolvera true si la lista a terminado 
//o false si la lista no ha terminado 

console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
