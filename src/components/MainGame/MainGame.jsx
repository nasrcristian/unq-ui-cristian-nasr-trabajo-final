import { getRandomizedPairs } from "../../assets/data";
import CardsGrid from "../CardsGrid/CardsGrid";
import { useEffect, useRef, useState } from "react";
import './MainGame.css'


function MainGame({options, endGame}){
    const {cardsQuantity, gamemode} = options
    const totalPairs = cardsQuantity / 2
    const [selectedCards, setSelectedCards] = useState([])
    const [foundPairs, setFoundPairs] = useState(0)
    const [firstPlayerScore, setFirstPlayerScore] = useState(0)
    const [secondPlayerScore, setSecondPlayerScore] = useState(0)
    const cards = useRef(getRandomizedPairs(totalPairs))

    gamemode.playersScore = [firstPlayerScore, secondPlayerScore]
    gamemode.playersSetter = [setFirstPlayerScore, setSecondPlayerScore]


    useEffect(() => {
        if(selectedCards.length === 2){
            setTimeout(compareCards, 400)
        }
    }, [selectedCards])

    useEffect(()=> {
        if(foundPairs === totalPairs){
            endGame(gamemode.getDisplayMsg())
        }
    }, [foundPairs])


    const compareCards = () => {
        const [card1, card2] = selectedCards
        const areEqualCards = card1.data === card2.data;
        selectedCards.forEach((cardObject) => {
            cardObject.foundSetter(areEqualCards)
            cardObject.selectedSetter(false)
        })
        setSelectedCards([])
        if(areEqualCards){
            gamemode.increaseActualPlayerScore()
            setFoundPairs((prev) => prev +1)
        } else {
            gamemode.decreaseActualPlayerScore()
        }
        gamemode.passTurn()
        
        
    }

    const handleSelectCard = (cardItem) => {
        if(selectedCards.length < 2){
            cardItem.selectedSetter(true)
            setSelectedCards((prev) => [...prev, cardItem])
        }
    }


        return(        
            <div className="main-container">
                <p>Memotest de animales</p>
                <p className="score">{gamemode.displayFirstScore()}</p>
                {gamemode.displaySecondScore() &&
                <p className="score">
                   {gamemode.displaySecondScore()}
                </p> }
                <CardsGrid handleSelectCard={handleSelectCard} data={cards}/>
            </div>
        )
    }



export default MainGame;