
const argv = require('./config/yargs').argv;

let comando = argv._[0];


const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
switch (comando) {
  case "listar":
    console.log("Listar");
    console.log(argv.base, argv.limite);
    
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
      .catch((e) => console.log(e));
    break;

  default:
    console.log("Comando no reconocido");
}
