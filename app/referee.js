//FUNCIONES PURAS

const referee = () => {

    function winner(seleccion, NPC){
        console.log('referee is analizing...')

        if (seleccion == NPC){ //checks wether player and NPC chose the same. if yes, break. No need to check for anything else.
            console.log('Referee called it a Draw')
            return ('Draw');
        }
        else if (seleccion === 0) { //if player = Piedra and NPC = Papel
            if (NPC == 1){
                return('NPC');
          }
            else{
                return('Player');
          }
        } 
        else if (seleccion === 1) { //if player = Papel and NPC = Piedra
            if (NPC == 0){
                return('Player');
            }
            else{               // if player = Papel and NPC = Tijera
                return('NPC');
            }
        } 
        else if (seleccion === 2) { //if player = Tijera and NPC = Papel
            if (NPC == 1){
                return('Player');
            }
            else{               //if player = Tijera and NPC = Piedra
                return('NPC');
            }
        }
    }

    function npcSelection(){
        var x = Math.floor(Math.random() * 3);
        console.log('atrasado, ', x)

        return (x);
    }
    
    return { winner, npcSelection }
    
}
export default referee;


