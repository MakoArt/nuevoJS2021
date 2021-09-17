//son como arrays pero no nos permiten repetir datos 

let mochila=new Set(['linterna',
                     'libro',
                     'cuchillo',
                     'lata sardinas'
                   ])

//comprobar si un elemento se encuentra dentro 
//del set 

console.log(mochila.has('naranja'))

//Eliminamos elementos del set 

mochila.delete('libro')
console.log(mochila)

//Añadimos elementos en el set 
mochila.add('fruta')
mochila.add('naranja')
//Tamaño del set  
console.log(mochila.size)
//intentamos repetir un dato 
mochila.add('linterna')
//convertimos el set en un array 

const mochilaArray=[...mochila]
console.log(mochilaArray)