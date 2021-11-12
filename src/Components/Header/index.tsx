import logoImg from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button type="button">New Transaction</S.Button>
      </S.Content>
    </S.Container>
  )
}
