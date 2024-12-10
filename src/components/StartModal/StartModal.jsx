import { useState } from "react"
import './Modal.css'

function StartModal(){

    const [cardsQuantity, setCardsQuantity] = useState(0)

    return(
        <div className="modal-background">
            <div className="modal-main">
                <h1 className="modal-title">Bienvenido</h1>
                <label>
                    Por favor seleccione la cantidad de fichas:
                </label>
                <select 
                    name="cantidad de fichas" 
                    defaultValue={8}
                    onChange={e => setCardsQuantity(e.target.value)}
                >
                    <option value={6}> 6 fichas </option>
                    <option value={8}> 8 fichas </option>
                    <option value={10}> 10 fichas </option>
                    <option value={12}> 12 fichas </option>
                    <option value={16}> 16 fichas </option>
                </select>
            </div>
            
        </div>
    )
}

export default StartModal;