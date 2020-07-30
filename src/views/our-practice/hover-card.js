import React, { useState } from 'react'
import {FadeBox} from './styled'

const HoverCard = ({ size, image, text, textStyle, active }) => {

  var [isHovered, setIsHovered] = useState(false)

  if (active) {
    isHovered = true
  }

  return (
    <div style={{...size, backgroundColor: '#d8aff1'}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      {!isHovered && 
        <FadeBox style={{height: '100%', width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <span style={{...textStyle, textTransform: 'uppercase', textAlign: 'center'}}>{text}</span>
        </FadeBox>
      }
      {isHovered && 
        <FadeBox style={{ height: '100%', width: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover', display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <div style={{...textStyle, padding: 10, textTransform: 'uppercase', backgroundColor: '#8a49b2', opacity: .8, fontFamily: 'GothamBold', textAlign: 'right' }}>{text}</div>
        </FadeBox>
      }
    </div>
  )
}

export default HoverCard;