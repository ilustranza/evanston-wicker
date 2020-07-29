import styled from 'styled-components'

import ebsBg from '../../static/images/diff/bg_ebs.png'
import labBg from '../../static/images/diff/bg_lab.png'
import emBg from '../../static/images/diff/bg_enphasis.png'
import comBg from '../../static/images/diff/bg_comprehensive.png'
import proBg from '../../static/images/diff/bg_process.png'

export const EBSContainer = styled.div`
  width: 100%;
  height: 660px;
  background-image: url(${ebsBg});
  background-size: contain;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  
  h2 {
    margin-right: 100px;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 10px;
  }

  @media (max-width: 768px) {
    height: auto;
    background-size: cover;

    h2 {
      font-size: 30px;
      letter-spacing: 0;
      margin-right: 0;
    }
  }
`

export const LabContainer = styled.div`
  background-color: #2a2a2a;
  background-image: url(${labBg});
  background-size: contain;
  width: 100%;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 900px) {
    background-size: cover;
    height: auto;
  }
`

export const EmphasisContainer = styled.div`
  width: 100%;
  height: 618px;
  background-image: url(${emBg});
  background-size: contain;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;

  @media (max-width: 900px) {
    background-size: cover;
    height: auto;
  }
`

export const ComprehensiveContainer = styled.div`
  background-color: #2a2a2a;
  background-image: url(${comBg});
  background-size: contain;
  width: 100%;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 900px) {
    background-size: cover;
    height: auto;
  }
`

export const ProcessContainer = styled.div`
  width: 100%;
  height: 618px;
  background-image: url(${proBg});
  background-size: contain;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;

  @media (max-width: 900px) {
    background-size: cover;
    height: auto;
  }
`

export const Blackbox = styled.div`
  width: ${props => props.largeBox ? 'calc(585px - 40px)' : 'calc(505px - 40px)'};
  background-color: rgba(0,0,0,.8);
  padding-left: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  text-transform: uppercase;

  h2 {
    margin: 0;
    letter-spacing: ${props => props.largeBox ? '-1px' : '8px'};
    font-size: 48px;
  }

  h3 {
    font-size: 36px;
    font-weight: normal;
    margin: 0;
  }

  h4 {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  }

  h5 {
    font-size: 21px;
    font-weight: normal;
    margin: 0;
  }

  @media (max-width: 900px) {
    width: 90vw;

    h2 {
      font-size: 37px;
    }

    h3 {
      font-size: 30px;
    }

    h4 {
      font-size:18px
    }
  }
`

export const HorizontalDivider = styled.div`
  flex: ${props => props.flex ? 'auto' : 'inherit'};
  margin-top: ${props => props.marginTop || 0}px;
  height: 2px;
  border-bottom-width: ${props => `${props.borderWidth || 2}px`};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.color || 'white'};
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  width: ${props => props.size || 'auto'};
`