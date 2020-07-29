import React from 'react'
import {MobileNav, MobileNavItem} from './styled'
import { links } from '../../constants/links'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import { useLocation } from "react-router-dom"
import { Box } from 'gestalt'

const MobileTopNav = () => {
  const { t } = useTranslation()
  const location = useLocation();

  return(
    <MobileNav>
      {links.map(link => {
        const label = parse(t(link.label, 'ASD'))
        return (
          <Box key={link.url} display="flex" direction="column" alignItems="center" justifyContent="center">
            <MobileNavItem 
              active={link.url === location.pathname} 
              key={link.url} href={link.url} 
            >
              {label}
            </MobileNavItem>
          </Box>
        )
      }
      )}
    </MobileNav>
  )
}

export default MobileTopNav