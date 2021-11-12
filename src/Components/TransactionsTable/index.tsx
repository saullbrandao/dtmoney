import { useTransactions } from '../../hooks/useTransactions'
import * as S from './styles'

export const TransactionsTable = () => {
  const { transactions } = useTransactions()

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
          {transactions?.map(
            ({ title, id, amount, category, type, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </S.Table>
    </S.Container>
  )
}
