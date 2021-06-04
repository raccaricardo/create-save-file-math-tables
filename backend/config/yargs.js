const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: 3,
        describe: 'la base de la tabla de multiplicar a mostrar',
        type: 'number',
        demandOption: true,//oblga a introducir la base
    })
    .option('l',{
        alias: 'listar',
        default: false,
        describe: 'muestra el archivo que se guardo',
        type: 'boolean',
    })  
    .option('t',{
        alias: 'limite',
        default: 1,
        describe: 'marca el limite de numeros a multiplicar',
        type: 'number',

    })        
.check( (argv, options) => { //manejo de errores y que hacer con los datos recibios o en caso no recibirlos
    
    if(isNaN( argv.b ) ) {
        throw 'La base tiene que ser un numero';
    }
    if(isNaN( argv.t ) ) {
        throw 'El limite tiene que ser un numero';
    }
    
     return true;

})    
.argv;
console.log('argv base');
console.log(argv.base);


console.log('argv limite');
console.log(argv.limite);

module.exports = argv;