import styled from 'styled-components'

export const SkewedContainer = styled.a`
  border: ${props => props.small ? 2 : 4}px solid white;
  transform: skew(-16deg, 0);
  padding: ${props => props.small ? '5px' : '15px'};
  // width: ${props => props.small ? '110px' : '250px'};
  width: ${props => props.width !== undefined ? props.width : (props.small ? '180px' : '250px')};
  text-transform: uppercase;
  background-color: ${props => props.bgColor || 'transparent'};
  text-align: center !important;
  cursor: pointer;
  display: block;
  text-decoration: none;
  margin-top: ${props => props.marginTop || 0}px;

  @media (max-width: 900px) {
    // width: 50%;
    padding: 10px 20px;
    border: 2px solid white;
    text-align: center !important;
    margin: 0 auto;
    margin-top: ${props => props.marginTop || 0}px;
  }

`

export const SkewedContent = styled.div`
  transform: skew(16deg, 0);
  color: ${props => props.color || 'white'};
  font-size: ${props => props.small ? 15 : 20}px !important;
  text-align: center !important;
  width: 100%;

  @media (max-width: 900px) {
    font-size: 14px !important;
    text-align: center !important;

    span {
      font-size: 14px !important;
    }
  }
`