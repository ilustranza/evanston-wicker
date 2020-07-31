import React, { useState } from 'react'
import {Nav, NavItem} from './styled'
import { links } from '../../constants/links'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import { useLocation } from "react-router-dom"
import { Box } from 'gestalt'

const TopNav = () => {
  const { t } = useTranslation()
  const location = useLocation();
  const [setChevron] = useState(false)

  return(
    <Nav>
      {links.map(link => {
        const label = parse(t(link.label, 'ASD'))
        return (
          <Box key={link.url} marginEnd={5} display="flex" direction="column" alignItems="center">
            <NavItem 
              active={link.url === location.pathname} 
              key={link.url} href={link.url} 
              onMouseEnter={() => setChevron(true)} 
              onMouseLeave={() => setChevron(false)}
            >
              {label}
              {/*               
              {showChevron && 
                <Box>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="23px" height="11px">
                    <path fillRule="evenodd"  fill="rgb(92, 15, 139)"
                    d="M22.090,0.417 L11.462,11.013 L0.834,0.417 L22.090,0.417 Z"/>
                  </svg>
                </Box>
              } */}
            </NavItem>
          </Box>
        )
      }
      )}
    </Nav>
  )
}

export default TopNav