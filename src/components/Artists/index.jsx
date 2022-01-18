import { FaMicrophone } from 'react-icons/fa'

import * as S from './styled'

const Artists = ({ artists }) => (
  <S.Wrapper>
    <S.Title>
      Top Artists <FaMicrophone size={24} color="#1EB955" />
    </S.Title>

    <S.List>
      {artists.map((artist) => (
        <S.ListItem key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <img src={artist.images[0].url} alt={artist.name} />
          </a>
          <S.Name>{artist.name}</S.Name>
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Artists
