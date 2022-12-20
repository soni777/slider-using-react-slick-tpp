import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container">
      <h1 className="heading">PLANETS</h1>
      <div testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} data={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
