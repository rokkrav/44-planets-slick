import Slider from 'react-slick'

import {AppContainer, Heading} from './styledComponents'

import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <AppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </AppContainer>
  )
}

export default PlanetSlider
