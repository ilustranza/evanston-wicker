import React from 'react'
import FooterLogo from '../../static/images/white-logo.png'
import { FooterContainer, FooterWrapper, FooterNav, Left, Right, SecondaryFooter, SecondaryFooterWrapper, HorizontalDivider } from './styled'
import { plainLinks } from '../../constants/links'
import { useTranslation } from 'react-i18next'
import { GothamBold } from '../../components/Font/styled'
import Media from 'react-media'
import facebookIcon  from '../../static/images/facebook.png'
import linkedinIcon  from '../../static/images/linkedin.png'
import { Box } from 'gestalt'
import { WhiteLogo } from '../Icons'

const Footer = () => {

  const { t } = useTranslation()

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
                        <div><img src={facebookIcon} alt="facebook" /></div>
                        <div><img src={linkedinIcon} alt="linkedin" /></div>
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
                  <div><img src={facebookIcon} alt="facebook" /></div>
                  <div><img src={linkedinIcon} alt="linkedin" /></div>
                </Right>
              )}
          </Media>
        </FooterWrapper>
      </FooterContainer>
      <SecondaryFooter>
        <SecondaryFooterWrapper>
          <GothamBold className='footer_paragraph1'>{t('footer.copyright')}</GothamBold>
          <GothamBold className='footer_paragraph2' textTransform={'uppercase'}>{t('footer.tandc')} | {t('footer.privacyPolicy')} | {t('footer.privacyNotice')}</GothamBold>
        </SecondaryFooterWrapper>
      </SecondaryFooter>
    </>
  )
}

export default Footer