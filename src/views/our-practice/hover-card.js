import React, { useState } from 'react'
import {FadeBox} from './styled'

const HoverCard = ({ size, image, text, textStyle }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={{...size, backgroundColor: '#d8aff1'}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      {!isHovered && 
        <FadeBox style={{height: '100%', width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <span style={{...textStyle, textTransform: 'uppercase', textAlign: 'center'}}>{text}</span>
        </FadeBox>
      }
      {isHovered && 
        <FadeBox style={{ height: '100%', width: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover', display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <div style={{ padding: 10, textTransform: 'uppercase', backgroundColor: '#8a49b2', opacity: .8, fontFamily: 'GothamBold', fontSize: 21, textAlign: 'right' }}>{text}</div>
        </FadeBox>
      }
    </div>
  )
}

export default HoverCard;