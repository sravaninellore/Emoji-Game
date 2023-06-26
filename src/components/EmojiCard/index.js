// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    const {id} = emojiDetails
    const {clickEmoji} = props
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" className="emoji-container" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
