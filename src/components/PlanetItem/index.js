import {
  SlideContainer,
  PlanetImg,
  PlanetHeading,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div>
      <SlideContainer>
        <PlanetImg src={imageUrl} alt={`planet ${name}`} />
        <PlanetHeading>{name}</PlanetHeading>
        <PlanetDescription>{description}</PlanetDescription>
      </SlideContainer>
    </div>
  )
}

export default PlanetItem
