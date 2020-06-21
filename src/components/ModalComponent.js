import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({showModal, handleClose, title, description}) => {
	return (
		<Modal show={showModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{description}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalComponent;