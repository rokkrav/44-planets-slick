import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #05acff;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 64px;
  }
`
