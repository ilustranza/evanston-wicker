import React from 'react'
import { GothamLight, GothamBold } from '../../components/Font/styled'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'
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

import image01 from '../../static/images/us/img01.png'
import image02 from '../../static/images/us/img02.png'
import image03 from '../../static/images/us/img03.png'

const KeyDifferentiators = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  return (
    <>
      <EBSContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={image02} boxFirst heading={t('us.section1.title')}>
            <p>
              <GothamLight>
                {t('us.section1.line1')}
              </GothamLight>
            </p>
            <p>
              <GothamBold>
                {t('us.section1.line2')}
              </GothamBold>
            </p>
            <p>
              <GothamLight>
                {t('us.section1.line3')}<br/>
                {t('us.section1.line4')}<br/>
                {t('us.section1.line5')}
              </GothamLight>
            </p>
            <p>
              <GothamBold>
                {t('us.section1.line6')}
              </GothamBold>
            </p>
            <p>
              <GothamLight>
                {t('us.section1.line7')}
              </GothamLight>
            </p>
          </Section>
        </Box>
      </EBSContainer>
      <LabContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={image01} boxFirst={false} heading={t('us.section2.title')}>
            <h5>
              <GothamLight>
                {t('us.section2.line1')}
              </GothamLight>
            </h5>
          </Section>
        </Box>
      </LabContainer>
      <EmphasisContainer>
        <Box width="100%" display="flex" justifyContent="center">
          <Section image={image03} boxFirst heading={t('us.section3.title')} manyLines>
            <p>
              <GothamLight>
                {parse(t('us.section3.line1'), 'ASD')}
              </GothamLight>
            </p>
            <p>
              <GothamLight>
                {parse(t('us.section3.line2'), 'ASD')}
              </GothamLight>
            </p>
            <p>
              <GothamLight>
                {parse(t('us.section3.line3'), 'ASD')}<br/>
              </GothamLight>
              <GothamBold margin={'0 0 0 1em'}>
                {parse(t('us.section3.line3A'), 'ASD')}<br/>
              </GothamBold>
              <GothamBold margin={'0 0 0 1em'}>
                {parse(t('us.section3.line3B'), 'ASD')}
              </GothamBold>
            </p>
            <p>
              <GothamLight>
                {parse(t('us.section3.line4'), 'ASD')}
              </GothamLight>
            </p>
            <p>
              <GothamLight>
                {parse(t('us.section3.line5'), 'ASD')}
              </GothamLight>
            </p>
          </Section>
        </Box>
      </EmphasisContainer>
    </>
  )
}

export default KeyDifferentiators;