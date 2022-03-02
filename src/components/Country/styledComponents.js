import styled from 'styled-components/macro'

export const CountriesUlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  border: 1px solid #334155;
  border-radius: 4px;
  height: 350px;
`
export const AppContainer = styled.div`
  display: flex;
  background-color: #161624;
  min-height: 100vh;
  padding: 20px;
  min-width: 100vw;
`
export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CountriesHeading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VisitedCountryHeading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VisitedCountriesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin: 0px;
`
export const NoEmptyText = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const NoVisitedCountryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`
