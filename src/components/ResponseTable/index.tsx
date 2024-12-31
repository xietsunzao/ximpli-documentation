import React, { useState } from 'react';
import styles from './styles.module.css';

interface NestedProperty {
    type: string;
    description: string;
    properties?: {
        [key: string]: NestedProperty;
    };
}

interface ResponseParameter {
    name: string;
    type: string;
    description: string;
    properties?: {
        [key: string]: NestedProperty;
    };
    example?: any;
}

interface ResponseTableProps {
    parameters: ResponseParameter[];
}

export default function ResponseTable({ parameters }: ResponseTableProps): JSX.Element {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRow = (paramPath: string) => {
        setExpandedRows(prev => 
            prev.includes(paramPath) 
                ? prev.filter(path => !path.startsWith(paramPath))
                : [...prev, paramPath]
        );
    };

    const renderNestedFields = (properties: { [key: string]: NestedProperty }, parentPath: string, level = 1) => {
        return Object.entries(properties).map(([key, value], index, array) => {
            const isLast = index === array.length - 1;
            const currentPath = `${parentPath}.${key}`;
            const hasNestedProperties = value.properties && Object.keys(value.properties).length > 0;

            return (
                <React.Fragment key={currentPath}>
                    <tr className={styles.tableRow}>
                        <td className={styles.fieldCell}>
                            <div 
                                className={`${styles.indentedField} ${isLast ? styles.lastChild : ''}`} 
                                style={{ paddingLeft: `${level * 24}px` }}
                            >
                                {hasNestedProperties && (
                                    <button 
                                        className={styles.expandButton}
                                        onClick={() => toggleRow(currentPath)}
                                        aria-label="Toggle nested data"
                                    >
                                        {expandedRows.includes(currentPath) ? '−' : '+'}
                                    </button>
                                )}
                                <code>{key}</code>
                            </div>
                        </td>
                        <td><code>{value.type}</code></td>
                        <td>{value.description}</td>
                    </tr>
                    {hasNestedProperties && expandedRows.includes(currentPath) && (
                        renderNestedFields(value.properties!, currentPath, level + 1)
                    )}
                </React.Fragment>
            );
        });
    };

    return (
        <div className={styles.responseTable}>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {parameters.map((param) => (
                        <React.Fragment key={param.name}>
                            <tr className={styles.tableRow}>
                                <td className={styles.fieldCell}>
                                    {param.properties && (
                                        <button 
                                            className={styles.expandButton}
                                            onClick={() => toggleRow(param.name)}
                                            aria-label="Toggle nested data"
                                        >
                                            {expandedRows.includes(param.name) ? '−' : '+'}
                                        </button>
                                    )}
                                    <code>{param.name}</code>
                                </td>
                                <td><code>{param.type}</code></td>
                                <td>{param.description}</td>
                            </tr>
                            {param.properties && expandedRows.includes(param.name) && (
                                renderNestedFields(param.properties, param.name)
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 