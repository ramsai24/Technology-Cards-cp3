// Write your code here.
import './index.css'

const Techcards = props => {
  const {cardListItems} = props
  const {title, description, imgUrl, className} = cardListItems
  console.log(cardListItems)
  console.log(className)
  return (
    <li className={`${className} card-container `}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default Techcards
