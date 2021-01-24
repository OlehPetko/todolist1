import React, {useState} from 'react';
import {Button, Card, CardBody, CardTitle} from "reactstrap";
import ModalDeleteTodo from "./ModalDeleteTodo";
import ModalEditTodo from "./ModalEditTodo";

const style = {
    'textDecoration': 'line-through'
}
export default function Todo(props) {
    const {todo = {}, index, isFirst, isLast} = props
    const [isEditMode, setIsEditMode] = useState(false)
    const [isDeleteMode, setIsDeleteMode] = useState(false)
    const deleteTodo = () => {
        props.del(todo.id)
    }
    const editTodo = () => {
        setIsEditMode(!isEditMode)
    }
    const changeDeleteMode = () => {
        setIsDeleteMode(!setIsDeleteMode)
    }
    const isDone = todo.done ? style : {}

    return (
        <Card>
            <ModalDeleteTodo todo={todo}
                             changeDeleteMode={changeDeleteMode}
                             isDeleteMode={isDeleteMode}
                             deleteTodo={deleteTodo}
            />
            <ModalEditTodo todo={todo} isEditMode={isEditMode} setIsEditMode={editTodo} editTodo={props.editTodo}/>
            <CardBody>
                <CardTitle style={isDone}>
                    {todo.title}
                </CardTitle>
                <Button onClick={() => setIsDeleteMode(true)}>delete</Button>
                <Button onClick={() => props.doneTodo(todo.id)}>done</Button>
                <Button disabled={isFirst} onClick={() => props.moveUp(index, index - 1)}>up</Button>
                <Button disabled={isLast} onClick={() => props.moveUp(index, index + 1)}>down</Button>
                <Button onClick={() => setIsEditMode(!isEditMode)}>edit</Button>
            </CardBody>
        </Card>
    )
}


