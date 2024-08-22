import React, {useState, useEffect} from 'react'
import './Modal.css'
import CloseIcon from '../Assets/close_icon.svg'


const Modal = (props) => {
    const[isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false);
        if(props.onClose){
            props.onClose();
        }
    }
 
    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen])

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hiden"}`}>
    <div className="modal-content">
      <div className="modal-card">
          <div onClick={closeModal} className="close-button">
              <img src={CloseIcon} alt="close" />
          </div>
          {props.children}
      </div>
    </div>
  </div>
  )
}

export default Modal
