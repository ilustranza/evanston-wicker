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

        <SkewedButton width={'120px'} color="white" bgColor="#540b80" marginTop={15}>
          <GothamBold textAlign={'center'} textTransform={'initial'} letterSpacing={'1pt'} lineHeight={'1em'} margin={'0'} padding={'0'}>{t('home.readmore')}</GothamBold>
        </SkewedButton>
        
      </ThumbnailBanner>
    </ThumbnailContainer>
  )
}

export default Thumbnail