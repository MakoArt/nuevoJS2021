const recorrer=document.querySelector('button')

let listaCompra=['ternera',
                 'fruta',
                 'verduras',
                 'pizza'
                ]

function* generador(){
    for(let i=0;i<4;i++){
        yield(listaCompra=i)
    }
}

let generadora=generador()

recorrer.addEventListener('click',()=>{
    generadora.next()
    console.log(listaCompra)
})