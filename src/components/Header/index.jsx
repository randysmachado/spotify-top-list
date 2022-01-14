import { FaSpotify } from 'react-icons/fa'

import * as S from './styled'

const Header = () => (
  <S.Wrapper>
    <S.Title>
      Top List Spotify <FaSpotify size={36} color="#1EB955" />
    </S.Title>
  </S.Wrapper>
)

export default Header
