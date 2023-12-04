// clase 3 - iteraciones


// let x = 5;
// let y = ++x;
// console.log(y);


//for =

  // for(let i = 1; i <= 20; i++){
  //      console.log(i);
  //  }
  //  console.log('----------');
  //  const NUMERO = 5;
 
  // for(let i = 1; i <= 10; i++){
  //      let resultado = NUMERO * i;
  //     console.log(resultado);
  //  }

   // sentencia break
   // sentencia continue

   //ciclo while =
 
// console.log('------');

// let cont = 1;

// while (cont <= 10) {
//   console.log('numero: '+ cont);
//   cont ++;
// }

// console.log('fin ciclo');


// ciclo do - while

// let suma = 0;
// let continuar;

// do {
//   const NUMERO = parseInt(prompt('ingrese un numero para sumar'));
//   if(isNaN(NUMERO)){
//     alert('ingrese un numero valido');
//     continuar='si';
//   }
//   else{
//     suma += NUMERO;
//     continuar = prompt('otro nunmero? (si/no)').toLowerCase();
//   }
// } while (continuar === 'si');

// console.log('suma total ' + suma);

// sentencia switch (alternativa al if): 

let quiero = prompt('DESEA REALIZAR UNA OPERACION? \n(si/no)').toLowerCase();

while (quiero === 'si'){
  let n1 = parseInt(prompt('ingrse un numero'));
  let operacion = prompt('ingrese operacio \n ( + - * / )');
  let n2 = parseInt(prompt('ingrese otro numero'));
  let resultado;
  if (!isNaN(n1) && (!isNaN(n2))){
    switch(operacion){
      
      case '+':
        resultado = n1 + n2;
        break;
      
      case '-':
        resultado = n1 - n2;
        break;
        
      case '/':
        resultado = n1 / n2;
        break;
    
      case '*':
        resultado = n1 * n2;
        break;
        
      default:
        alert('inavalido');
        resultado = 'indefinido';
        quiero = prompt('desea intentarlo otra vez? \n(si/no)');
    }
    
    alert(resultado);
    quiero = prompt('otra vez? \n(si/no)');
  }
  else{
    alert('valores invalidos')
    quiero = prompt('desea volver a intentarlo? \n si/no').toLowerCase();
  }  
}

alert('weis hermoso');