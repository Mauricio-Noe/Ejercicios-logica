//1-iniciamos  valores en 0 y declaramos longitud
// 2-sumamos los array entre indeces
// 3-declaramos el tipo de resultado
// 4- comparamos resultado y adihnamos punto

function battleHorde(zombies, humans) {

    //paso 1
     let z=0, h= 0;
           // inicio        meta         avance
        for(let i=0 ; i < zombies.length; i++) {
    //paso 2
    
         z +=Number(zombies[i]);
          h += Number(humans[i]);
  }     
  // paso 3
   if( z === h) return 'x'
   
   const reporte = z > h ? 'z':'h';
   return `${Math.abs(z -h)}${reporte}` 
    
  }
  