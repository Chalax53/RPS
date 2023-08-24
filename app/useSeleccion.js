import {useState}  from 'react';
import referee from './referee';


const useSeleccion = () => {
    const [NPC, setNPC] = useState(0);
    const [matchWinner, setMatchWinner] = useState(null);
    const [draws, setDraws] = useState(null);
    const [wins, setWins] = useState(null);
    const [loses, setLoses] = useState(null);
    const { winner, npcSelection } = referee();
    

    function matchOutcome(choice) {
        //aqui regresa quien gano, la imagen que se selecciono por el NPC y el mensaje.
        //pero para establecer eso, necesitamos la decision del referee
        
        //due to the nature of react being asynchronous, this is done to ensure 
        //variable updates in time for next function call.
        NPCholder = npcSelection();
        setNPC(NPCholder);
        console.log('npcHOLDER', NPCholder)
        var result = winner(choice, NPCholder); //aqui se va a hacer la logica - despues de que player y NPC escogen.
        






        
        if (result == 'Draw'){
            setMatchWinner('Draw')
            setDraws(draws + 1);
        }
        else if (result == 'Player'){
            setMatchWinner('Player');
            setWins(wins + 1);
        }
        else if (result == 'NPC'){
            setMatchWinner('NPC');
            setLoses(loses + 1);
        }
        
    }
    //Resets all values.
    function reset(){
        setWins(null);
        setLoses(null);
        setDraws(null);
        setMatchWinner(null);
        setNPC(null);
    }


    return { matchOutcome, matchWinner, draws, wins, loses, NPC, reset }
}
export default useSeleccion;