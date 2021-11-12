import logoImg from '../../assets/logo.svg'
import * as S from './styles'

type HeaderProps = {
  onOpenModal: () => void
}

export const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button type="button" onClick={onOpenModal}>
          New Transaction
        </S.Button>
      </S.Content>
    </S.Container>
  )
}
