import { getRandomizedPairs } from "../../../assets/data";
import CardsGrid from "../CardsGrid/CardsGrid";
import { useEffect, useRef, useState } from "react";
import './MainGame.css'


function MainGame(){
    const [selectedCards, setSelectedCards] = useState([])
    const [foundPairs, setFoundPairs] = useState(0)
    const [score, setScore] = useState(0)
    const cards = useRef(getRandomizedPairs(20))


    useEffect(() => {
        if(selectedCards.length === 2){
            setTimeout(compareCards, 500)
        }
    }, [selectedCards])

    const compareCards = () => {
        const [card1, card2] = selectedCards
        const areEqualCards = card1.data === card2.data;
        selectedCards.forEach((cardObject) => {
            cardObject.foundSetter(areEqualCards)
            cardObject.selectedSetter(false)
        })
        setSelectedCards([])
        if(areEqualCards){
            setFoundPairs((prev) => prev + 1)
            setScore((prev) => prev + 100)
        } else {
            setScore((prev) => prev - 50)
        }
    }

    const handleSelectCard = (cardItem) => {
        if(selectedCards.length < 2){
            cardItem.selectedSetter(true)
            setSelectedCards((prev) => [...prev, cardItem])
        }
    }

    if(foundPairs === 15){
        return(
            <p>Terminaste con un score de {score} puntos</p>
        )
    } else {
        return(        
            <div className="main-container">
                <p className="score">Score: {score}</p>
                <CardsGrid handleSelectCard={handleSelectCard} data={cards}/>
            </div>
        )
    }
}


export default MainGame;