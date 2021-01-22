import React, {useState} from 'react';
import {Button, Card, CardBody, CardTitle} from "reactstrap";


const style = {
    'textDecoration': 'line-through'
}
export default function Todo(props) {
    const {todo = {}, index, isFirst, isLast} = props
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(todo.title)
    const deleteTodo = () => {
        props.del(todo.id)
    }
    const saveButtonHandler = () => {
        props.editTodo(todo.id, inputValue)
        setInputValue(todo.title)
        setIsEditMode(false)
    }
    const isDone = todo.done ? style : {}

    return (
        <Card>
            <CardBody>
                <CardTitle style={isDone}>
            {todo.title}
                </CardTitle>



                <Button onClick={deleteTodo}>delete</Button>
                <Button onClick={() => props.doneTodo(todo.id)}>done</Button>
                <Button disabled={isFirst} onClick={() => props.moveUp(index, index - 1)}>up</Button>
                <Button disabled={isLast} onClick={() => props.moveUp(index, index + 1)}>down</Button>
                {!isEditMode && <Button onClick={() => setIsEditMode(!isEditMode)}>edit</Button>}

                {isEditMode &&
                <>
                    <label>new title:</label>
                    <input placeholder='type here' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <Button onClick={saveButtonHandler}>save</Button>
                    <Button onClick={() => setIsEditMode(!isEditMode)}>cancel</Button>
                </>
                }

            </CardBody>
        </Card>
    )
}


