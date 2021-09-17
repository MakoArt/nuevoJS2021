let frase="Mi perro es un pastor Alemán y es bueno"
let frase2=", y es muy inteligente"

//ANCHOR:Nos de vuelve el texto envuelto 
// en un enlace a 

// console.log(frase.anchor())

//BIG:Nos devuelve el texto en un formato más grande 

// document.write(frase.big())
// document.write(frase)

//BOLD:Nos devuelve el texto en negrita 

// document.write(frase.bold())

//CHARAT:Nos da el caracter que coincida 
//con el numero que le pasemos por el argumento 

// document.write(frase.charAt(3))

//CHARCODEAT:Nos devuelve el Unicode 
// que coincida con el numero que le pasemos 
//por el argumento 

// document.write(frase.charCodeAt(3))

//CONCAT:Nos concatena o une , un string al que ya tenemos y 
//tambien nos permite pasar una variable


// document.write(frase.concat(', es muy fuerte' + frase2))

//ENDSWIDTH: Nos dice si el string acaba en el conjuto 
//de carácteres o caracter que le indiquemos 

// document.write(frase.endsWith('Alemán'))

//FONTCOLOR:Nos cambia el color de texto del string 

// document.write(frase.fontcolor('red'))

//FONTSIZE:Nos cambia el tamaño del texto , pasandole un numero 
//por el argumento  

// document.write(frase.fontsize(5))

//INCLUDES:Nos da true o false en función si el caracter o 
//conjunto de carácteres que le indiquemos esta incluido en 
// el texto  

// document.write(frase.includes('perro'))

//INDEXOF:Si existe el indice que le especifiquemos 
//en el argumento nos da su posición y si no pues nos da un -1 

// document.write(frase.indexOf('perro'))

//ITALICS: Nos convierte el texto en cursiva o 
//itálica 

// document.write(frase.italics())

//LASTINDEXOF:Nos va a dar la ultima posicion del carácter o 
//conjunto de carácteres que le pasemos por el argumento 
//si no existiera nos dara -1

// document.write(frase.lastIndexOf('es'))

//LENGTH:Nos va a dar la longitud de un string 
//incluidos los espacios 

// document.write(frase.length)

//LINK: Nos devuelve un enlace y le da el atributo 
//por defecto href 

// document.write(frase.link('http://google.com'))

//MATCH: Nos devuelve la coincidencia si existiera 
//o de lo contrario nos devuelve null 

// document.write(frase.match('gato'))

//REPEAT: Nos devuelve el string repetido las veces 
// que le indiquemos 

//  document.write(frase.repeat(2))

//REPLACE:Nos permite reemplazar una parte del 
//string por otro pasandole por el primer argumento 
//lo que queremos cambiar y por el segundo la 
//parte nueva 

// document.write(frase.replace('pastor Alemán','Boxer'))

//SLICE: Nos devuelve una porción de cadena, que nosotros le 
//indiquemos entre dos números 

// document.write(frase.slice(2,8))

//SMALL: Hace que el string se vea más pequeño 

// document.write(frase.small())
// document.write(frase)

//SPLIT: Nos divide el string en substring que podemos decidir
// en  cuantas porciones dividimos el string principal 

// document.write(frase.split(' ',10))

//STARWIDTH:Nos da true o false en función si el primer 
//caracter empieza por la letra que pasemos 
//por el argumento y hace distinción entre 
//mayusculas y minusculas 


// document.write(frase.startsWith('M'))


//SUB: Nos da el string como si fuera un subtitulo 

// document.write(frase.sub())


//SUBSTRING: Nos devuelve una porción de cadena 
//entre dos números que pasemos como argumentos 
//incluyendo el primero pero no el segundo 

// document.write(frase.substring(4,9))

//TOLOCALELOWERCASE:Convierte los carácteres en minuscula 
//dentro del entorno local . 

// document.write(frase.toLocaleLowerCase())

//TOLOCALEUPPERCASE:Convierte los caracteres en mayuscula 
//dentro del entorno local 

// document.write(frase.toLocaleUpperCase())

//TOLOWERCASE:Convierte la cadena a minuscula 

// document.write(frase.toLowerCase())

//TOUPPERCASE:Convierte la cadena a mayúscula 
// document.write(frase.toUpperCase())

//TRIM:Nos limpia los espacios que haya en el string 
//Es muy usado en la validación de formularios 

//instanciamos frase.trim en una variable 



//instanciamos frase.trim en una variable 
 let longitud=frase.trim()
//comprobamos la nueva longitud
  console.log(longitud)
 
