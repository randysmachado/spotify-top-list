import * as S from './styled'
import { FaHeart } from 'react-icons/fa'

const Footer = () => (
  <S.Wrapper>
    <S.PoweredBy>
      Feito com <FaHeart size={14} color="#1EB955" /> por{' '}
      <a
        href="https://randys.dev"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        Randys Machado
      </a>
    </S.PoweredBy>
  </S.Wrapper>
)

export default Footer
