import styled, { keyframes } from 'styled-components'
import simBg from '../../static/images/sim/bg_sim.png'
import { fadeIn } from 'react-animations';


const fadeAnimation = keyframes`${fadeIn}`;

export const FadeBox = styled.div`
  animation: 2s ${fadeAnimation};
`

export const MainContainer = styled.div`
  width: 100%;
  background-image: url(${simBg});
  background-size: contain;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  
  h2 {
    margin-right: 100px;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    background-size: cover;
    align-items: center;

    .hDivider {
      display: none !important;
    }

    h2 {
      font-size: 30px;
      letter-spacing: 0;
      padding: 0 20px;
      margin-right: 0;
    }
  }
`

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 96px);
  margin-bottom: 80px;

  img {
    width: 580px;
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;

    img {
      width: 90vw;
      margin-left: 0 !important;
      margin-right: 0 !important;
      margin-bottom: 20px;
    }
  }

`

export const Blackbox = styled.div`
  min-height: 550px;
  width: 550px;
  background-color: rgba(0,0,0,.7);
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;

  h2 {
    margin: 0 !important;
    padding: 0;
    font-size: 56px;
    letter-spacing: 0;
    text-align: left;
    line-height: .9;
    margin-bottom: 30px;
    
    strong {
      font-family: 'GothamBold';
    }
  }

  h3 {
    font-size: 36px;
    font-weight: normal;
    margin: 0;
  }

  h4 {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  }

  h5 {
    font-size: 21px;
    font-weight: normal;
    margin: 0;
  }

  p {
    text-transform: initial;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: calc(90vw - 100px);
    margin-bottom: 10px;

    p {
      margin: 15px 0;
    }

    h2 {
      font-size: 30px;
      letter-spacing: 0;
    }

    .hDivider_blackbox {
      margin-top: 35px !important;
      margin-bottom: 30px !important;
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

export const AllDarkGray = styled.div`
  border-top: 5px solid #343434;
  background-color: #2a2a2a;
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`

export const ActiveThumbnail = styled.div`
  width: 570px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;

  img {
    position: absolute;
    left: 0;
  }

  & > div {
    position: absolute;
    right: 0;
  }

  @media (max-width: 768px) {
    img {
      width: 60vw !important;
    }
  }
`

export const ActiveThumbnailViolator = styled.div`
  background-color: #5c0f8b;
  min-width: 190px;
  height: 200px;
  padding-left: 32px;
  cursor: pointer;
  padding: 0 15px;

  h2 {
    font-size: 36px;
    text-transform: uppercase;
    line-height: 1.2em;
    padding: 0;

    strong {
      font-family: 'GothamBold';
    }

  }

  @media (max-width: 768px) {
    width: 184px;
    height: 150px;
    padding-left: 15px;

    h2 {
      // margin: 0 !important;
      font-size: 18px !important;

      span {
        font-size: 20px !important;
        line-height: 1.2em !important;
      }
    }
  }
`

export const MainThumbnail = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const LeftThumbnail = styled.div`
  position: relative;
  right: -130px;
  display: flex;
  align-items: center;
  width: 370px;
  color: white;

  img {
    position: absolute;
    left: 0;
  }

  & > div {
    position: absolute;
    right: 0;
    background-color: #5c0f8b;
    width: 215px;
    height: 100px;
    padding-left: 10px;

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      line-height: .9;

      strong {
        font-family: 'GothamBold';
      }
    }
  }

  @media (max-width: 900px) {
    display: none !important;
  }
`

export const RightThumbnail = styled.div`
  position: relative;
  left: -130px;
  display: flex;
  align-items: center;
  width: 370px;
  color: white;

  img {
    position: absolute;
    left: 0;
  }

  & > div {
    position: absolute;
    right: 0;
    background-color: #5c0f8b;
    width: 215px;
    height: 100px;
    padding-left: 10px;

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      line-height: .9;

      strong {
        font-family: 'GothamBold';
      }
    }
  }

  @media (max-width: 900px) {
    display: none !important;
  }
`