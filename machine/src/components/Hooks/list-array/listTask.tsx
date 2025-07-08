import { FC } from "react";

interface Task {
    name: string;
    // add more fields if needed
}

interface ListTaskProps {
    list: Task[];
}

const ListTask: FC<ListTaskProps> = ({ list }) => {
    return (
        <div className="row">
            {list.map((val, index) => (
                <div className="col-12" key={index}>
                    <p>{val.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ListTask;
