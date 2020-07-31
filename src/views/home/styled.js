import styled from 'styled-components'
import graySuit from '../../static/images/gray-suit.png'
import carousel1 from '../../static/images/home/header.jpg'
import carousel2 from '../../static/images/home/img_slide02.jpg'
import carousel3 from '../../static/images/home/img_slide03.jpg'
import bg from '../../static/images/home/texture01.png'
import otherBg from '../../static/images/home/banner01.jpg'

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
    margin-right: 100px;
  }

  p {
    text-transform: uppercase;
    color: white;
    font-size: 28px;
    display: block;
    letter-spacing: 5px;
    font-family: 'GothamLight';

    strong {
      font-family: 'GothamBold';
    }
  }

  span {
    text-transform: uppercase;
    color: white;
    font-size: 28px;
    display: block;

    &.tilde {
      font-size: 60px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 900px) {
    border-top: 6px solid #343434;
    height: auto;
    background-size: cover;
    background-position: bottom center;
    padding: 0 15px;
    width: calc(100% - 30px);

    div {
      margin-right: 0;

      img {
        display: none;
      }
    }

    p {
      color: black;
      font-size: 20px !important;
    }

    span.tilde {
      display: none;
    }
  }
`

export const AllPurple = styled.div`
  background-color: #5c0f8b;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(100vw - 140px);
  height: 515px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 70px;
  
  h2 {
    margin-right: 100px;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: normal;
  }

  ul {
    color: white;
    font-size: 42px;
    margin-top: 0;

    span {
      text-transform: uppercase;
      color: white;
      font-size: 35px;
      display: block;

      &.tilde {
        font-size: 80px;
        margin: 35px 0;
      }
    }
  }

  span {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    display: block;

    &.tilde {
      font-size: 80px;
      margin: 35px 0;
    }
  }

  @media (max-width: 900px) {
    height: auto;
    background-size: cover;
    padding: 0 20px;
    flex-direction: column;
    width: calc(100vw - 40px);
    padding-bottom: 40px;

    h2 {
      line-height: .3;

      span{
        font-size: 40px !important;
      }
    }
  }
` 

export const Right = styled.div`
  padding-left: 200px;
  padding-right: 50px;
  width: 50%;

  h2 {

    span {
      font-size: 60px;
      line-height: .9;
      display: block;
    } 

  }

  li span{
    text-transform: initial;
  }

  @media (max-width: 900px) {
    padding: 0 !important;
    width: 100%;
    text-align: center;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h2 {

      width: 100%;
      text-align: center;
      padding: 0 !important;
      margin: 0 !important;
      margin-bottom: 30px !important;

      * {
        width: 100%;
        text-align: center;
      }

      span {
        font-size: 60px;
        line-height: .9;
      } 
      
    }

    ul {

      display: inline-block;
      width: auto;
      text-align: center;

      li {
        text-align: center;
      }

    }



  }
`

export const Left = styled.div`
  width: 50%;

  img {
    width: 500px;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    width: calc(100%);

    img {
      margin-top: 20px;
      width: calc(100vw - 100px);
      height: calc(100vw - 100px);
    }
  }

  
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 600px;
`

export const CarouselHeading = styled.span`
  font-size: ${props => props.smallHeading ? 37 : 75}px;
  line-height: .7;

  @media (max-width: 900px) {
    span {
      font-size: ${props => props.smallHeading ? 24 : 50}px;
      line-height: .2;
    }
  }
`

export const Carousel1Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${carousel1});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 8px;
  padding-left: 50px;
  text-transform: uppercase;
  height: 600px;

  @media (max-width: 900px) {
    padding-left: 0;
    justify-content: center;
    background-position: 60% 100%;

    & > div {
      width: 100%;
      align-items: center !important;
    }
  }
`

export const CarouselSocialBar = styled.div`
  position: absolute;
  right: 100px;
  display: flex;
  flex-direction: column;
  width: 25px;
  align-items: center;    

  img {
    width: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const Carousel2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${carousel3});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 8px;
  padding-left: 50px;
  text-transform: uppercase;
  height: 600px;

  @media (max-width: 900px) {
    padding-left: 0;
    justify-content: center;
    background-position: 60% 100%;

    & > div {
      width: 100%;
      align-items: center !important;
    }
  }
`

export const Carousel3Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${carousel2});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 8px;
  padding-left: 50px;
  text-transform: uppercase;
  height: 600px;

  @media (max-width: 900px) {
    padding-left: 0;
    justify-content: center;
    background-position: 60% 100%;

    & > div {
      width: 100%;
      align-items: center !important;
    }
  }
`

export const Carousel1Heading = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`

export const OtherContainer = styled.div`
  width: calc(100% - 300px);
  height: 280px;
  background-image: url(${otherBg});
  padding: 100px 150px;
  display: flex;

  h2 {
    width: 75%;
    color: white;
    margin-top: 0;
  }

  .leftColumn {

    & > div.readmore_button {
      display: none;
    }

  }

  @media (max-width: 900px) {
    padding: 50px 20px;
    width: calc(100vw - 40px);
    height: 180px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: bottom center;

    h2 {
      width: 100%;
      text-align: center;
    }

    .leftColumn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & > div {
        display: none;
      }

      & > div.readmore_button {
        display: initial;
        margin-top: 45px;
        text-align: center;
      }

      img {
        margin-top: 15px;
      }
    }

    .rightColumn {
      display: none;
    }

  }
`

export const ShadowText = styled.h2`
  font-size: 35px;
  font-family: "GothamBold";
  color: white;
  text-shadow: 2.5px 4.33px 5px rgba(52, 52, 52, 0.9);
  max-width: 1020px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`

export const LeftArrow = styled.div`
  position: absolute;
  top: 510px;
  left: 330px;
  z-index: 1;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 900px) {
    left: 15px;
  }
`

export const RightArrow = styled.div`
  position: absolute;
  top: 507px;
  left: 550px;
  z-index: 1;
  width: ${props => props.width || '110px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 900px) {
    left: auto;
    right: 15px;
  }
`

export const VerticalDivider = styled.div`
  height: ${props => props.height || 65}px;
  width: 2px;
  border-left-width: ${props => `${props.borderWidth || 2}px`};
  border-left-style: solid;
  border-left-color: ${props => props.color || 'white'};
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
`