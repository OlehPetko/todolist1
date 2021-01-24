import {Button, Col, Modal, ModalBody, Input, ModalFooter, ModalHeader} from "reactstrap";
import React, {useState} from 'react';

function ModalDeleteTodo(props) {
    const {todo = {}} = props
    const [inputValue, setInputValue] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)

    const deleteTodoButton = () => {
        props.deleteTodo()
        props.changeDeleteMode(false)
    }
    const inputHandler = (e) => {
        setInputValue(e.target.value)
        validate()
    }
    const validate = () => {
        if (inputValue === todo.title) setBtnDisabled(false)
        else setBtnDisabled(true)
    }

    return (
        <Col>
            <Modal isOpen={props.isDeleteMode}>
                <ModalHeader>Type <strong>{todo.title}</strong> to delete todo?</ModalHeader>
                <ModalBody>
                    <Input value={inputValue} onChange={inputHandler}/>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={btnDisabled} onClick={deleteTodoButton}>Delete</Button>
                    <Button onClick={() => props.changeDeleteMode(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalDeleteTodo;
