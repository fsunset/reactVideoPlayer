import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ModalComponent = ({showModal, handleClose, modalTitle, modalDescription, modalvidSRC}) => {
	return (
		<Modal show={showModal} onHide={handleClose} size="lg">
			<Modal.Header>
				<Modal.Title>{modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					{modalDescription}
				</p>

				<video width="100%" controls>
					<source src={modalvidSRC} type="video/mp4" />
					Your browser does not support HTML video.
				</video>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="light" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalComponent;