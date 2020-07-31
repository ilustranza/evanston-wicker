import React, { useState } from 'react'
import { HeaderContainer, HeaderWrapper, VerticalDivider, Right, Locale } from './styled'
import TopNav from '../TopNav'
import MobileTopNav from '../TopNav/mobile'
import { useTranslation } from 'react-i18next';
import { Box } from 'gestalt'
import { GothamBold } from '../../components/Font/styled'
import cookie from 'react-cookies'
import Media from 'react-media';
import Hamburger from 'hamburger-react'
import { ColorLogo, WhiteLogo } from '../Icons'

const Header = () => {
  const { i18n } = useTranslation(['translation']);
  const [isOpen, setOpen] = useState(false)
  const changeLanguage = code => {
    i18n.changeLanguage(code, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <a href="/"><ColorLogo /></a>
        <Right >
          <Media queries={{ small: { maxWidth: 900 } }}>
            {matches =>
              matches.small ? (
                <Box marginEnd={5}>
                  <div style={{ display: isOpen ? 'none' : 'block'}}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </div>
                  {isOpen &&
                    <Box 
                      dangerouslySetInlineStyle={{ 
                        __style: 
                          { 
                            backgroundColor: '#190a2b'
                          }
                      }}
                      width="100vw"
                      height="100vh"
                      position="fixed"
                      botton
                      left
                      right
                      top
                      display="flex"
                      alignItems="center"
                      justifyContent="start"
                      direction="column"
                    >
                      <Box 
                        width="100%" 
                        display="flex" 
                        justifyContent="between" 
                        marginEnd={5} 
                        marginTop={8}
                        marginStart={5} 
                        marginBottom={12} 
                        height={60}
                        alignItems="flex-start"
                        boxSizing="border-box"
                      >
                        <WhiteLogo />
                        <Hamburger color="#ffffff" toggled toggle={setOpen} />
                      </Box>
                      <MobileTopNav />
                      <Box display="inlineBlock" marginTop={12}>
                        <Locale onClick={() => {
                          cookie.save('locale', 'en')
                          changeLanguage('en')
                          setOpen(false)
                        }}>
                          <GothamBold size={18} color={i18n.language === 'en' ? '#5c0f8b' : 'white'}>ENG</GothamBold>
                        </Locale> <GothamBold size={18} color="white"> - </GothamBold> 
                        <Locale onClick={() => {
                          cookie.save('locale', 'es')
                          changeLanguage('es')
                          setOpen(false)
                        }}>
                          <GothamBold size={18} color={i18n.language === 'es' ? '#5c0f8b' : 'white'}>ESP</GothamBold>
                        </Locale>
                      </Box>
                    </Box>
                  }
                </Box>
              ) : (
                <>
                  <TopNav />
                  <VerticalDivider height={58} marginRight={25} />
                  <Box display="inlineBlock" marginEnd={12}>
                    <Locale onClick={() => {
                      cookie.save('locale', 'en')
                      changeLanguage('en')
                    }}>
                      <GothamBold color={i18n.language === 'en' ? '#5c0f8b' : 'inherit'}>ENG</GothamBold>
                    </Locale> <GothamBold> - </GothamBold> 
                    <Locale onClick={() => {
                      cookie.save('locale', 'es')
                      changeLanguage('es')
                    }}>
                      <GothamBold color={i18n.language === 'es' ? '#5c0f8b' : 'inherit'}>ESP</GothamBold>
                    </Locale>
                  </Box>
                </>
              )
            }
          </Media>
        </Right>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header