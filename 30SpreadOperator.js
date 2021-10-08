const cities=['Madrid',
              'Londres',
              'Berlin']

const countries=['Spain',
                 'Belgium',
                 'Italy'
                ]

const mundo=[...cities,...countries]

console.log(mundo)


const modelsWoman = {
    sara:"Spain",
    kelly:"England",
    Fionella:"Italia",
    Fionella2:{
       Fionella:"Francia" 
    }
}

const modelsMan={
    Pepe:"Spain",
    Jordan:"United States",
    Korea:"Kim Yom Ul"
}


const models={...modelsWoman,...modelsMan}

console.log(models)
