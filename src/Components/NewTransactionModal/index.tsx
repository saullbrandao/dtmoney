import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'
import * as S from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Submit Transaction</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={value}
          onChange={e => setValue(e.currentTarget.valueAsNumber)}
        />

        <S.Wrapper>
          <S.RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="income" />
            <span>Income</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </S.RadioBox>
        </S.Wrapper>

        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </S.Container>
    </Modal>
  )
}
