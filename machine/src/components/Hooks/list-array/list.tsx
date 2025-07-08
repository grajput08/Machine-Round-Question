import { useEffect, useState } from "react";
import AddTodo from "./addTodo";
import ListTask from "./listTask";

const List = () => {

    let nextId = 3;
    const [data, setData] = useState([
        {
            id: 1,
            name: "Study CSS",
            done: false
        },
        {
            id: 2,
            name: "Study JSS",
            done: false
        },
        {
            id: 3,
            name: "Study ReactJS",
            done: false
        }
    ]
    );
    const handleNew = (title: string) => setData([...data, {
        id: nextId++,
        name: title,
        done: false
    }])

    return (
        <div className="vh-100">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="card p-3 bg-primary-subtle">
                    <h1>Todo App</h1>
                    <AddTodo onAddTodo={handleNew} />
                    <ListTask list={data} />
                </div>
            </div>
        </div>

    )

}

export default List;