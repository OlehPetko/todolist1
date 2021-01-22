import {useState} from 'react'
import List from "./List";
import {Container, Row, Col} from "reactstrap";
import Controller from "./Controller";

function App() {
    const [list, setList] = useState([
        {id: Math.random(), title: 'learn react', done: false},
        {id: Math.random(), title: 'learn js', done: false},
        {id: Math.random(), title: 'learn java', done: false},
        {id: Math.random(), title: 'learn vui', done: false}
    ])


    const addTitle = (newTitle, newStatus) => {
        const newList = {id: Math.random(), title: newTitle, done: newStatus}
        const newTodo = [...list, newList]
        setList(newTodo)

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
        <Container>
            <Row>
                <Col>
                    <Controller addTitle={addTitle} />
                </Col>
            <List list={list} del={del} doneTodo={doneTodo} moveUp={moveUp} editTodo={editTodo} />
            </Row>
        </Container>
    );
}

export default App;
