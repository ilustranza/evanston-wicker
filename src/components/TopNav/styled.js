import styled from 'styled-components'
import styles from '../../constants/styles'

export const NavItem = styled.a`
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: ${props => props.active ? styles.PRIMARY : '#6e6e6e'};
  font-size: 14px;
  transition: color 300ms;

  &:hover {
    color: ${styles.PRIMARY}
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`

export const MobileNavItem = styled.a`
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 20px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const MobileNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
`