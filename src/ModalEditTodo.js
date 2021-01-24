import {Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import React, {useState} from 'react';

function ModalEditTodo(props) {
    const {todo = {}} = props
    const [titleInputValue, setTitleInputValue] = useState(todo.title)
    const [statusSelectValue, setStatusSelectValue] = useState(todo.done)
    const saveInputButton = () => {
        props.editTodo(todo.id, titleInputValue, statusSelectValue)
        props.setIsEditMode(false)
    }

    return (
        <Col>
            <Modal isOpen={props.isEditMode}>
                <ModalHeader>Edit Todo</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)}/>
                    <Label>New Status</Label>
                    <Input type='select' value={statusSelectValue}
                           onChange={(e) => setStatusSelectValue(e.target.value)}>
                        <option value={true}>done</option>
                        <option value={false}>not done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={saveInputButton}>Save</Button>
                    <Button onClick={() => props.setIsEditMode(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalEditTodo;
