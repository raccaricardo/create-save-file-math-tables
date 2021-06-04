const { funcionCrearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(' base: yargs ', argv.base );

 
// leer argumentos por consola sin paquetes externos:
// console.log(process.argv);
// const [ , ,arg3 = 'base=5'] = process.argv; //aqui devuelve un arreglo de strings y le establecemos un valor de 5 por default para evitar undefined
// console.log(arg3);

// const [ , base = 5] = arg3.split('=');//aqui devuelve un arreglo de strings y le establecemos un valor de 5 por default para evitar undefined
// console.log(base);
 
    
funcionCrearArchivo(argv.base, argv.t, argv.l  )
        .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
        .catch( err => console.log(err));