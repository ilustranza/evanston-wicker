import styled, { keyframes } from 'styled-components'
import graySuit from '../../static/images/gray-suit.png'
import heroBg from '../../static/images/practice/texture_bg.png'
import { fadeIn } from 'react-animations';


const fadeAnimation = keyframes`${fadeIn}`;

export const FadeBox = styled.div`
  animation: 2s ${fadeAnimation};
`

export const AllDarkGray = styled.div`
  border-top: 5px solid #343434;
  background-color: #2a2a2a;
  background-image: url(${graySuit});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: contain;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 70px;
  padding-bottom: 40px;
  
  div {
    text-align: center;
    margin-right: 320px;
    letter-spacing: 4px;
  }

  p {
    text-transform: uppercase;
    color: white;
    font-size: 35px;
    display: block;

    &.tilde {
      font-size: 80px;
    }
  }

  @media (max-width: 768px) {
    height: 200px;
    background-size: cover;
    background-position: bottom center;
    padding: 0 15px;
    width: calc(100% - 30px);

    div {
      margin-right: 0;
    }

    p {
      color: black;
      font-size: 20px !important;
    }
  }
`

export const AllPurple = styled.div`
  height: 970px;
  width: 100%;
  background-color: #2d0545;
  background-image: url(${heroBg});
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  box-sizing: border-box !important;
  
  h2 {
    margin-right: 100px;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 10px;
  }

  @media (max-width: 900px) {
    height: auto;
    background-size: cover;
    background-position: bottom center;
    padding: 0 15px;
    width: 100%;
    padding-top: 20px;
    margin: 0;

    * {
      box-sizing: border-box !important;
    }

    h2 {
      text-align: center;
      font-size: 30px;
      margin-right: 0;
    }

    div.headerDivider {
      margin-right: 0;
      display: none;
    }
  }
` 

export const BlackBox = styled.div`
  min-width: 455px;
  height: 135px;
  background-color: rgba(0,0,0,.8);
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;

  @media (max-width: 768px) {
    min-width: auto;
    padding: 15px;
    width: 100% !important;
    height: auto;

    span {
      font-size: 7vw !important;
      text-transform: uppercase;
    }
  }
`

export const IncludeItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
`

export const IncludeItem = styled.div`
  max-width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  text-align: center;
  text-transform: uppercase;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width || '100%'};
`

export const Right = styled.div`
  max-width: ${props => props.maxWidth || 'calc(50%)'};
`

export const BlackSelector = styled.div`
  width: 100%;
  height: 340px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    margin-right: 45px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const HorizontalDivider = styled.div`
  flex: auto;
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

export const ThumbnailContainer = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  position: relative;
  opacity: ${props => props.active ? 1 : .75};
  cursor: pointer;
`

export const ThumbnailBanner = styled.div`
  width: 197px;
  display: flex;
  position: absolute;
  height: 95px;
  background-color: #5c0f8b;
  right: 0;
  font-size: 25px;
  color: white;
  text-transform: uppercase;
  padding-left: 15px;
`