/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
 
*/

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojis: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    const {score, topScore} = this.state
    let bestScore

    if (score > topScore) {
      bestScore = score
    } else {
      bestScore = topScore
    }

    this.setState({score: 0, topScore: bestScore, clickedEmojis: []})
  }

  clickEmoji = emojiId => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props

    const clickedEmojiIndex = clickedEmojis.findIndex(
      eachEmoji => eachEmoji.id === emojiId,
    )

    // console.log(clickedEmojiIndex, emojiId)

    const clickedEmoji = emojisList.find(eachEmoji => eachEmoji.id === emojiId)

    if (clickedEmojiIndex === -1) {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, clickedEmoji],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({clickedEmojis: 'fail'})
    }
  }

  render() {
    const {score, topScore, clickedEmojis} = this.state

    console.log(clickedEmojis)

    const isGameOver = clickedEmojis === 'fail' || score === 12

    const emojisList = this.shuffledEmojisList()

    const isVictory =
      score === 12
        ? {
            emojiUrl:
              'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
            status: 'You Won',
            statusTitle: 'Best Score',
            score,
          }
        : {
            emojiUrl:
              'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
            status: 'You Lose',
            statusTitle: 'Score',
            score,
          }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {!isGameOver && (
          <div className="emoji-bg-container">
            <ul className="emojis-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          </div>
        )}
        {isGameOver && (
          <div className="game-status-container">
            <WinOrLoseCard gameStatus={isVictory} playAgain={this.playAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
