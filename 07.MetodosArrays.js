//METODOS DE LOS ARRAYS 

const frutas=['sandia',
              'manzana',
              'pera',
              'melon',
              'uva',
              'sandia'
            ]
const verduras=['lechuga',
                'pepino',
                'tomate'
                ]


const empresa=[

       {
        id:0,
        nombre:"Javier",
        apellidos:"Garcia Gutierrez",
        edad:34
        },
        {
        id:1,
        nombre:"Pedro",
        apellidos:"Lopez Santiago",
        edad:44
        },
        {
        id:2,
        nombre:"Rosa",
        apellidos:"Lopez Diaz",
        edad:31
        },
        {
        id:3,
        nombre:"Marisa",
        apellidos:"Garcia Ibi",
        edad:34
        },
        {
        id:4,
        nombre:"Michael",
        apellidos:"Shencker Fhilips",
        edad:39
        },
        {
        id:5,
        nombre:"Maria Jose",
        apellidos:"Lamotta Sanchez",
        edad:19
        },
        
]
                  


//CONCAT : Nos une dos arrays o añade 
//elementos al array 

//console.log(frutas.concat('limón'))

//EVERY : nos obliga a que todos los elementos 
//del array cumplan una determinada condición 

// frutas.every(fruta => {
//     console.log(fruta=='sandia')
// })

//SOME: Nos devuelve elemento por elemento si son true 
//o false 

// frutas.some(fruta => {
//     console.log(fruta==='sandia')
// })

//FILTER:Nos filtra el array y nos devuelve otro 
//array con las condiciones que le indiquemos 

// frutas.filter(fruta => {
//     if(fruta.length>5){
//         console.log(`${fruta} tiene más de 5 caracteres`)
//     }else{
//         console.log(`${fruta} tiene menos de 5 carácteres`)
//     }
// })

//FIND: nos busca las coincidencias que le digamos

// frutas.find(fruta=>{
//     if(fruta ==='sandia'){
//         console.log(fruta)
//     }
// })

//FOREACH:Por cada elemento nos recorre array 

// frutas.forEach(fruta=>{
//     if(fruta.length>5){
//         console.log(fruta)
//     }
// })

//INCLUDES:Nos da true o false en función si 
//existe ese elemento del array 

// console.log(frutas.includes('banana'))

//INDEXOF:Nos devuelve un numero negativo si no 
//encuentra el elemento en el array y si lo 
//encuentra nos dice la posición que ocupa 

// console.log(frutas.indexOf('uva'))


//JOIN:Nos separa los elementos del array según 
//le indiquemos 

// console.log(frutas.join('-'))

//LASTINDEXOF 

// console.log(frutas.lastIndexOf('sandia'))

//LENGTH(propiedad)

// let casa="chalet"
// console.log(frutas.length)
// console.log(casa.length)

//MAP: nos itera arrays y arrays de objetos 
// y nos devuelve un array 


// empresa.map(em=>{
//     document.body.innerHTML+=`
    
//      <ul> 
//         <li>
//            Id:${em.id}<br>
//            Nombre:${em.nombre}<br>
//            Apellidos:${em.apellidos}<br>
//            Edad:${em.edad}

//         </li>

//      <ul>
    
    
    
//     `
// })

//POP:Elimina el último elemento de un array  
// y nos lo devuelve 

// console.log(frutas.pop())
// console.log(frutas)

//PUSH:Agrega al final del array el nuevo elemento 
//que le indiquemos y nos devuelve la longitud 
//del array con el nuevo elemento 

// console.log(frutas.push('fresa'))
// console.log(frutas)


//REDUCE: Reduce el array a un solo elemento 

//  frutas.reduce(fruta=>{
//      console.log(fruta)
//  })

//REVERSE:Nos devuelve el array invertido  

// console.log(frutas.reverse())

//SLICE:Nos devuelve los indices comprendidos 
//entre el primer indice que le indiquemos y 
//el segundo no incluido 

// console.log(frutas.slice(1,4))

//SORT:Nos ordena el array alfabeticamente 

// console.log(frutas.sort())


//UNSHIFT:Nos agrega al principio del array el
//elemento que le indiquemos  

// console.log(frutas.unshift('mango'))
// console.log(frutas)

//SHIFT:Nos elimina el primer elemento del array 

// console.log(frutas.shift())
// console.log (frutas)


//SPLICE:Nos da los elementos entre dos indices pero  
//1.ponemos desde donde queremos que empieze a contar. 
//2.cuantos elementos va a eliminar o sumar 
//3.y  si va a sumar los que vaya a añadir 

// frutas.splice(0,4,'mango')
// frutas.splice(0,0,'aguacate','kiwi')

// console.log(frutas)  