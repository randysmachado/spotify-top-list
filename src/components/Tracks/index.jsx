import * as S from './styled'
import Link from 'next/link'

const Tracks = ({ tracks }) => (
  <S.Wrapper>
    <S.Title> Top Tracks </S.Title>

    <S.List>
      {tracks.map((track) => (
        <S.ListItem key={track.id}>
          <Link href={track.external_urls.spotify}>
            <a target="_blank" rel="nofollow noreferrer noopener">
              <img
                src={track.album.images[0].url}
                width={track.album.images[0].width}
                height={track.album.images[0].height}
                alt={track.name}
              />
            </a>
          </Link>
          <S.Name>{track.name}</S.Name>
          <S.Player controls src={track.preview_url} />
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Tracks
