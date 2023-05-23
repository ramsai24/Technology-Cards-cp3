// Write your code here.

const Techcards = props => {
  const {cardListItems} = props
  const {title, description, imgUrl, className} = cardListItems
  console.log(cardListItems)
  console.log(className)
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default Techcards
