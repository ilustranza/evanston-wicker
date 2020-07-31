import React, { useState } from 'react'
import { ThumbnailContainer, ThumbnailBanner, HorizontalDivider } from './styled'
import { GothamBold } from '../../components/Font/styled'
import SkewedButton from '../../components/SkewedButton'
import { useTranslation } from 'react-i18next'

const Thumbnail = ({ image, title, isActive }) => {
  
  const [isHovered, setHover] = useState(false);
  const { t } = useTranslation()

  return (
    <ThumbnailContainer 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      active={isHovered || isActive}
    >
      <img src={image} alt={title} style={{ left: 0, height: '100%' }} />
      <ThumbnailBanner>
        <HorizontalDivider borderWidth={2} size="30px" marginTop={15} marginBottom={15}/>
        {title}

        <SkewedButton width={'120px'} color="white" bgColor="#540b80" marginTop={15}>
          <GothamBold textAlign={'center'} textTransform={'initial'} letterSpacing={'1pt'} lineHeight={'1em'} margin={'0'} padding={'0'}>{t('home.readmore')}</GothamBold>
        </SkewedButton>

      </ThumbnailBanner>
    </ThumbnailContainer>
  )
}

export default Thumbnail