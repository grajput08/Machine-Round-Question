import React from 'react';
import { useParams } from 'react-router-dom';
import Counter from './Hooks/Counter';

const ComponentRouter: React.FC = () => {
    const { route } = useParams<{ route: string }>();

    switch (route) {
        case 'counter':
            return <Counter />;

        default:
            return (
                <div className="container mt-4">
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Component Not Found!</h4>
                        <p>No component found for route: <code>{route}</code></p>
                        <hr />
                        <p className="mb-0">
                            Please check the URL or add the component to the ComponentRouter.
                        </p>
                    </div>
                </div>
            );
    }
};

export default ComponentRouter; 