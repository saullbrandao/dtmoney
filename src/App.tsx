import { Header } from './Components/Header'
import { Dashboard } from './Components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './Components/NewTransactionModal'

Modal.setAppElement('#root')

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  )
}
