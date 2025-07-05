import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const descrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Counter</h1>
                        </div>
                        <div className="card-body text-center">
                            <p className="h1">{count}</p>
                            <div className="btn-group gap-2">
                                <button className="btn btn-primary me-2" onClick={increment}>Increment</button>
                                <button className="btn btn-secondary me-2" onClick={descrement}>Descrement</button>
                                <button className="btn btn-outline-primary me-2" onClick={reset}>Reset</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Counter; 