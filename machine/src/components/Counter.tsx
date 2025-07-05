import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Counter Component</h3>
                        </div>
                        <div className="card-body text-center">
                            <h2 className="display-4 mb-4">{count}</h2>
                            <div className="btn-group" role="group">
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={increment}
                                >
                                    Increment
                                </button>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={decrement}
                                >
                                    Decrement
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={reset}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter; 