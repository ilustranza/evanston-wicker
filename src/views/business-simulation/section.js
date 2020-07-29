import React from 'react'
import { Blackbox, HorizontalDivider, FadeBox, SectionContainer } from './styled'
import { Box } from 'gestalt' 
import { GothamLight } from '../../components/Font/styled'

const Section = ({ image, heading, children, boxFirst, manyLines, largeBox }) => {
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
            <h2><GothamLight>{heading}</GothamLight></h2>
            {children}
          </Blackbox>
          <img 
            src={image} 
            alt={heading}
            style={{
              marginLeft: boxFirst ? 40 : 0,
              marginRight: boxFirst ? 0 : 40,
            }}
          />
        </SectionContainer>
      </FadeBox>
  )
}

export default Section
