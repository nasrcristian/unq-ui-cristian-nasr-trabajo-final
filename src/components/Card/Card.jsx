import { useEffect, useState } from "react"
import "./Card.css"

function Card({item, handleSelectCard}){

    const [isFoundCard, setIsFoundCard] = useState(false)
    const [isSelectedCard, setIsSelectedCard] = useState(false)
    const [showImagesInitially, setShowImagesInitially] = useState(true); // Nuevo estado

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImagesInitially(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);



    const handleCardClick = () => {
        if(!isSelectedCard && !isFoundCard & !showImagesInitially)
        handleSelectCard({data: item, selectedSetter: setIsSelectedCard, foundSetter: setIsFoundCard})
    }

    return(
            showImagesInitially || isSelectedCard || isFoundCard?
                <img src={item} className={"card-container"}/> 
                :
                <div className="card-container"  onClick={handleCardClick}></div>

            
    )
}

export default Card 