import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import * as S from './styles'

type TransactionType = {
  id: number
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: string
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>()

  useEffect(() => {
    api.get('/transactions').then(res => setTransactions(res.data.transactions))
  }, [])

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
