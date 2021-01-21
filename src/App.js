import {useState} from 'react'
import List from "./List";

function App() {
    const [list, setList] = useState([
        {id: Math.random(), title: 'learn react', done: false},
        {id: Math.random(), title: 'learn js', done: false},
        {id: Math.random(), title: 'learn java', done: false},
        {id: Math.random(), title: 'learn vui', done: false}
    ])
    const [inputValue, setInputValue] = useState('')
    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    const addTitle = () => {
        const newList = {id: Math.random(), title: inputValue, done: false}
        const newTodo = [...list, newList]
        setList(newTodo)
        setInputValue('')
    }
    const del = (id) => {
        const newList = list.filter(el => el.id !== id)
        setList(newList)
    }
    const doneTodo = (id) => {
        const newList = list.map(el => {
            if (id === el.id) {
                return {...el, done: !el.done}
            }
            return el
        })
        setList(newList)
    }
    const moveUp = (index, nextIndex) => {
        const newList = [...list]
        const indexTodo = newList[index]
        const prevTodo = newList[nextIndex]
        newList[index]=prevTodo
        newList[nextIndex]=indexTodo
        setList(newList)
    }
    const editTodo = (id, newTitle) => {
        const newList = list.map(el => {
            if(el.id === id) {
                el.title = newTitle
            }
            return el
        })
        setList(newList)
    }
    return (
        <div>
            <input placeholder='read here' value={inputValue} onChange={onChange}/>
            <button onClick={addTitle}>add</button>
            <List list={list} del={del} doneTodo={doneTodo} moveUp={moveUp} editTodo={editTodo} />


        </div>
    );
}

export default App;
