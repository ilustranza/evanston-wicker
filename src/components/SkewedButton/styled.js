import styled from 'styled-components'

export const SkewedContainer = styled.a`
  border: ${props => props.small ? 2 : 4}px solid white;
  transform: skew(-16deg, 0);
  padding: ${props => props.small ? '5px' : '15px'};
  width: ${props => props.small ? '110px' : '250px'};
  text-transform: uppercase;
  background-color: ${props => props.bgColor || 'transparent'};
  text-align: center;
  cursor: pointer;
  display: block;
  text-decoration: none;

  @media (max-width: 900px) {
    width: 50%;
    padding: 20px;
    border: 2px solid white;
  }
`

export const SkewedContent = styled.div`
  transform: skew(16deg, 0);
  color: ${props => props.color || 'white'};
  font-size: ${props => props.small ? 15 : 20}px !important;

  @media (max-width: 900px) {
    font-size: 14px !important;

    span {
      font-size: 14px !important;
    }
  }
`