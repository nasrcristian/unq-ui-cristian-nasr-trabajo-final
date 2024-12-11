import { useState } from "react"
import '../Modal.css'
import { Single, Versus } from "../../../helpers/gamemodes"

function OptionsModal({startGame}){

    const SINGLE = "SINGLE"
    const VERSUS = "VERSUS"
    const [cardsQuantity, setCardsQuantity] = useState(8)
    const [gamemode, setGameMode] = useState(SINGLE) 
    const [firstPlayerName, setFirstPlayerName] = useState("")
    const [secondPlayerName, setSecondPlayerName] = useState("")


    const handleStartGame = () => {
        let selectedGamemode;
        if(gamemode === SINGLE) {
            selectedGamemode = new Single(firstPlayerName)
        } else {
            selectedGamemode = new Versus(firstPlayerName, secondPlayerName)
        }

        startGame({cardsQuantity: cardsQuantity, gamemode: selectedGamemode})
    }


    return(
        <div className="modal-background">
            <div className="modal-main">
                <h1 className="modal-title">Bienvenido</h1>

                <div className="modal-label-container">
                    <label className="modal-label">
                        Seleccione la cantidad de cartas totales: 
                    </label>
                    <select 
                        name="cantidad de cartas" 
                        defaultValue={8}
                        onChange={e => setCardsQuantity(e.target.value)}
                        className="modal-select"
                    >
                        <option value={6}> 6 cartas </option>
                        <option value={8}> 8 cartas </option>
                        <option value={10}> 10 cartas </option>
                        <option value={12}> 12 cartas </option>
                        <option value={16}> 16 cartas </option>
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