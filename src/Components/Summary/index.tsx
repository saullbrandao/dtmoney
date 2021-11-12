import * as S from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = () => {
  return (
    <S.Container>
      <S.SummaryBox>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>R$1000,00</strong>
      </S.SummaryBox>
      <S.SummaryBox>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>-R$500,00</strong>
      </S.SummaryBox>
      <S.SummaryBox className="highlight-bg">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </S.SummaryBox>
    </S.Container>
  )
}
