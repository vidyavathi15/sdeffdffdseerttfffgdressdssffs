import {
  VisitedCountryListItem,
  VisitedImage,
  VisitedButtonsContainer,
  VisitedCountryName,
  VisitedCountryButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {visitedDetails, removeVisitedCountryFromList} = props

  const {name, imageUrl, id} = visitedDetails

  const onClickRemoveButton = () => {
    removeVisitedCountryFromList(id)
  }
  return (
    <VisitedCountryListItem>
      <VisitedImage src={imageUrl} alt="thumbnail" />
      <VisitedButtonsContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <VisitedCountryButton type="button" onClick={onClickRemoveButton}>
          Remove
        </VisitedCountryButton>
      </VisitedButtonsContainer>
    </VisitedCountryListItem>
  )
}

export default VisitedCountryItem
