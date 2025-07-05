import React from 'react';
import { importTopics } from '../data/importTopics';

interface ImportTopicsTableProps {
    onTopicClick: (url: string) => void;
}

const ImportTopicsTable: React.FC<ImportTopicsTableProps> = ({ onTopicClick }) => {
    const categories = Array.from(new Set(importTopics.map(topic => topic.category)));

    return (
        <div className="import-topics-container">
            {categories.map(category => (
                <div key={category} className="mb-5">
                    <h3 className="text-primary mb-3">{category}</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Question Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">File Path</th>
                                </tr>
                            </thead>
                            <tbody>
                                {importTopics
                                    .filter(topic => topic.category === category)
                                    .map((topic, index) => (
                                        <tr
                                            key={index}
                                            onClick={() => onTopicClick(topic.url)}
                                            style={{ cursor: 'pointer' }}
                                            className="table-row-hover"
                                        >
                                            <td>
                                                <code className="text-primary fw-bold">{topic.topic}</code>
                                            </td>
                                            <td>{topic.questionName}</td>
                                            <td>{topic.description}</td>
                                            <td>
                                                <code className="bg-light p-1 rounded">{topic.url}</code>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImportTopicsTable; 