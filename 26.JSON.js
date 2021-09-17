
function cargarArchivo(){
    
    fetch('./26.JSON.json')
    .then(res=>res.json())
    .then(res=>console.log(res))

}
cargarArchivo()