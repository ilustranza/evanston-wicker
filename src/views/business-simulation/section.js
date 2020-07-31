import React from 'react'
import { Blackbox, HorizontalDivider, FadeBox, SectionContainer } from './styled'
import { useTranslation } from 'react-i18next';
import { Box } from 'gestalt' 
import { GothamLight } from '../../components/Font/styled'

import simES from '../../static/images/sim/sim_es.jpeg'
import simEN from '../../static/images/sim/sim_en.jpeg'

const Section = ({ image, heading, children, boxFirst, manyLines, largeBox, textAlign, simAccess }) => {

  const { t, i18n } = useTranslation()
  const language = i18n.language

  return (
      <FadeBox 
        style={{
          display: 'flex', 
          flexDirection: boxFirst ? 'row' : 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <SectionContainer>
          <Blackbox>
            <HorizontalDivider className="hDivider_blackbox" borderWidth={4} size="45px" marginBottom={65} marginTop={85} />
            <h2><GothamLight textAlign={textAlign}>{heading}</GothamLight></h2>
            {children}
          </Blackbox>
          <div>
            <img 
              src={image} 
              alt={heading}
              style={{
                marginLeft: boxFirst ? 40 : 0,
                marginRight: boxFirst ? 0 : 40,
              }}
            />
            {simAccess ? (<a href="#">
              <img 
                src={language === 'es' ? simES : simEN} 
                alt={heading}
                style={{
                  height: '50px',
                  width: 'auto',
                }}
              />
            </a>) : ("")}
            
          </div>

        </SectionContainer>
      </FadeBox>
  )
}

export default Section
