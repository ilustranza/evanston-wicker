import React from 'react'
import { 
  AllDarkGray, 
  OtherContainer, 
  AllPurple, 
  ShadowText, 
  Right, 
  CarouselWrapper, 
  Carousel1Container, 
  Carousel2Container, 
  Carousel3Container, 
  Carousel1Heading, 
  Left, 
  CarouselHeading, 
  LeftArrow, 
  RightArrow,
  CarouselSocialBar,
  VerticalDivider
} from './styled'
import Logo from '../../static/images/white-logo.png'
import SkewedButton from '../../components/SkewedButton'
import { GothamLight, GothamBold, GothamBook, Didot } from '../../components/Font/styled'
import { Carousel } from 'react-responsive-carousel'
import { HorizontalDivider } from '../../components/Footer/styled'
import { useTranslation } from 'react-i18next'
import practiveImg from '../../static/images/home/img01.png'
import parse from 'html-react-parser'

import facebookIcon  from '../../static/images/facebook.png'
import linkedinIcon  from '../../static/images/linkedin.png'

const Home = () => {

  const { t } = useTranslation()

  return (
    <>
      <CarouselWrapper>
        <Carousel
          statusFormatter={() => null}
          infiniteLoop
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            true && (
              <LeftArrow onClick={onClickHandler}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.5px" height="42.5px">
                  <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                  d="M19.904,37.010 L3.481,19.802 L19.904,2.594 "/>
                </svg>
                <GothamBook color="white" size={16}>{t('home.prev')}</GothamBook>
              </LeftArrow>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
              true && (
                <RightArrow onClick={onClickHandler}>
                  <GothamBook color="white" size={16}>{t('home.next')}</GothamBook>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.5px" height="49.5px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M3.219,40.839 L20.046,23.599 L3.219,6.360 "/>
                  </svg>
                </RightArrow>
              )
          }
          renderIndicator={() => null}
          showThumbs={false}
        >
          <div>
            <Carousel1Container>
              <Carousel1Heading>
                <HorizontalDivider width={80} marginBottom={50} borderWidth={6} marginLeft={11}/>
                <CarouselHeading><GothamLight color="white" lineHeight=".3">{t('home.carousel.slide1.line1')}</GothamLight></CarouselHeading><br />
                <CarouselHeading><GothamBold color="white">{t('home.carousel.slide1.line2')}</GothamBold></CarouselHeading>
                <div style={{ height: 45, width: 1}} />
                <SkewedButton color="white" bgColor="#540b80" href="/what-we-do"><GothamBold>{t('home.readmore')}</GothamBold></SkewedButton>
              </Carousel1Heading>
              <CarouselSocialBar>
                <VerticalDivider height={150} marginBottom={30} />
                <div><img src={facebookIcon} alt="facebook" /></div>
                <div><img src={linkedinIcon} alt="linkedin" /></div>
                <VerticalDivider height={150} marginTop={20}/>
              </CarouselSocialBar>
            </Carousel1Container>
          </div>
          <div>
            <Carousel2Container>
              <Carousel1Heading>
                <HorizontalDivider width={80} marginBottom={50} borderWidth={6} marginLeft={11}/>
                <CarouselHeading><GothamLight color="white" lineHeight=".3">{t('home.carousel.slide2.line1')}</GothamLight></CarouselHeading><br />
                <CarouselHeading smallHeading><GothamBold color="white">{t('home.carousel.slide2.line2')}</GothamBold></CarouselHeading>
                <div style={{ height: 45, width: 1}} />
                <SkewedButton color="white" bgColor="#540b80" href="/business-simulation"><GothamBold>{t('home.readmore')}</GothamBold></SkewedButton>
              </Carousel1Heading>
            </Carousel2Container>
          </div>
          <div>
            <Carousel3Container>
              <Carousel1Heading>
                <HorizontalDivider width={80} marginBottom={50} borderWidth={6} marginLeft={11}/>
                <CarouselHeading><GothamLight color="white" lineHeight=".3">{t('home.carousel.slide3.line1')}</GothamLight></CarouselHeading>
                <div style={{ height: 45, width: 1}} />
                <SkewedButton color="white" bgColor="#540b80" href="/us"><GothamBold>{t('home.readmore')}</GothamBold></SkewedButton>
              </Carousel1Heading>
            </Carousel3Container>
          </div>
        </Carousel>
      </CarouselWrapper>
      <AllDarkGray>
        <div>
          {parse(t('whatwedo.secondaryBanner'))}
          <Didot className="tilde">~</Didot>
          <img src={Logo} width="120px" height="31px" alt="logo" />
        </div>
      </AllDarkGray>
      <AllPurple>
        <Right>
          <h2>
            <GothamLight size="90px">{t('home.ourpractice.line1')}</GothamLight>
            <GothamBold size="90px">{t('home.ourpractice.line2')}</GothamBold>
          </h2>
          <ul>
            <li><GothamLight>{t('ourpractice.lifesciences.heading')}</GothamLight></li>
            <li><GothamLight>{t('ourpractice.healthcare.heading')}</GothamLight></li>
          </ul>
          <SkewedButton href="/our-practice" color="white" bgColor="#540b80">
            <GothamBold>{t('home.readmore')}</GothamBold>
          </SkewedButton>
        </Right>
        <Left>
          <img src={practiveImg} alt="our practice" />
        </Left>
      </AllPurple>
      <OtherContainer>
        <div className="leftColumn">
          <ShadowText>
            {t('home.banner')}
          </ShadowText>
          <HorizontalDivider width={700} marginBottom={45} borderWidth={4}/>
          <img src={Logo} width="120px" height="31px" alt="logo" />
        </div>
        <div className="rightColumn">
          <HorizontalDivider width={60} marginBottom={20} borderWidth={4}/>
          <h2><GothamBold size="45">{t('home.carousel.slide3.line1').toUpperCase()}</GothamBold></h2>
          <SkewedButton small href="/us" color="white" bgColor="transparent">
            <GothamBold>{t('home.readmore')}</GothamBold>
          </SkewedButton>
        </div>
      </OtherContainer>
    </>
  )
}

export default Home;