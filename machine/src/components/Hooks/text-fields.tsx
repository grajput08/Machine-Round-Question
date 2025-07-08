import { SetStateAction, useState } from "react";

const TextFields = () => {

    const [text, setText] = useState("Hello");

    // function handleText(e: { target: { value: SetStateAction<string>; }; }) {
    //     setText(e.target.value);
    // }

    const handleText = (e: { target: { value: SetStateAction<string>; }; }) => setText(e.target.value);

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <div className="mt-2 mb-2">Your Input: {text}</div>
            <button className="btn btn-primary" onClick={() => setText("hello")}>Reset</button>
        </div>
    )
}

export default TextFields;