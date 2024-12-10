import Card from "../Card/Card"
import "./CardsGrid.css"

function CardsGrid({handleSelectCard, data}){

    return(
        <div className="grid-container">
            {data.current.map((item, index) => <Card item={item} handleSelectCard={handleSelectCard} key={index}/>)}
        </div>
    )
}

export default CardsGrid