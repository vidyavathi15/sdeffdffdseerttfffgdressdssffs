import {
  CountryListItem,
  CountryListName,
  CountryListButton,
  VisitEl,
  ButtonAndNameContainer,
} from './styledComponents'

const CountryItem = props => {
  const {countryItemDetails, AddItToVisitedCountries} = props

  const {id, name, isVisited} = countryItemDetails

  const visitedOrVisitText = isVisited ? 'Visited' : 'Visit'

  const onClickCountryButton = () => {
    AddItToVisitedCountries(id)
  }

  return (
    <CountryListItem>
      <CountryListName>{name}</CountryListName>
      <ButtonAndNameContainer>
        {isVisited ? (
          <VisitEl>visited</VisitEl>
        ) : (
          <CountryListButton type="button" onClick={onClickCountryButton}>
            {visitedOrVisitText}
          </CountryListButton>
        )}
      </ButtonAndNameContainer>
    </CountryListItem>
  )
}

export default CountryItem
