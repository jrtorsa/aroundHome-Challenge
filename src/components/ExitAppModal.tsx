import { IExitModal } from 'interfaces'
import Modal from 'react-modal'
import '../styles/ExitAppModal.scss'

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

const exitApp = (): void => {
  const storage = localStorage.getItem('reservation')
  if(storage){
    localStorage.clear();
    window.document.location.reload()
  } 
}

const ExitAppModal: React.FC<IExitModal> = ({openExitModal, setOpenExitModal}) => {
  return (
      <div className='exit-app-modal'>
      <button onClick={() => setOpenExitModal(true)}>Exit</button>
      <Modal isOpen={openExitModal} style={customStyles}>
      <div className='exit-modal-container'>
        <div>
          <h1>Are you sure?</h1>
          <h1>⚠️</h1>
          <button className='exit-modal-ok' onClick={() => {exitApp(); setOpenExitModal(false) }}>OK</button>
          <button className='exit-modal-cancel' onClick={() => setOpenExitModal(false)}>Cancel</button>
        </div>
      </div>
      </Modal>
      </div>
  )
}

export default ExitAppModal
