import { useState } from "react"
import "./Card.css"

function Card({item, handleSelectCard}){

    const [isFoundCard, setIsFoundCard] = useState(false)
    const [isSelectedCard, setIsSelectedCard] = useState(false)

    const handleCardClick = () => {
        handleSelectCard(item, isFoundCard, setIsFoundCard, isSelectedCard, setIsSelectedCard)
    }

    return(
        <h1 onClick={handleCardClick} className={isSelectedCard? "selectedCard" : isFoundCard? "foundCard" : ""}>{item}</h1>
    )
}

export default Card