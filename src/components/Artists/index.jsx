import * as S from './styled'
import Link from 'next/link'

const Artists = ({ artists }) => (
  <S.Wrapper>
    <S.Title> Top Artists </S.Title>

    <S.List>
      {artists.map((artist) => (
        <S.ListItem key={artist.id}>
          <Link href={artist.external_urls.spotify}>
            <a target="_blank" rel="nofollow noreferrer noopener">
              <img src={artist.images[0].url} alt={artist.name} />
            </a>
          </Link>
          <S.Name>{artist.name}</S.Name>
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Artists
