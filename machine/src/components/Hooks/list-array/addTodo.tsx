import { useEffect, useState, FC } from "react";

interface AddTodoProps {
    onAddTodo: (title: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');


    const handleClick = () => {
        onAddTodo(title);
        setTitle("");
    };

    return (
        <div>
            <input type="text" placeholder="Please Add the new Todo" value={title} onChange={(e: any) => setTitle(e.target.value)} />
            <button onClick={handleClick}>Add New</button>
        </div>
    )

}

export default AddTodo;