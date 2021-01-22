import Todo from "./Todo";
import {Col} from "reactstrap";

function List(props) {
    const {list = []} = props
    return (
        <Col xs={8}>
            {list.map((el, index) => <Todo todo={el}
                                           key={el.id}
                                           del={props.del}
                                           doneTodo={props.doneTodo}
                                           moveUp={props.moveUp}
                                           editTodo={props.editTodo}
                                           isFirst={index === 0}
                                           index={index}
                                           isLast={index === list.length - 1}

            /> )}


        </Col>
    );
}

export default List;
