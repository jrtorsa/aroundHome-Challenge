import { IModal } from 'interfaces'
import Modal from 'react-modal'
import '../styles/ConfirmationModal.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '300px'
  },
};

const ConfirmationModal:React.FC<IModal> = ({openModal, setOpenModal, selectedDay, reservation}) => {
  return (
    <Modal isOpen={openModal} style={customStyles}>
      <div className='confirmation-modal'>
        <div>
          <h1>Thank you!</h1>
          <h1>🙂</h1>
          <h3>Your appointement has been successfully schedule!</h3>
          <h3>See you on {selectedDay} from {reservation}</h3>
          <button className='close-modal' onClick={() => setOpenModal(false)}>OK</button>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
