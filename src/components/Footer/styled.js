import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: black;
  height: auto;
  display: flex;
  align-items: center;
  padding: 45px 0;

  @media (max-width: 768px) {
    height: auto;
    padding: 45px;
  }
`
export const SecondaryFooter = styled.div`
  height: 50px;
  background-color: #6f6f70;
  width: 100vw;
`

export const SecondaryFooterWrapper = styled.div`
  height: 50px;
  background-color: #6f6f70;
  width: 90%;
  max-width: 1490px;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-size: 12px;
  justify-content: space-between;

  * {
    text-decoration: none;
    color: white;

  }

  @media (max-width: 768px) {
    font-size: 9px;
    width: 100%;

      & > .footer_paragraph1 {
        margin: 0 20px;
      }

      & > .footer_paragraph2 {
        margin: 0 20px;
        text-align: right;
      }

  }
`

export const FooterWrapper = styled.div`
  max-width: 1490px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
` 

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;

  & > div {
    padding-left: 30px;
  }

  img {
    width: auto;
  }
`

export const FooterNav = styled.nav`
  padding-left: 115px;
  margin-top: 50px;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 45px;
    display: block;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 120px;

    a {
      font-size: 12px;
      width: 50%;
      padding-right: 0;
      height: 30px;
      margin-bottom: 0;
      padding-bottom: 10px;
    }
  }
`

export const HorizontalDivider = styled.div`
  width: ${props => props.width || 65}px;
  margin-top: ${props => props.marginTop || 0}px;
  height: 2px;
  border-bottom-width: ${props => `${props.borderWidth || 2}px`};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.color || 'white'};
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
`