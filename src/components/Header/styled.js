import styled from 'styled-components'
import styles from '../../constants/styles'

export const HeaderContainer = styled.div`
  display: flex;
  background: white;
  width: 100vw;
  height: 75px;
  border-bottom: 5px solid ${styles.SECONDARY};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 7px 6.16px 0.84px rgba(85, 14, 128, 0.9);
  z-index: 10;
`

export const HeaderWrapper = styled.div`
  max-width: 1720px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;

  @media (max-width: 900px) {
    margin-left: 20px;
  }
`

export const VerticalDivider = styled.div`
  height: ${props => props.height || 65}px;
  margin-right: ${props => props.marginRight || 0}px;
  width: 1px;
  border-left: 3px solid ${styles.PRIMARY};
`
export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Locale = styled.div`
  display: inline;
  cursor: pointer;
  font-size: 14px;
  
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`