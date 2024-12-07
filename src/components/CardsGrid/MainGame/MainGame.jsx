import Card from "../Card/Card";
import CardsGrid from "../CardsGrid";
import { useEffect, useState } from "react";

const array = [1, 2, 3]
const arrayDoble = array.concat(array).sort((x, y) => 0.5 - Math.random())

function MainGame(){
    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        if(selectedCards.length === 2){
            compareCards()
        }
    }, [selectedCards])

    const compareCards = () => {
        const [card1, card2] = selectedCards
        const areEqualCards = card1.item === card2.item;
        selectedCards.map((cardObject) => {
            cardObject.foundSetter(areEqualCards)
            cardObject.selectedSetter(false)
        })
        setSelectedCards([])
    }

    const handleSelectCard = (item, isFoundCard, setIsFoundCard, isSelectedCard, setIsSelectedCard) => {
        if(selectedCards.length < 2 && !isFoundCard && !isSelectedCard){
            setIsSelectedCard(true)
            setSelectedCards((prev) => [...prev, {item: item, foundSetter: setIsFoundCard, selectedSetter: setIsSelectedCard}])
        }
    }

    return(
        arrayDoble.map((item, index) => <Card item={item} handleSelectCard={handleSelectCard} key={index}/>)
    )
}


export default MainGame;