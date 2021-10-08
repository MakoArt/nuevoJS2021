//DOM TRAVERSING 

//Tipos de nodos 
//1.Elementos 
//2.Atributos 
//3.Text Nodes 
//8.Comentarios 
//9.Documentos 
//10.doctype  

const lista=document.querySelector('#lista')

//hijos de la lista
console.log(lista.children)

//DOM TRAVERSING (HIJOS A PADRES)
//usamos el parentElement  

console.log(lista.parentElement.parentElement)

//DOM TRAVERSING (ENTRE HERMANOS)

console.log(lista.previousSibling.previousSibling)
console.log(lista.nextSibling.nextSibling)

