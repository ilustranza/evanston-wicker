import React from 'react'
import { SkewedContainer, SkewedContent } from  './styled'

const SkewedButton = ({ color, bgColor, children, href, small, width, marginTop }) => {  
  return (
    <SkewedContainer small bgColor={bgColor} href={href || '#'} width={width} marginTop={marginTop}>
      <SkewedContent small color={color}>{children}</SkewedContent>
    </SkewedContainer>
  )
}

export default SkewedButton