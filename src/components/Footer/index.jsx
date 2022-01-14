import * as S from './styled'
import { FaHeart } from 'react-icons/fa'

const Footer = () => (
  <S.Wrapper>
    <S.PoweredBy>
      Feito com <FaHeart size={14} color="#CB3B48" /> por Randys Machado
    </S.PoweredBy>
  </S.Wrapper>
)

export default Footer
