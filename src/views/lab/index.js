import React, { useState } from 'react'
import { GothamLight, GothamBold, Didot } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import { 
  MainContainer, 
  HorizontalDivider, 
  ImageItem, 
  Blackbox, 
  CarouselContainer, 
  MemberContainer, 
  CarouselItem, 
  LeftArrow, 
  RightArrow,
  FadeBox
} from './styled'
import { AllDarkGray } from '../our-practice/styled'
import { Box, TapArea } from 'gestalt'
import Media from 'react-media'
import parse from 'html-react-parser'
import Logo from '../../static/images/white-logo.png'

import gerardT from '../../static/images/lab/thumbnail_gerard.png'
import gerardoT from '../../static/images/lab/thumbnail_gerardo.png'
import kurtT from '../../static/images/lab/thumbnail_kurt.png'
import mauricioT from '../../static/images/lab/thumbnail_mauricio.png'
import vivianaT from '../../static/images/lab/thumbnail_viviana.png'

import gerard from '../../static/images/lab/img_gerard.jpg'
import gerardo from '../../static/images/lab/img_gerardo.jpg'
import kurt from '../../static/images/lab/img_kurt.jpg'
import mauricio from '../../static/images/lab/img_mauricio.jpg'
import viviana from '../../static/images/lab/img_viviana.jpg'

const LabBoard = () => {
  const { t } = useTranslation()
  const [activeSlide, setActiveSlide] = useState(0)
  const [showCarousel, setShowCarousel] = useState(true)

  const slides = [
    {
      name: <><GothamLight>Gerardo</GothamLight><br/><strong>Gonzalez Yapor</strong></>,
      image: gerardo,
      slug: parse(t('lab.gerardo'))
    },
    {
      name: <><GothamLight>Kurt</GothamLight><br/><strong>Wicker</strong></>,
      image: kurt,
      slug: parse(t('lab.kurt'))
    },
    {
      name: <><GothamLight>Viviana</GothamLight><br/><strong>Alcocer</strong></>,
      image: viviana,
      slug: parse(t('lab.viviana'))
    },
    {
      name: <><GothamLight>Gérard</GothamLight><br/><strong>Schoor</strong></>,
      image: gerard,
      slug: parse(t('lab.gerard'))
    },
    {
      name: <><GothamLight>Mauricio</GothamLight><br/><strong>Uribe</strong></>,
      image: mauricio,
      slug: parse(t('lab.mauricio'))
    }
  ]

  const goToSlide = (slide) => {
    setShowCarousel(false)
    setActiveSlide(slide)
  }

  return (
    <>
      <MainContainer>
        <Box display="flex" alignItems="center" width="100%">
          <Media queries={{ small: { maxWidth: 900 } }}>
            {matches =>
              !matches.small && (
                <HorizontalDivider flex borderWidth={4} marginRight={65} />
              )}
          </Media>
          <h2>
            <GothamBold>
              {parse(t('lab.heading').toUpperCase())}
            </GothamBold><br/>
            <GothamBold size={24}>
              {parse(t('lab.subheading').toUpperCase())}
            </GothamBold>
          </h2>
        </Box>
        {showCarousel ? (
          <CarouselContainer>
            <ImageItem onClick={() => goToSlide(0)}>
              <img src={gerardoT} alt="Gerardo Gonzalez Yapor" />
              <h2><GothamLight lineHeight={'1.5em'}>Gerardo</GothamLight><br/><strong style={{ 'line-height': '1.5em'}} >Gonzalez Yapor</strong></h2>
            </ImageItem>
            <ImageItem onClick={() => goToSlide(1)}>
              <img src={kurtT} alt="Kurt Wicker" />
              <h2><GothamLight lineHeight={'1.5em'}>Kurt</GothamLight><br/><strong>Wicker</strong></h2>
            </ImageItem>
            <ImageItem onClick={() => goToSlide(2)}>
              <img src={vivianaT} alt="Viviana Alcocer" />
              <h2><GothamLight lineHeight={'1.5em'}>Viviana</GothamLight><br/><strong>Alcocer</strong></h2>
            </ImageItem>
            <ImageItem onClick={() => goToSlide(3)}>
              <img src={gerardT} alt="Gérard Schoor" />
              <h2><GothamLight lineHeight={'1.5em'}>Gérard</GothamLight><br/><strong>Schoor</strong></h2>
            </ImageItem>
            <ImageItem onClick={() => goToSlide(4)}>
              <img src={mauricioT} alt="Mauricio Uribe" />
              <h2><GothamLight lineHeight={'1.5em'}>Mauricio</GothamLight><br/><strong>Uribe</strong></h2>
            </ImageItem>
          </CarouselContainer>
        ) : (
          <>
            <CarouselItem>
              <LeftArrow>
                <TapArea 
                  onTap={() => {
                    activeSlide - 1 < 0 ? setActiveSlide(slides.length - 1) : setActiveSlide(activeSlide - 1)
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="66.5px" height="122.5px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M61.501,6.007 L9.437,60.000 L61.501,113.993 "/>
                  </svg>
                </TapArea>
              </LeftArrow>
              <MemberContainer>
                <FadeBox><img src={slides[activeSlide].image} alt="Member portrait" /></FadeBox>
                <Blackbox className="web">
                  <HorizontalDivider borderWidth={4} marginTop={85} marginBottom={50} marginRight={65} size="45px" />
                  <h2>{slides[activeSlide].name}</h2>
                  {slides[activeSlide].slug}
                </Blackbox>
              </MemberContainer>
              <RightArrow>
                <TapArea
                  onTap={() => {
                    activeSlide - 1 < 0 ? setActiveSlide(slides.length - 1) : setActiveSlide(activeSlide - 1)
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="67.5px" height="123.5px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M2.531,114.288 L55.008,60.500 L2.531,6.712 "/>
                  </svg>
                </TapArea>
              </RightArrow>
            </CarouselItem>
            <Blackbox className="mobile">
              <HorizontalDivider borderWidth={4} marginTop={85} marginBottom={50} marginRight={65} size="45px" />
              <h2>{slides[activeSlide].name}</h2>
              {slides[activeSlide].slug}
            </Blackbox>
          </>
        )}
      </MainContainer>
      <AllDarkGray>
        <div style={{ }}>
          <GothamLight>{parse(t('whatwedo.secondaryBanner'))}</GothamLight>
          <Didot className="tilde">~</Didot>
          <img src={Logo} width="120px" height="31px" alt="logo" />
        </div>
      </AllDarkGray>
    </>
  )
}

export default LabBoard;