import React, { useState } from 'react'
import { ThumbnailContainer, ThumbnailBanner} from './styled'

const Thumbnail = ({ image, title, isActive }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <ThumbnailContainer 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      active={isHovered || isActive}
    >
      <img src={image} alt={title} style={{ left: 0, width: 300 }} />
      <ThumbnailBanner>
        {title}
      </ThumbnailBanner>
    </ThumbnailContainer>
  )
}

export default Thumbnail