//BREAK , CONTINUE , RETURN 
const animales=['perro',
                'ardilla',
                 'buho',
                 'cobra',
                 'murcielago',
                 'pato',
                 'oso',
                 'vaca'
]

for(let i=0;i<animales.length;i++){
    
   
    if(i===4){
        continue;
    }else{
       console.log(animales[i])
    }
}

function saludo(nombre){
    return `Hola que tal ${nombre}`
    //console.log('Esto es otro saludo')
}

console.log( saludo('Antonio').length)
