import React, { useState } from 'react'
import { GothamLight, GothamBold } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import { MainContainer, HorizontalDivider, AllDarkGray, ActiveThumbnail, ActiveThumbnailViolator, MainThumbnail, RightThumbnail, LeftThumbnail } from './styled'
import { Box, TapArea } from 'gestalt'
import Section from './section'
import parse from 'html-react-parser'
import Media from 'react-media'
import SkewedButton from '../../components/SkewedButton'

import howImage from '../../static/images/sim/img_works.png'
import whyImage from '../../static/images/sim/img_ebs.png'
import simImage from '../../static/images/sim/img_sim.png'

import howImageT from '../../static/images/sim/thumbnail_works.jpg'
import whyImageT from '../../static/images/sim/thumbnail_ebs.jpg'
import simImageT from '../../static/images/sim/thumbnail_sim.jpg'

const BusinessSimulation = () => {
  const { t, i18n } = useTranslation()
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeThumb, setActiveThumb] = useState(0)

  const slides = [
    {
      selector: "business.howEBSworks.selector",
      content: "business.howEBSworks.slug",
      image: howImage,
      thumbnail: howImageT,
    },
    {
      selector: "business.whyEBS.selector",
      content: "business.whyEBS.slug",
      image: whyImage,
      thumbnail: whyImageT,
    },
    {
      selector: "business.ourSIM.selector",
      content: "business.ourSIM.slug",
      image: simImage,
      thumbnail: simImageT,
      simAccess: "business.ourSIM.simAccess"
    }
  ]

  const rightThumbnailIdx = activeThumb - 1 < 0 ? slides.length -1 : activeThumb - 1;
  const leftThumbnailIdx = activeThumb + 1 > slides.length - 1 ? 0 : activeThumb + 1;
  const thumbFontSize = i18n.language === 'es' ? 38 : 54;
  const lineHeight = i18n.language === 'es' ? 1.1 : .9;

  return (
    <>
      <MainContainer>
        {/*<Box display="flex" alignItems="center" width="100%">
          <HorizontalDivider className="hDivider" flex borderWidth={4} marginRight={65} />
          <h2>
            <GothamBold textAlign={'center'} width='100%'>
              {parse(t('business.heading').toUpperCase())}
            </GothamBold>
          </h2>
        </Box>*/}

        <Media queries={{ small: { maxWidth: 900 } }}>
          {matches => matches.small ? (
            <Box width='100%' display="flex" alignItems="center" width="100%">
              <h2 style={{ width: '100%', textAlign: 'center' }}><GothamBold textAlign={'center'}>{parse(t('business.heading').toUpperCase())}</GothamBold></h2>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" width="100%">
              <HorizontalDivider flex borderWidth={4} marginRight={65} />
              <h2><GothamBold>{parse(t('business.heading').toUpperCase())}</GothamBold></h2>
            </Box>
          )}
        </Media>
        <Section textAlign={'center'} image={slides[activeSlide].image} boxFirst={activeSlide !== 1} heading={parse(t(slides[activeSlide].selector).toUpperCase())}>
          {parse(t(slides[activeSlide].content))}
        </Section>
      </MainContainer>


      <AllDarkGray>
      
        <RightThumbnail>
          <img src={slides[rightThumbnailIdx].thumbnail} style={{ height: 215 }} alt={slides[rightThumbnailIdx].selector} />
          <ActiveThumbnailViolator>
            <HorizontalDivider flex borderWidth={2} marginTop={15} size="30px" />
            <h2><GothamLight>{parse(t(slides[rightThumbnailIdx].selector).toUpperCase())}</GothamLight></h2>
          </ActiveThumbnailViolator>
        </RightThumbnail>




        <MainThumbnail>

          <Box marginEnd={5}>
            <TapArea onTap={() => {
              if(activeThumb - 1 < 0){
                setActiveThumb(slides.length - 1)
              } else {
                setActiveThumb(activeThumb - 1)
              }
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="29.5px" height="42.5px">
                <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                d="M19.904,37.010 L3.481,19.802 L19.904,2.594 "/>
              </svg>
            </TapArea>
          </Box>


          <ActiveThumbnail onClick={() => setActiveSlide(activeThumb)}>
            <img src={slides[activeThumb].thumbnail} style={{ width: 516 }} alt={slides[activeThumb].selector} />
            <ActiveThumbnailViolator>
              <HorizontalDivider 
                flex borderWidth={2}
                marginTop={20}
                marginBottom={20}
                size="30px"
              />
              <h2 style={{ 
                margin: '0',
                marginBottom: '20px',
                lineHeight: '1em'
              }}>
                <GothamLight>{parse(t(slides[activeThumb].selector).toUpperCase())}</GothamLight>
              </h2>

              <SkewedButton width={'120px'} color="white" bgColor="#540b80" marginBottom={15}>
                <GothamBold textAlign={'center'} textTransform={'initial'} letterSpacing={'1pt'} lineHeight={'1em'} margin={'0'} padding={'0'}>{t('home.readmore')}</GothamBold>
              </SkewedButton>

            </ActiveThumbnailViolator>
          </ActiveThumbnail>


          <Box marginStart={5}>
            <TapArea onTap={() => {
              if(activeThumb + 1 > slides.length - 1){
                setActiveThumb(0)
              } else {
                setActiveThumb(activeThumb + 1)
              }
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="32.5px" height="49.5px">
                <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                d="M3.219,40.839 L20.046,23.599 L3.219,6.360 "/>
              </svg>
            </TapArea>
          </Box>

        </MainThumbnail>





        <LeftThumbnail>
          <img src={slides[leftThumbnailIdx].thumbnail} style={{ height: 215 }} alt={slides[leftThumbnailIdx].selector} />
          <ActiveThumbnailViolator>
            <HorizontalDivider flex borderWidth={2} marginTop={15} size="30px" />
            <h2><GothamLight>{parse(t(slides[leftThumbnailIdx].selector).toUpperCase())}</GothamLight></h2>
          </ActiveThumbnailViolator>
        </LeftThumbnail>
      </AllDarkGray>
    </>
  )
}

export default BusinessSimulation;