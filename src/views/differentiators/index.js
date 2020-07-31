import React from 'react'
import { GothamLight, GothamBold } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'
import Media from 'react-media'
import { 
  EBSContainer, 
  LabContainer, 
  EmphasisContainer, 
  ComprehensiveContainer,
  ProcessContainer,
  HorizontalDivider 
} from './styled'
import { Box } from 'gestalt'
import Section from './section'

import ebsImage from '../../static/images/diff/img_ebs.png'
import labImage from '../../static/images/diff/img_lab.png'
import emImage from '../../static/images/diff/img_enphasis.png'
import comImage from '../../static/images/diff/img_comprehensive.png'
import proImage from '../../static/images/diff/img_process.png'

const KeyDifferentiators = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language

  var horizontalDivider = ""



  return (
    <>
      <EBSContainer>
          <Media queries={{ small: { maxWidth: 900 } }}>
            {matches => matches.small ? (
              <Box width='100%' display="flex" alignItems="center" width="100%">
                <h2 style={{ width: '100%', textAlign: 'center' }}><GothamBold textAlign={'center'}>{t('differentiators.heading').toUpperCase()}</GothamBold></h2>
              </Box>
            ) : (
              <Box display="flex" alignItems="center" width="100%">
                <HorizontalDivider flex borderWidth={4} marginRight={65} />
                <h2><GothamBold>{t('differentiators.heading').toUpperCase()}</GothamBold></h2>
              </Box>
            )}
          </Media>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={ebsImage} boxFirst heading={t('differentiators.section1.title')}>
            <h4>
              <GothamLight>
                {t('differentiators.section1.line1')}
              </GothamLight>
            </h4>
            <h3>
              <GothamLight>
                {t('differentiators.section1.line2')}
              </GothamLight>
            </h3>
          </Section>
        </Box>
      </EBSContainer>
      <LabContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={labImage} boxFirst={false} heading={t('differentiators.section2.title')}>
            <h3>
              <GothamLight>
                {t('differentiators.section2.line1')}
              </GothamLight>
            </h3>
            <h4>
              <GothamLight>
                {t('differentiators.section2.line2')}
              </GothamLight>
            </h4>
            <h5>
              <GothamLight size={18}>
                {t('differentiators.section2.line3')}
              </GothamLight>
            </h5>
          </Section>
        </Box>
      </LabContainer>
      <EmphasisContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={emImage} boxFirst heading={t('differentiators.section3.title')} manyLines>
            <h4>
              <GothamLight>
                {t('differentiators.section3.line1')}
              </GothamLight>
            </h4>
            <h3>
              <GothamLight>
                {t('differentiators.section3.line2')}
              </GothamLight>
            </h3>
            <h5>
              <GothamLight>
                {t('differentiators.section3.line3')}
              </GothamLight>
            </h5>
            <h5>
              <GothamLight>
                {t('differentiators.section3.line4')}
              </GothamLight>
            </h5>
            <h5>
              <GothamLight>
                {t('differentiators.section3.line5')}
              </GothamLight>
            </h5>
          </Section>
        </Box>
      </EmphasisContainer>
      <ComprehensiveContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section 
            image={comImage} 
            boxFirst={false} 
            heading={t('differentiators.section4.title')}
            largeBox  
          >
            <h4>
              <GothamLight>
                {t('differentiators.section4.line1')}
              </GothamLight>
            </h4>
            <h3>
              <GothamLight>
                {t('differentiators.section4.line2')}
              </GothamLight>
            </h3>
          </Section>
        </Box>
      </ComprehensiveContainer>
      <ProcessContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={proImage} boxFirst heading={t('differentiators.section5.title')} manyLines>
            <h4>
              <GothamLight size={language === 'es' ? 18 : 30}>
                {parse(t('differentiators.section5.line1'), "ASD")}
              </GothamLight>
            </h4>
            <h3>
              <GothamLight size={language === 'es' ? 18 : 30}>
                {parse(t('differentiators.section5.line2'), "ASD")}
              </GothamLight>
            </h3>
            <h5>
              <GothamLight size={language === 'es' ? 36 : 30}>
                {parse(t('differentiators.section5.line3'), "ASD")}
              </GothamLight>
            </h5>
            <h5>
              <GothamLight size={language === 'es' ? 18 : 30}>
                {parse(t('differentiators.section5.line4'), "ASD")}<br/>
                {parse(t('differentiators.section5.line5'), "ASD")}
              </GothamLight>
            </h5>
          </Section>
        </Box>
      </ProcessContainer>
    </>
  )
}

export default KeyDifferentiators;