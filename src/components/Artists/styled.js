import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #13192c;
  color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;

  img {
    border-radius: 1rem;
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3rem;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
`

export const ListItem = styled.li`
  a {
    transition: filter 0.3s;

    &:hover {
      filter: brightness(60%);
    }
  }
`

export const Name = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
`
