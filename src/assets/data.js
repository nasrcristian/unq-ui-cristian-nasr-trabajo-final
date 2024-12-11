import oso from './oso.jpg'
import rata from './rata.jpg'
import alce from './alce.jpg'
import cerdo from './cerdo.jpg'
import cocodrilo from './cocodrilo.jpg'
import godzilla from './godzilla.jpg'
import gorila from './gorilla.jpg'
import mono from './mono.jpg'
import orca from './orca.jpg'
import pato from './pato.jpg'
import tortuga from './tortuga.jpg'
import nessie from './nessie.jpg'
import perro from './perro.jpg'
import camel from './camel.jpg'


const animals = [
    oso,
    camel,
    pato,
    tortuga, 
    nessie,
    perro,
    cerdo,
    cocodrilo, 
    godzilla,
    gorila,
    mono,
    orca,
    alce, 
    rata
    
].sort((x, y) => 0.5 - Math.random())

export function getRandomizedPairs(quantityOfPairs) {
    // En el parametro se deberia pasar la cantidad de parejas que se quieren (si quiero 16 cartas entonces pido 8 pares). Si se piden mas de los que tiene el array se devuelven todos los que hayan
    const slicedAnimals = animals.slice(0, quantityOfPairs);
    return slicedAnimals.concat(slicedAnimals).sort((x, y) => 0.5 - Math.random())
}

export const maxQuantity = animals.length