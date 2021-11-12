import * as S from './styles'

export const TransactionsTable = () => {
  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salary</td>
            <td className="deposit">R$ 3000,00</td>
            <td>Salary</td>
            <td>10/10/2020</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-R$ 1000,00</td>
            <td>House</td>
            <td>10/10/2020</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}
