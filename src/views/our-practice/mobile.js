import React from 'react'
import Logo from '../../static/images/white-logo.png'
import { GothamLight, GothamBold, Didot } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'
import { AllDarkGray, AllPurple, HorizontalDivider, BlackBox, Flex } from './styled'
import { Box } from 'gestalt'

const MobileOurPractice = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <AllPurple>
        <Flex alignItems="center">
          <h2><GothamBold>{t('ourpractice.heading')}</GothamBold></h2>
        </Flex>
        <Box width="100%" display="flex" justifyContent="center">
          <Box width="100%" display="flex" alignItems="center" justifyContent="center" direction="column">
            <BlackBox>
              <GothamLight size={44}>{t('ourpractice.lifesciences.heading')}</GothamLight>
            </BlackBox>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop={12} direction="column">
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section1').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section2').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section3').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section4').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section5').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.lifesciences.section6').toUpperCase())}</GothamBold></Box>
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
          <Box maxWidth={1310} display="flex" alignItems="start" justifyContent="center" direction="column">
            <BlackBox>
              <GothamLight size={44}>{t('ourpractice.healthcare.heading')}</GothamLight>
            </BlackBox>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop={12} direction="column">

              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section6').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section1').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section2').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section3').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section4').toUpperCase())}</GothamBold></Box>
              <Box width="90vw" marginBottom={6}><GothamBold size={25}>{parse(t('ourpractice.healthcare.section5').toUpperCase())}</GothamBold></Box>
            </Box>
          </Box>
        </Box>
      </AllPurple>
    </>
  )
}

export default MobileOurPractice;