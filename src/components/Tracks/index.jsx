import { FaMusic } from 'react-icons/fa'

import * as S from './styled'

const Tracks = ({ tracks }) => (
  <S.Wrapper>
    <S.Title>
      Top Tracks <FaMusic size={24} color="#1EB955" />
    </S.Title>

    <S.List>
      {tracks.map((track) => (
        <S.ListItem key={track.id}>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <img
              src={track.album.images[0].url}
              width={track.album.images[0].width}
              height={track.album.images[0].height}
              alt={track.name}
            />
          </a>
          <S.Name>{track.name}</S.Name>
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Tracks
