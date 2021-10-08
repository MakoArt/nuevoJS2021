//VAMOS A ACCEDER AL BODY 
console.log(document.body)

//VAMOS A CREAR ETIQUETAS DESDE JS 

let caja=document.createElement('div')
let caja2=document.createElement('div')

//VAMOS A DAR ESTILOS A NUESTRO DIV 

caja.style.width='100px'
caja.style.height='100px'
caja.style.backgroundColor='green'
caja.style.borderRadius='50%'

caja2.style.width='100px'
caja2.style.height='100px'
caja2.style.backgroundColor='blue'
caja2.style.borderRadius='50%'

//RENDERIZANDO NUESTRO ELEMENTO 

// document.body.appendChild(caja)
// document.body.appendChild(caja2)

document.body.append(caja,caja2)

//DIFERENCIAS ENTRE APPEND Y APPENDCHILD 

//1.appendchild no permite renderizar más de un elemento 
//2.append si permite renderizar dos o más
//3.appendchild no permite renderizar string o cadenas 
//4.append si permite  meter varios elementos 

//NOS DICE LA CODIFICACIÓN DE CARÁCTERES 

console.log(document.characterSet)

//CUANTOS HIJOS TIENE EL DOCUMENTO  

console.log(document.childElementCount)

//NODOS HIJOS DEL DOCUMENTO  

console.log(document.childNodes)

//PARA DEVOLVERNOS LOS HIJOS QUE TIENE 

console.log(document.children)

//CLONAR EL DOCUMENTO  
//se le pase un boolean true o false en función 
//de si queremos que nos clone también el contenido 

let clonadoBody=document.body.cloneNode(true)

console.log(clonadoBody)

//COMO SABER EL TIPO DE CONTENIDO 

console.log(document.contentType)

//CREANDO ATRIBUTOS 

let subtitulo=document.querySelector('#sub1')

subtitulo.setAttribute('class','tituloClase')

//SELECCIONAR ELEMENTOS  
let subtitulo2=document.querySelector('#sub2')
let subtitulo3=document.querySelector('#sub3')


subtitulo2.style.color='red'
subtitulo3.style.color='green'
subtitulo3.textContent='AHORA CAMBIO'


//CREANDO UN COMENTARIO  

let comentario=document.createComment('soy un comentario')
console.log(comentario)

//FRAGMENT  

let container=document.createDocumentFragment()
document.appendChild(container)

//CREANDO UN NODO DE TEXTO DESDE JAVASCRIPT 

const textNode=document.createTextNode('Soy un nodo de texto')
document.body.appendChild(textNode)

//ACCEDER A LA ETIQUETA HTML/DOCTYPE 

console.log(document.doctype)

//NOS DA EL ELEMENTO HTML  
console.log(document.documentElement)

//URI 
console.log(document.documentURI)

//SABER EL DOMAIN O DOMINIO 
console.log(document.domain)
//PRIMER HIJO 
console.log(document.firstChild)

//PRIMER ELEMENTO HIJO 

console.log(document.firstElementChild)

//QUERYSELECTORALL 

const enlaces=[...document.querySelectorAll('a')]

enlaces.map(enlace=>{
    enlace.style.color='red'
    enlace.style.backgroundColor='pink'
})