const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 0, limite = 1 ,listar = false) =>{
  try {

    let salida = '';
    let salidaPantalla = '';
    for(let i = 0; i <= limite; i ++){
        salida += `${base} * ${i} =  ${base * i} \n`;
        salidaPantalla += `${base} ${ '*'.green } ${i} ${ '='.green }  ${base * i} \n`;
    }
    if( listar ){
      
      console.log( `\n Tabla de multiplicar de ${base} \n`.rainbow )
      console.log( salidaPantalla );
    }
      //uso de fileSystem para crear archivos en nuestro server 
    // fs.writeFile(`tabla-${base}.txt `, salida, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });
  
    //una manera mas simple de grabar archivos en el server
    await fs.writeFileSync(`./outputs/tabla-${base}.txt `, salida);
    return `tabla-${base}.txt ` ;
      // console.log('The file has been saved!');
      

  } catch (err) {

    throw err;

  }

}

//para importarlo desde otro archivo debemos llamar desestructurando a 'funcionCrearArchivo(por ej)
module.exports = {
  funcionCrearArchivo: crearArchivo //en la nueva version de js es redundante y con escribir: "crearArchivo" es suficiente
  
}