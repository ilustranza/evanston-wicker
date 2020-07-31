import React, { useState } from 'react'
import {FadeBox} from './styled'

const HoverCard = ({ size, image, text, textStyle, active, position }) => {

  var [isHovered, setIsHovered] = useState(false)
  var width = ''

  if (active) {
    isHovered = true
    width = '100%'
  }

  return (
    <div style={{...size, backgroundColor: '#d8aff1'}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      {!isHovered && 
        <FadeBox style={{height: '100%', width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <span style={{...textStyle, width, textTransform: 'uppercase', textAlign: 'center'}}>{text}</span>
        </FadeBox>
      }
      {isHovered && 
        <FadeBox style={{ height: '100%', width: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: position, display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <div style={{...textStyle, fontSize: '16px', width, padding: 10, textTransform: 'uppercase', backgroundColor: '#8a49b2', opacity: .8, fontFamily: 'GothamLight', textAlign: 'right', fontWeight: 'bold' }}>{text}</div>
        </FadeBox>
      }
    </div>
  )
}

export default HoverCard;