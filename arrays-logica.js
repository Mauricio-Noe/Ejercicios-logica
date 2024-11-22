
function createMagicPotion(potions, target){
    const pocionmagica  = new Map();
    
    for(let i = 0; i < potions.length; i++){
       const posicionvalor = potions[i];
      const valorbuscado = target - posicionvalor;
    
      if (pocionmagica.has(valorbuscado)) {
       return[pocionmagica.get(valorbuscado), i]
      }
         pocionmagica.set(posicionvalor, i)
                }
    }