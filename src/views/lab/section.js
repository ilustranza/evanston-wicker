import React from 'react'
import { Blackbox, HorizontalDivider } from './styled'
import { Box } from 'gestalt' 
import { GothamLight } from '../../components/Font/styled'

const Section = ({ image, heading, children, boxFirst, manyLines, largeBox }) => {
  return (
    <Box>
      <div 
        style={{
          display: 'flex', 
          flexDirection: boxFirst ? 'row' : 'row-reverse',
          alignItems: 'center'
        }}
      >
        <Blackbox>
          <HorizontalDivider borderWidth={4} size="45px" marginBottom={65} marginTop={85} />
          <h2><GothamLight>{heading}</GothamLight></h2>
          {children}
        </Blackbox>
        <img 
          src={image} 
          alt={heading}
          style={{
            width: 620,
            marginLeft: boxFirst ? 40 : 0,
            marginRight: boxFirst ? 0 : 40,
          }}
        />
      </div>
    </Box>
  )
}

export default Section
