import Card from "./Card/Card"

function CardsGrid(){

    const array = [1, 2, 3]
    const arrayDoble = array.concat(array).sort((x, y) => 0.5 - Math.random())
    return(
        arrayDoble.map((item, index) => <Card item={item} key={index}/>)
    )
}

export default CardsGrid