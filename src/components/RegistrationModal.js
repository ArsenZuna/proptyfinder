import React from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";


const RegistrationModal = ({isOpen}) => {

   Modal.setAppElement('#root');

   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         maxWidth: '900px',
         maxHeight: '980px',
      },
   };
const [modalIsOpen, setModalIsOpen] = isOpen;


const closeModal = () => {
   setModalIsOpen(false);
}

   return(
     <Modal
       isOpen={modalIsOpen}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >
     <div className="modal-dialog-centered border-white">
        <div className="modal-content border-white">
           <div className="modal-header border-white">
              <h1 className="modal-title text-center border-white">ProptyFind</h1>
           <Link to="/" type="button" className="d-flex justify-content-end btn-close" onClick={closeModal}> </Link>
           </div>
           <div className="modal-body border-white">
              <p>Your property information was listed with success!</p>
           </div>
           <div className="modal-footer border-white">
              <Link to="/" className="btn btn-primary" onClick={closeModal}>Close</Link>
           </div>
        </div>
     </div>
     </Modal>
   )
};

export default RegistrationModal;