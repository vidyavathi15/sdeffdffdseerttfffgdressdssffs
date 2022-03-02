import styled from 'styled-components/macro'

export const CountryListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  margin: 20px;
  border-bottom: 0 0.5px solid #334155;
  padding: 10px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 90vw;
  }
`

export const CountryListName = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const CountryListButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;

  background-color: #3b82f6;
`
export const VisitEl = styled.p`
  color: #334155;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const ButtonAndNameContainer = styled.div`
  display: flex;
`
