import Todo from "./Todo";

function List(props) {
    const {list = []} = props
    return (
        <div>
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


        </div>
    );
}

export default List;
