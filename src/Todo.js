import React, {useState} from 'react';

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
        <div >
            <span style={isDone}>
            {todo.title}
            </span>
            <button onClick={deleteTodo}>delete</button>
            <button onClick={() => props.doneTodo(todo.id)}>done</button>
            <button disabled={isFirst} onClick={() => props.moveUp(index, index - 1)}>up</button>
            <button disabled={isLast} onClick={() => props.moveUp(index, index + 1)}>down</button>
            {!isEditMode && <button onClick={() => setIsEditMode(!isEditMode)}>edit</button>}

            {isEditMode &&
            <>
                <label>new title:</label>
                <input placeholder='type here' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={saveButtonHandler}>save</button>
                <button onClick={() => setIsEditMode(!isEditMode)}>cancel</button>
            </>
            }
        </div>
    )
}


