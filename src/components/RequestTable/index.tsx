import React, { useState } from 'react';
import styles from './styles.module.css';

interface NestedProperty {
    type: string;
    description: string;
    required?: boolean;
    properties?: { [key: string]: NestedProperty };
}

interface RequestParameter {
    name: string;
    type: string;
    required: boolean;
    isConditional?: boolean;
    location?: string;
    description: string;
    properties?: { [key: string]: NestedProperty };
}

interface RequestTableProps {
    parameters: RequestParameter[];
}

export default function RequestTable({ parameters }: RequestTableProps): JSX.Element {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRow = (paramName: string) => {
        setExpandedRows(prev => 
            prev.includes(paramName) 
                ? prev.filter(name => !name.startsWith(paramName))
                : [...prev, paramName]
        );
    };

    const renderRequiredIcon = (required: boolean, isConditional?: boolean) => {
        if (isConditional) {
            return <i className={`fa-solid fa-exclamation ${styles.conditionalIcon}`}></i>;
        }
        return required ? (
            <i className={`fa-solid fa-check ${styles.requiredIcon}`}></i>
        ) : (
            <i className={`fa-solid fa-xmark ${styles.optionalIcon}`}></i>
        );
    };

    const renderNestedFields = (parentName: string, properties: { [key: string]: NestedProperty }, level = 1) => {
        return Object.entries(properties).map(([key, value]) => {
            const fullName = `${parentName}.${key}`;
            const hasNestedProperties = value.properties && Object.keys(value.properties).length > 0;

            return (
                <React.Fragment key={fullName}>
                    <tr className={styles.tableRow}>
                        <td className={styles.fieldCell}>
                            <div className={styles.indentedField} style={{ paddingLeft: `${level * 20}px` }}>
                                {hasNestedProperties && (
                                    <button 
                                        className={styles.expandButton}
                                        onClick={() => toggleRow(fullName)}
                                        aria-label="Toggle nested data"
                                    >
                                        {expandedRows.includes(fullName) ? '−' : '+'}
                                    </button>
                                )}
                                <span className={styles.treeLine}></span>
                                <code>{key}</code>
                            </div>
                        </td>
                        <td><code>{value.type}</code></td>
                        <td className={styles.requiredCell}>
                            {renderRequiredIcon(value.required || false)}
                        </td>
                        <td className={styles.locationCell}>body</td>
                        <td>{value.description}</td>
                    </tr>
                    {hasNestedProperties && expandedRows.includes(fullName) && (
                        renderNestedFields(fullName, value.properties!, level + 1)
                    )}
                </React.Fragment>
            );
        });
    };

    return (
        <>
            <div className={styles.requestTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Location</th>
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
                                    <td className={styles.requiredCell}>
                                        {renderRequiredIcon(param.required, param.isConditional)}
                                    </td>
                                    <td>{param.location || 'body'}</td>
                                    <td>{param.description}</td>
                                </tr>
                                {param.properties && expandedRows.includes(param.name) && (
                                    renderNestedFields(param.name, param.properties)
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.legendContainer}>
                <div className={styles.legendBadges}>
                    <div className={styles.legendBadge}>
                        <i className={`fa-solid fa-check ${styles.requiredIcon}`}></i>
                        <span>Required</span>
                    </div>
                    <div className={styles.legendBadge}>
                        <i className={`fa-solid fa-xmark ${styles.optionalIcon}`}></i>
                        <span>Optional</span>
                    </div>
                    <div className={styles.legendBadge}>
                        <i className={`fa-solid fa-exclamation ${styles.conditionalIcon}`}></i>
                        <span>Conditional</span>
                    </div>
                </div>
            </div>
        </>
    );
} 