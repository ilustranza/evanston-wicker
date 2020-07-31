import styled from 'styled-components'

import contactBg from '../../static/images/contact/bg_contacto.png'

export const MainContainer = styled.div`
  width: 100%;
  background-image: url(${contactBg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding-top: 100px;
  
  h2 {
    margin-right: 100px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    background-size: cover;
    flex-direction: column;
    align-items: center;
  }
`

export const Blackbox = styled.div`
  height: auto;
  width: 30vw;
  background-color: rgba(0,0,0,.7);
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;
  margin-bottom: 80px;
  padding: 30px;

  h2 {
    margin: 0;
    font-size: 40px;
    letter-spacing: 0;
    text-align: left;
    line-height: .9;
    margin-bottom: 50px;
    
    strong {
      font-family: 'GothamBold'
    }
    
  }

  p {
    text-transform: uppercase;
    font-size: 16px;
    margin: 0;

    strong {
      font-family: 'GothamBold';
    }
  }

  @media (max-width: 768px) {
    width: calc(100vw - 100px);

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 12px;
    }
  }
`

export const HorizontalDivider = styled.div`
  flex: ${props => props.flex ? 'auto' : 'inherit'};
  margin-top: ${props => props.marginTop || 0}px;
  height: 2px;
  border-bottom-width: ${props => `${props.borderWidth || 2}px`};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.color || 'white'};
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  width: ${props => props.size || 'auto'};
`

export const FormContainer = styled.div`
  background-color: #531e86;
  padding: 40px;
  height: auto;
  width: 30vw;
  margin-left: 30px;
  margin-bottom: 80px;

  .formRow {
    margin-bottom: 20px;

    &.split {
      display: flex;
      justify-content: space-between;

      span {
        width: 50%;
        &:nth-child(odd) {
          margin-right: 10px;
        }
      }
    }
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 5px;
      font-size: 11px;
    }
  }

  label div {
    font-size: 18px !important;
    color: white !important;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 120px);
    margin-left: 0;

    .formRow {
      display: flex;
      flex-direction: column;
      &.split {
        span {
          margin-top: 20px;
          width: 100%;
          display: block;
        }
      }
    }
  }
`

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
`

export const Icon = styled.div`
  height: 30px;
  width: 50px !important;
  max-width: 50px !important;
  min-width: 50px !important;
`

export const SendButton = styled.button`
  border-radius: 10px;
  border: 3px solid white;
  text-transform: uppercase;
  color: #471773;
  font-weight: bold;
  font-size: 24px;
  padding: 10px 40px;
  display: block;
  margin-bottom: 30px;
  margin-top: 15px;
  width: 175px;
  cursor: pointer;
  background-image: -moz-linear-gradient( 90deg, rgb(167,167,167) 0%, rgb(255,255,255) 100%);
  background-image: -webkit-linear-gradient( 90deg, rgb(167,167,167) 0%, rgb(255,255,255) 100%);
  background-image: -ms-linear-gradient( 90deg, rgb(167,167,167) 0%, rgb(255,255,255) 100%);
`

export const PrivacyButton = styled.a`
  border-radius: 5px;
  border: 2px solid #8750ba;
  background-color: #6f3ca2;
  color: #fdf4ff;
  font-weight: bold;
  font-size: 16px;
  padding: 5px 20px;
  display: block;
  margin-bottom: 30px;
  margin-top: 15px;
  // width: 180px;
  text-decoration: underline;
  cursor: pointer;
`