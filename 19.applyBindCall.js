const cafeteria={
    nombre:'Los pinos',
    actividades(juego){
        console.log(`Soy ${this.nombre} y estamos jugado al ${juego}`)
    }
}


const persona = {
    nombre:'Emilio'
}

//call(acceder al contexto de otro objeto)

let accederCall=cafeteria.actividades.call(persona,'billar')

//apply(acceder al contexto de otro objeto)

let accederApply=cafeteria.actividades.apply(persona,['poker'])


//bind(retorna una nueva función con el nuevo contexto)

const jugar=cafeteria.actividades.bind(persona)

jugar('futbolin')
jugar('cartas')