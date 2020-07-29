import styled, { keyframes } from 'styled-components'

import simBg from '../../static/images/lab/bg_lab.png'
import { fadeIn } from 'react-animations';


const fadeAnimation = keyframes`${fadeIn}`;

export const FadeBox = styled.div`
  animation: 2s ${fadeAnimation};
`

export const MainContainer = styled.div`
  width: 100%;
  background-image: url(${simBg});
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  padding-bottom: 80px;
  
  h2 {
    margin-right: 100px;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 10px;
    text-align: center;
    line-height: .5;
  }

  @media (max-width: 900px) {
    padding-bottom: 20px;
    align-items: center;

    h2 {
      margin-right: 0;
    }
  }
`

export const CarouselItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftArrow = styled.div`
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: -80px;
    top: -33px;
    position: relative;
  }
`

export const RightArrow = styled.div`
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: -80px;
    top: -33px;
    position: relative;
  }
`

export const CarouselContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 60px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: calc(100% - 120px);
    justify-content: flex-start;
    overflow: scroll;
  }
`

export const ImageItem = styled.div`
  margin-right: 18px;
  cursor: pointer;
  opacity: 1;
  transition: opacity .5s;
  width: 17vw;

  &:last-child {
    margin-right: 0;
  }

  img {
    display: block;
    width: 17vw;
  }

  h2 {
    line-height: .9;
    font-size: 1.5vw;
    margin: 0;
    margin-top: 35px;
    font-weight: normal;

    strong {
      font-family: 'GothamBold';
    }
  }

  @media (max-width: 1024px) {
    width: 47vw;

    img {
      width: 47vw;
    }

    h2 {
      font-size: 5vw;
    }
    flex-direction: column;
  }
`

export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;

  img {
    width: 545px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    img {
      width: 90vw;
    }
  }
`

export const Blackbox = styled.div`
  width: 470px;
  background-color: rgba(0,0,0,.7);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;

  &.mobile {
    display: none;
  }

  h2 {
    margin: 0;
    font-size: 50px;
    letter-spacing: 0;
    text-align: left;
    line-height: .9;
    margin-bottom: 30px;
    
    strong {
      font-family: 'GothamBold';
    }
  }

  @media (max-width: 768px) {
    width: calc(90vw - 100px);
    padding: 10px 50px;
    margin-top: 10px;

    &.mobile {
      display: flex;
    }

    &.web {
      display: none;
    }
    
    h2 {
      font-size: 30px;
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
  border-top: 10px solid #343434;
  background-color: #2a2a2a;
  width: 100%;
  height: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    background-size: cover;
    background-position: bottom center;
    padding: 0 15px;
    width: calc(100% - 30px);
    

    div {
      margin-right: 0;
    }

    p {
      color: black;
    }
  }
`

export const ActiveThumbnail = styled.div`
  width: 715px;
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
`

export const ActiveThumbnailViolator = styled.div`
  background-color: #5c0f8b;
  width: 290px;
  height: 200px;
  padding-left: 40px;
  cursor: pointer;

  h2 {
    font-size: 54px;
    text-transform: uppercase;
    line-height: .9;

    strong {
      font-family: 'GothamBold';
    }
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
`