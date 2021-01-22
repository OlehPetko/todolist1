import {Button, Col} from "reactstrap";
import React, {useState} from 'react';
import ModalAddTodo from "./ModalAddTodo";

function Controller(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Col>
            <Button onClick={() => setIsModalOpen(true)}>Add new</Button>
            <ModalAddTodo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} addTitle={props.addTitle}/>

        </Col>
    );
}

export default Controller;
