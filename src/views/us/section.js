import React from 'react'
import { Blackbox, HorizontalDivider } from './styled'
import { Box } from 'gestalt' 
import { GothamBold } from '../../components/Font/styled'
import Media from 'react-media'

const Section = ({ image, heading, children, boxFirst, manyLines, largeBox }) => {
  return (
    <Box display="flex" alignItems="center">
      <Media queries={{ small: { maxWidth: 900 } }}>
        {matches =>
          matches.small ? (
            <div 
              style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                width: '90vw',
              }}
            >
              <Blackbox largeBox={largeBox}>
                <HorizontalDivider borderWidth={4} size="50px" marginBottom={20} marginTop={20} />
                <h2><GothamBold>{heading}</GothamBold></h2>
                {children}
              </Blackbox>
              <img 
                src={image} 
                alt={heading}
                style={{
                  width: '90vw',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            </div>
          ) : (
            <div 
              style={{
                display: 'flex', 
                flexDirection: boxFirst ? 'row' : 'row-reverse',
                alignItems: 'center'
              }}
            >
              <Blackbox largeBox={largeBox}>
                <HorizontalDivider borderWidth={4} size="50px" marginBottom={40} marginTop={20} />
                <h2><GothamBold>{heading}</GothamBold></h2>
                {children}
              </Blackbox>
              <img 
                src={image} 
                alt={heading}
                style={{
                  width: 560
                }}
              />
            </div>
          )
        }
      </Media>
      
    </Box>
  )
}

export default Section
