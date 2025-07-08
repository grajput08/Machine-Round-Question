import { useEffect, useState } from "react";

const CounterNumber = () => {
    const [count, setCount] = useState(0);

    const Counterfn = () => setCount(count + 1);

    return (
        <button onClick={Counterfn}> You pressed me {count} times</button>
    )

}

export default CounterNumber;