import { useState } from "react"
import { maxQuantityOfAnimals } from "../../../assets/data"
import '../Modal.css'
import { Single, Versus } from "../../../helpers/gamemodes"

function OptionsModal({startGame}){

    const SINGLE = "SINGLE"
    const VERSUS = "VERSUS"
    const [pairsQuantity, setPairsQuantity] = useState(8)
    const [gamemode, setGameMode] = useState(SINGLE) 
    const [firstPlayerName, setFirstPlayerName] = useState("")
    const [secondPlayerName, setSecondPlayerName] = useState("")
    const quantityOptions = Array.from({ length: maxQuantityOfAnimals - 2 }, (_, i) => i + 3);

    const handleStartGame = () => {
        let selectedGamemode;
        if(gamemode === SINGLE) {
            selectedGamemode = new Single(firstPlayerName)
        } else {
            selectedGamemode = new Versus(firstPlayerName, secondPlayerName)
        }

        startGame({pairsQuantity: pairsQuantity, gamemode: selectedGamemode})
    }


    return(
        <div className="modal-background">
            <div className="modal-main">
                <h1 className="modal-title">Bienvenido</h1>

                <div className="modal-label-container">
                    <label className="modal-label">
                        Seleccione la cantidad de pares de cartas: 
                    </label>
                    <select 
                        name="cantidad de pares" 
                        defaultValue={8}
                        onChange={e => setPairsQuantity(e.target.value)}
                        className="modal-select"
                    >
                        {
                            quantityOptions.map((option) =>
                            <option value={option} key={option}>
                                {option} pares
                            </option>)
                        }
                    </select>
                </div>
                <div className="modal-label-container">
                    <label className="modal-label">
                        Seleccione el modo de juego:
                    </label>
                    <select
                        name="modo de juego"
                        defaultValue={SINGLE}
                        onChange={e => setGameMode(e.target.value)}
                        className="modal-select">
                        <option value={SINGLE}>Un jugador</option>    
                        <option value={VERSUS}> Dos jugadores </option>
                    </select>
                </div>
                <div className="modal-label-container">
                    { gamemode === SINGLE?
                       (
                       <label className="modal-label">
                            Ingrese su nombre:
                            <input
                                value={firstPlayerName}
                                onChange={e => setFirstPlayerName(e.target.value)}
                                className="modal-input"    
                            />
                        </label>
                        )
                    :
                        (
                          <>
                            <label className="modal-label">
                                Ingrese el nombre del primer jugador:
                            <input
                                value={firstPlayerName}
                                onChange={e => setFirstPlayerName(e.target.value)}
                                className="modal-input"        
                            />
                            </label>
                            <label className="modal-label">
                                Ingrese el nombre del segundo jugador:
                            <input
                                value={secondPlayerName}
                                onChange={e => setSecondPlayerName(e.target.value)}
                                className="modal-input"        
                            />
                            </label>
                          </>   
                        )    
                    }
                </div>
                <button onClick={handleStartGame} className="modal-button">JUGAR!</button>
            </div>
        </div>
    )
}

export default OptionsModal;