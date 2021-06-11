import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PersonaCreadaModal(props){ 
        return (
            <Modal show={ props.show }>
                <Modal.Header closeButton>
                    <h1>Importante</h1>
                </Modal.Header>
                <Modal.Body>
                    <p>Se ha creado la persona</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => props.onCloseModal()}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        )
}

export default PersonaCreadaModal;