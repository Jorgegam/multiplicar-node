const fs = require("fs");


let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } X ${ i } = ${ base * i }`);         
    }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    
    if(!Number(base)){
        reject(`No es un número ${ base }`);
        return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} X ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
      if (err) 
        reject(err);
      else
        resolve(`tabla-${ base }-al-${ limite }.txt`);
    });
  });
};

module.exports = {
    crearArchivo,
    listarTabla
};