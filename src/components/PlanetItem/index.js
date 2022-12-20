import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data

  return (
    <div className="sliderContainer">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h2 className="planet-name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
