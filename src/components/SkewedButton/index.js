import React from 'react'
import { SkewedContainer, SkewedContent } from  './styled'

const SkewedButton = ({ color, bgColor, children, href, small }) => {  
  return (
    <SkewedContainer small bgColor={bgColor} href={href || '#'}>
      <SkewedContent small color={color}>{children}</SkewedContent>
    </SkewedContainer>
  )
}

export default SkewedButton