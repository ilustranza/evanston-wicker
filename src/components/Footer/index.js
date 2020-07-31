import React from 'react'
import { FooterContainer, FooterWrapper, FooterNav, Left, Right, SecondaryFooter, SecondaryFooterWrapper, HorizontalDivider } from './styled'
import { plainLinks } from '../../constants/links'
import { useTranslation } from 'react-i18next'
import { GothamBold } from '../../components/Font/styled'
import Media from 'react-media'
import facebookIcon  from '../../static/images/facebook.png'
import linkedinIcon  from '../../static/images/linkedin.png'
import { Box } from 'gestalt'
import { WhiteLogo } from '../Icons'

import avisoES  from '../../static/files/AvisoPrivacidad.pdf'
import avisoEN  from '../../static/files/PrivacyNotice.pdf'

const Footer = () => {

  const { t, i18n } = useTranslation()
  const privacyURL = i18n.language === 'en' ? avisoEN : avisoES

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Left>
            <Box display="flex" justifyContent="between">
              <Media queries={{ small: { maxWidth: 900 } }}>
                {matches =>
                  matches.small ? (
                    <>
                      <WhiteLogo width={150} height={50}/>
                      <Right>
                        <div><a href="#"><img src={facebookIcon} alt="facebook" /></a></div>
                        <div><a href="https://www.linkedin.com/company/evanston-wicker/"><img src={linkedinIcon} alt="linkedin" /></a></div>
                      </Right>
                    </>
                  ) : (
                    <WhiteLogo width={180} height={50}/>
                  )}
              </Media>
            </Box>
            <Media queries={{ small: { maxWidth: 900 } }}>
              {matches =>
                matches.small ? (
                  <HorizontalDivider width={200} marginTop={30}/>
                ) : (
                  <HorizontalDivider width={300} marginTop={30}/>
                )}
            </Media>
            
            <FooterNav>
              {plainLinks.map(link => <a href={link.url} key={link.url}><GothamBold>{t(link.label)}</GothamBold></a>)}
            </FooterNav>
          </Left>
          <Media queries={{ small: { maxWidth: 900 } }}>
            {matches =>
              !matches.small && (
                <Right>
                  <div><a href="#"><img src={facebookIcon} alt="facebook" /></a></div>
                  <div><a href="https://www.linkedin.com/company/evanston-wicker/"><img src={linkedinIcon} alt="linkedin" /></a></div>
                </Right>
              )}
          </Media>
        </FooterWrapper>
      </FooterContainer>
      <SecondaryFooter>
        <SecondaryFooterWrapper>
          <GothamBold className='footer_paragraph1'>{t('footer.copyright')}</GothamBold>
          <a href={privacyURL} key={privacyURL}><GothamBold className='footer_paragraph2' textTransform={'uppercase'}>{t('footer.tandc')} | {t('footer.privacyPolicy')} | {t('footer.privacyNotice')}</GothamBold></a>
        </SecondaryFooterWrapper>
      </SecondaryFooter>
    </>
  )
}

export default Footer