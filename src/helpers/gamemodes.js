export class Single {
    constructor(firstPlayerName){
        this.playerName = firstPlayerName
        this.playersSetter;
        this.playersScore;
    }

    displayFirstScore(){
        return `Puntaje de ${this.playerName}: ${this.playersScore[0]}`
    }

    displaySecondScore(){
    }

    increaseActualPlayerScore(){
        this.playersSetter[0]((prev) => prev+100)
    }

    decreaseActualPlayerScore(){
        this.playersSetter[0]((prev) => prev-50)
    }

    passTurn(){
        
    }

    getDisplayMsg(){
        return `¡Finalizaste con ${this.playersScore[0]} puntos!` 
    }

}

export class Versus {
    constructor(firstPlayerName, secondPlayerName){
        this.playersTurn = 0 // Por defecto arranca el jugador 1
        this.firstPlayerName = firstPlayerName
        this.secondPlayerName = secondPlayerName
        this.playersSetter;
        this.playersScore;
    }


    increaseActualPlayerScore(){
        this.playersSetter[this.playersTurn]((prev) => prev +100)
    }

    decreaseActualPlayerScore(){
        this.playersSetter[this.playersTurn]((prev) => prev -50)
    }

    passTurn(){
        this.playersTurn = 1 - this.playersTurn
    }

    displayFirstScore(){
            return `Puntaje de ${this.firstPlayerName}: ${this.playersScore[0]}`
    }
    displaySecondScore(){
        return `Puntaje de ${this.secondPlayerName}: ${this.playersScore[1]}`
    }

    getDisplayMsg(){
        if (this.playersScore[0] == this.playersScore[1]){
            return `¡Es un empate! Ambos jugadores obtuvieron un puntaje de ${this.playersScore[0]}.`
        }

        return "¡El ganador es " + (this.playersScore[0] > this.playersScore[1]? 
            `${this.firstPlayerName} con ${this.playersScore[0]} puntos!` : 
            `${this.secondPlayerName} con ${this.playersScore[1]} puntos!`) 
    }

}