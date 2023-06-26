// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, playAgain} = props

  const onClickButton = () => {
    playAgain()
  }

  return (
    <div className="game-status">
      <div>
        <h1 className="status">{gameStatus.status}</h1>
        <div className="score-display">
          <p className="game-status-title">{gameStatus.statusTitle}</p>
          <p className="game-score">{gameStatus.score}/12</p>
          <div>
            <button type="button" className="button" onClick={onClickButton}>
              Play Again
            </button>
          </div>
        </div>
      </div>
      <img
        src={gameStatus.emojiUrl}
        alt="win or lose"
        className="game-status-image"
      />
    </div>
  )
}

export default WinOrLoseCard
