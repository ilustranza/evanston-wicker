import React from 'react'
// import Logo from '../../static/images/white-logo.png'
import { GothamLight, GothamBold } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'
import { AllDarkGray, AllPurple, HorizontalDivider, BlackBox, Flex } from './styled'
import { Box } from 'gestalt'
import HoverCard from './hover-card'
import medServices from '../../static/images/practice/life/banner01.jpg'
import dist from '../../static/images/practice/life/banner02.jpg'
import pharmaceuticals from '../../static/images/practice/life/banner03.jpg'
import diagnostics from '../../static/images/practice/life/banner04.jpg'
import wholesalers from '../../static/images/practice/life/banner05.jpg'
import trade from '../../static/images/practice/life/banner06.jpg'
import clinics from '../../static/images/practice/health/banner02.jpg'
import optical from '../../static/images/practice/health/banner03.jpg'
import hospitals from '../../static/images/practice/health/banner04.jpg'
import drugstores from '../../static/images/practice/health/banner05.jpg'
import consumer from '../../static/images/practice/health/banner06.jpg'
import ngo from '../../static/images/practice/health/banner01.jpg'

const MobileOurPractice = () => {
  const { t } = useTranslation()
  
  return (
    <>


      <AllPurple>
        <Flex justifyContent="center" alignItems="center">
          <h2><GothamBold textAlign={'center'}>{t('ourpractice.heading').toUpperCase()}</GothamBold></h2>
        </Flex>

        <Box width="100%" display="flex" justifyContent="center">
          <Box width="100%" display="flex" alignItems="center" justifyContent="center" direction="column">

            <BlackBox>
              <GothamLight textAlign={'center'} size={24}>{t('ourpractice.lifesciences.heading').toUpperCase()}</GothamLight>
            </BlackBox>




            
            <Box width="100%" display="flex" direction="column" marginTop={10} marginBottom={5}>
              <Box width="100%" display="flex" direction="column">
                <HoverCard 
                  size={{
                    width: '100%',
                    height: 235,
                  }}
                  active={true}
                  image={pharmaceuticals}
                  text={parse(t('ourpractice.lifesciences.section2'))}
                  textStyle={{
                    fontFamily: 'GothamLight',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
                <Box display="flex" marginTop={4}>
                  <HoverCard 
                    size={{
                      width: '50%',
                      height: 235,
                      marginRight: 15
                    }}
                    active={true}
                    image={dist}
                    text={t('ourpractice.lifesciences.section1')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12,
                    }}
                  />
                  <HoverCard 
                    size={{
                      width: '50%',
                      height: 235
                    }}
                    active={true}
                    image={wholesalers}
                    text={t('ourpractice.lifesciences.section4')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12
                    }}
                  />
                </Box>
                <HoverCard 
                  size={{
                    width: '100%',
                    height: 235,
                    marginTop: 15
                  }}
                  active={true}
                  image={diagnostics}
                  text={parse(t('ourpractice.lifesciences.section3'))}
                  textStyle={{
                    fontFamily: 'GothamLight',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
                <Box display="flex"  marginTop={4} direction="row">
                  <HoverCard 
                    size={{
                      width: '100%',
                      height: 488,
                      marginRight: 15
                    }}
                    active={true}
                    image={trade}
                    text={parse(t('ourpractice.lifesciences.section5'))}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12
                    }}
                  />
                  <HoverCard 
                    size={{
                      width: '100%',
                      height: 488,
                    }}
                    active={true}
                    image={medServices}
                    text={t('ourpractice.lifesciences.section6')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12,
                    }}
                  />
                </Box>
              </Box>
            </Box>




          </Box>
        </Box>
      </AllPurple>



      <AllDarkGray>
        <div>
          {parse(t('whatwedo.secondaryBanner'))}
        </div>
      </AllDarkGray>


      <AllPurple>
        <Box width="100%" display="flex" justifyContent="center">
          <Box width="100%" display="flex" alignItems="center" justifyContent="center" direction="column">

            <BlackBox width="100%" >
              <GothamLight textAlign={'center'} size={24}>{t('ourpractice.healthcare.heading').toUpperCase()}</GothamLight>
            </BlackBox>



            <Box width="100%" display="flex" direction="column" marginTop={10} marginBottom={5}>
              <Box width="100%" display="flex" direction="column">
                <HoverCard 
                  size={{
                    width: '100%',
                    height: 235,
                  }}
                  active={true}
                  image={optical}
                  text={parse(t('ourpractice.healthcare.section2'))}
                  textStyle={{
                    fontFamily: 'GothamLight',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
                <Box display="flex" marginTop={4}>
                  <HoverCard 
                    size={{
                      width: '50%',
                      height: 235,
                      marginRight: 15
                    }}
                    active={true}
                    image={clinics}
                    text={t('ourpractice.healthcare.section1')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12,
                    }}
                  />
                  <HoverCard 
                    size={{
                      width: '50%',
                      height: 235
                    }}
                    active={true}
                    image={drugstores}
                    text={t('ourpractice.healthcare.section4')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12
                    }}
                  />
                </Box>
                <HoverCard 
                  size={{
                    width: '100%',
                    height: 235,
                    marginTop: 15
                  }}
                  active={true}
                  position={'center right'}
                  image={hospitals}
                  text={parse(t('ourpractice.healthcare.section3'))}
                  textStyle={{
                    fontFamily: 'GothamLight',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
                <Box display="flex"  marginTop={4} direction="row">
                  <HoverCard 
                    size={{
                      width: '100%',
                      height: 488,
                      marginRight: 15
                    }}
                    active={true}
                    image={consumer}
                    text={parse(t('ourpractice.healthcare.section5'))}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12
                    }}
                  />
                  <HoverCard 
                    size={{
                      width: '100%',
                      height: 488,
                    }}
                    active={true}
                    image={ngo}
                    text={t('ourpractice.healthcare.section6')}
                    textStyle={{
                      fontFamily: 'GothamLight',
                      color: 'white',
                      fontSize: 12,
                    }}
                  />
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      </AllPurple>
    </>
  )
}

export default MobileOurPractice;