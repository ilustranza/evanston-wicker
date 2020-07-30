import React from 'react'
import Logo from '../../static/images/white-logo.png'
import { GothamLight, GothamBold, Didot } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'
import { AllDarkGray, AllPurple, HorizontalDivider, BlackBox, Flex } from './styled'
import { Box } from 'gestalt'
import HoverCard from './hover-card'
import Media from 'react-media'
import medServices from '../../static/images/practice/life/banner01.jpg'
import dist from '../../static/images/practice/life/banner02.jpg'
import pharmaceuticals from '../../static/images/practice/life/banner03.jpg'
import diagnostics from '../../static/images/practice/life/banner04.jpg'
import wholesalers from '../../static/images/practice/life/banner05.jpg'
import trade from '../../static/images/practice/life/banner06.jpg'
import MobileOurPractice from './mobile'
import clinics from '../../static/images/practice/health/banner02.jpg'
import optical from '../../static/images/practice/health/banner03.jpg'
import hospitals from '../../static/images/practice/health/banner04.jpg'
import drugstores from '../../static/images/practice/health/banner05.jpg'
import consumer from '../../static/images/practice/health/banner06.jpg'
import ngo from '../../static/images/practice/health/banner01.jpg'

const OurPractice = () => {
  const { t } = useTranslation()
  
  return (
    <Media queries={{ small: { maxWidth: 900 } }}>
      {matches =>
        matches.small ? (
          <MobileOurPractice />
        ) : (
          <>
            <AllPurple>
              <Flex alignItems="center">
                <HorizontalDivider borderWidth={4} marginRight={65} />
                <h2><GothamBold>{t('ourpractice.heading')}</GothamBold></h2>
              </Flex>
              <Box width="100%" display="flex" justifyContent="center">
                <Box maxWidth={1310} display="flex" alignItems="start" justifyContent="center" direction="column">
                  <BlackBox>
                    <GothamLight size={44}>{t('ourpractice.lifesciences.heading').toUpperCase()}</GothamLight>
                  </BlackBox>




                  
                  <Box display="flex" alignItems="center" justifyContent="center" marginTop={12}>
                    <HoverCard 
                      size={{
                        width: 235,
                        height: 488,
                        marginRight: 20
                      }}
                      image={medServices}
                      text={t('ourpractice.lifesciences.section6')}
                      textStyle={{
                        fontFamily: 'GothamLight',
                        color: 'white',
                        fontSize: 30,
                      }}
                    />
                    <Box display="flex" direction="column">
                      <Box display="flex">
                        <HoverCard 
                          size={{
                            width: 235,
                            height: 235,
                            marginRight: 20
                          }}
                          image={dist}
                          text={t('ourpractice.lifesciences.section1')}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 21,
                          }}
                        />
                        <HoverCard 
                          size={{
                            width: 545,
                            height: 235
                          }}
                          image={pharmaceuticals}
                          text={parse(t('ourpractice.lifesciences.section2'))}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 35,
                            fontWeight: 'bold'
                          }}
                        />
                      </Box>
                      <Box display="flex" marginTop={5}>
                        <HoverCard 
                          size={{
                            width: 545,
                            height: 235,
                            marginRight: 20
                          }}
                          image={diagnostics}
                          text={parse(t('ourpractice.lifesciences.section3'))}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 35,
                            fontWeight: 'bold'
                          }}
                        />
                        <HoverCard 
                          size={{
                            width: 235,
                            height: 235
                          }}
                          image={wholesalers}
                          text={t('ourpractice.lifesciences.section4')}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 24
                          }}
                        />
                      </Box>
                    </Box>
                    <HoverCard 
                      size={{
                        width: 235,
                        height: 488,
                        marginLeft: 20
                      }}
                      image={trade}
                      text={parse(t('ourpractice.lifesciences.section5'))}
                      textStyle={{
                        fontFamily: 'GothamLight',
                        color: 'white',
                        fontSize: 25
                      }}
                    />
                  </Box>




                </Box>
              </Box>
            </AllPurple>
            <AllDarkGray>
              <div>
                {parse(t('whatwedo.secondaryBanner'))}
                <Didot className="tilde">~</Didot>
                <img src={Logo} width="120px" height="31px" alt="logo" />
              </div>
            </AllDarkGray>
            <AllPurple>
              <Box width="100%" display="flex" justifyContent="center">
                <Box maxWidth={1310} display="flex" alignItems="start" justifyContent="center" direction="column">
                  <BlackBox>
                    <GothamLight size={44}>{t('ourpractice.healthcare.heading').toUpperCase()}</GothamLight>
                  </BlackBox>
                  <Box display="flex" alignItems="center" justifyContent="center" marginTop={12}>
                    <HoverCard 
                      size={{
                        width: 235,
                        height: 488,
                        marginRight: 20
                      }}
                      image={ngo}
                      text={t('ourpractice.healthcare.section6')}
                      textStyle={{
                        fontFamily: 'GothamLight',
                        color: 'white',
                        fontSize: 30,
                      }}
                    />
                    <Box display="flex" direction="column">
                      <Box display="flex">
                        <HoverCard 
                          size={{
                            width: 235,
                            height: 235,
                            marginRight: 20
                          }}
                          image={clinics}
                          text={t('ourpractice.healthcare.section1')}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 25,
                          }}
                        />
                        <HoverCard 
                          size={{
                            width: 545,
                            height: 235
                          }}
                          image={hospitals}
                          text={parse(t('ourpractice.healthcare.section2'))}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 35,
                            fontWeight: 'bold'
                          }}
                        />
                      </Box>
                      <Box display="flex" marginTop={5}>
                        <HoverCard 
                          size={{
                            width: 545,
                            height: 235,
                            marginRight: 20
                          }}
                          image={optical}
                          text={parse(t('ourpractice.healthcare.section3'))}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 35,
                            fontWeight: 'bold'
                          }}
                        />
                        <HoverCard 
                          size={{
                            width: 235,
                            height: 235
                          }}
                          image={drugstores}
                          text={t('ourpractice.healthcare.section4')}
                          textStyle={{
                            fontFamily: 'GothamLight',
                            color: 'white',
                            fontSize: 28
                          }}
                        />
                      </Box>
                    </Box>
                    <HoverCard 
                      size={{
                        width: 235,
                        height: 488,
                        marginLeft: 20
                      }}
                      image={consumer}
                      text={parse(t('ourpractice.healthcare.section5'))}
                      textStyle={{
                        fontFamily: 'GothamLight',
                        color: 'white',
                        fontSize: 25
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </AllPurple>
          </>
        )
      }
    </Media>
  )
}

export default OurPractice;