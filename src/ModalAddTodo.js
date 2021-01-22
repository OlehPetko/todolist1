import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import React, {useState} from 'react';

function ModalAddTodo(props) {
    const [titleInputValue, setTitleInputValue] = useState('')
    const [ statusSelectValue, setStatusSelectValue] = useState(false)
    const saveInputButton = () => {
        props.addTitle(titleInputValue,statusSelectValue)
        props.setIsModalOpen(false)
    }

    return (
        <Col>
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>Add New Todo</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)} />
                    <Label>New Status</Label>
                    <Input type='select' value={statusSelectValue} onChange={(e) => setStatusSelectValue(e.target.value)} >
                        <option value={true}>done</option>
                        <option value={false}>not done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={saveInputButton} >Save</Button>
                    <Button onClick={() =>props.setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalAddTodo;
