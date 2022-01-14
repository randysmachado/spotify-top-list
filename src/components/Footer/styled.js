import styled from 'styled-components'

export const Wrapper = styled.footer`
  background-color: #13192c;
  color: #fff;
  padding: 1rem 0;
  margin-top: 3rem;
`

export const PoweredBy = styled.p`
  color: #fff;
  font-size: 1.6rem;
  text-align: center;

  a {
    color: #1eb955;
    text-decoration: none;

    &:hover {
      filter: brightness(80%);
    }
  }
`
