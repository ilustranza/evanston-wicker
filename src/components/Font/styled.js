import styled from 'styled-components'

import GothamBoldFont from '../../static/fonts/Gotham-Bold.otf'
import GothamBookFont from '../../static/fonts/Gotham-Book.ttf'
import GothamLightFont from '../../static/fonts/Gotham-Light.otf'
import DidotFont from '../../static/fonts/dobos___.ttf'

export const GothamBold = styled.span`
  @font-face {
    font-family: 'GothamBold';
    src: url(${GothamBoldFont}) format('opentype');
  }
  font-size: ${props => `${props.size}px` || 'inherit'};
  font-family: 'GothamBold';
  color: ${props => props.color || 'inherit'};
  line-height: ${props => props.lineHeight || 'unset'};
  letter-spacing: ${props => props.letterSpacing || 'unset'};
  margin: ${props => props.margin || 'unset'};
  padding: ${props => props.padding || 'unset'};
  margin-bottom: ${props => props.marginBottom || 'unset'};
  text-transform: ${props => props.textTransform || 'initial'};
  text-align: ${props => props.textAlign || 'initial'};
`

export const GothamBook = styled.span`
  @font-face {
    font-family: 'GothamBook';
    src: url(${GothamBookFont}) format('truetype');
  }
  font-size: ${props => `${props.size}px` || 'inherit'};
  font-family: 'GothamBook';
  color: ${props => props.color || 'inherit'};
  line-height: ${props => props.lineHeight || 'unset'};
`

export const GothamLight = styled.span`
  @font-face {
    font-family: 'GothamLight';
    src: url(${GothamLightFont}) format('opentype');
  }
  color: ${props => props.color || 'inherit'};
  font-size: ${props => `${props.size}px` || 'inherit'};
  font-family: 'GothamLight';
  line-height: ${props => props.lineHeight || 'unset'};
  letter-spacing: ${props => props.letterSpacing || 'unset'};
  margin: ${props => props.margin || 'unset'};
  padding: ${props => props.padding || 'unset'};
  margin-bottom: ${props => props.marginBottom || 'unset'};
  text-transform: ${props => props.textTransform || 'initial'};
  text-align: ${props => props.textAlign || 'initial'};

  span {
    font-family: 'GothamBold';
    background-color: #8a49b2;
    padding: 0.1em 0.25em;
  }
`

export const Didot = styled.span`
  @font-face {
    font-family: 'DidotLH';
    src: url(${DidotFont}) format('truetype');
  }
  color: ${props => props.color || 'inherit'};
  font-size: ${props => `${props.size}px` || 'inherit'};
  font-family: 'DidotLH';
  line-height: ${props => props.lineHeight || 'unset'};
`