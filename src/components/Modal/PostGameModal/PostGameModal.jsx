import '../Modal.css'
import './PostGameModal.css'


function PostGameModal({resetGame, goToOptions, displayMsg}){
    return(
        <div className="modal-background">
            <div className="modal-main">
                <p className="modal-title">{displayMsg || "Termino el juego"}</p>
                <button onClick={goToOptions} className="modal-button post-game-button">Ir al menú</button>
                <button onClick={resetGame} className="modal-button post-game-button">Volver a jugar</button>
            </div>
        </div>
    )
}

export default PostGameModal;