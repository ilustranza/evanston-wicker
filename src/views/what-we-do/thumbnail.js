import React, { useState } from 'react'
import { ThumbnailContainer, ThumbnailBanner, HorizontalDivider } from './styled'

const Thumbnail = ({ image, title, isActive }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <ThumbnailContainer 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      active={isHovered || isActive}
    >
      <img src={image} alt={title} style={{ left: 0, height: '100%' }} />
      <ThumbnailBanner>
        <HorizontalDivider borderWidth={2} size="30px" marginBottom={15}/>
        {title}
      </ThumbnailBanner>
    </ThumbnailContainer>
  )
}

export default Thumbnail