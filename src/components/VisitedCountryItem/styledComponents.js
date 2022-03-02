import styled from 'styled-components/macro'

export const VisitedCountryListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;
  list-style-type: none;
`
export const VisitedImage = styled.img`
  height: 140px;
  width: 250px;
`
export const VisitedButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const VisitedCountryName = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VisitedCountryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
`
