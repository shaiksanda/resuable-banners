// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardList} = props
  const {headerText, description, className} = cardList
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="content">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
