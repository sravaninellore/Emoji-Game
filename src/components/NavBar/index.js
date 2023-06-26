// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <div className="navbar">
      <div className="navbar-and-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-heading">Emoji game</h1>
      </div>
      {!isGameOver && (
        <div className="score-items">
          <p className="score">Score: {score}</p>
          <p className="score score-padding">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
