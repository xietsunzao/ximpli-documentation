import React, { useState, useEffect } from 'react';
import HttpMethod from '@site/src/components/HttpMethod';
import styles from './styles.module.css';
import CodeTabs from '@site/src/components/CodeTabs';

interface EndpointSelectorProps {
    endpoints: {
        name: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        path: string;
        description?: string;
        parameters?: {
            name: string;
            type: string;
            required: string;
            description: string;
        }[];
        examples?: {
            curl: string;
            go: string;
            python: string;
            nodejs: string;
        };
    }[];
    onEndpointChange?: (endpoint: string) => void;
}

export default function EndpointSelector({ endpoints, onEndpointChange }: EndpointSelectorProps): JSX.Element {
    const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);

    useEffect(() => {
        if (onEndpointChange) {
            onEndpointChange(selectedEndpoint.name);
        }
    }, [selectedEndpoint, onEndpointChange]);

    return (
        <div className={styles.container}>
            <div className={styles.selectorSection}>
                <div className={styles.customSelect}>
                    <select
                        className={styles.selector}
                        value={selectedEndpoint.name}
                        onChange={(e) => {
                            const endpoint = endpoints.find(ep => ep.name === e.target.value);
                            if (endpoint) {
                                setSelectedEndpoint(endpoint);
                                const url = new URL(window.location.href);
                                url.searchParams.set('version', endpoint.name.toLowerCase().replace(/\s+/g, '-'));
                                window.history.pushState({}, '', url);
                            }
                        }}
                    >
                        {endpoints.map((endpoint) => (
                            <option key={endpoint.name} value={endpoint.name}>
                                {endpoint.name}
                            </option>
                        ))}
                    </select>
                    <div className={styles.selectArrow}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>

                {selectedEndpoint.description && (
                    <p className={styles.endpointDescription}>
                        {selectedEndpoint.description}
                    </p>
                )}
            </div>

            <h3>Path</h3>
            <div className={styles.endpointDisplay}>
                <div className={styles.methodBadge}>
                    <HttpMethod method={selectedEndpoint.method} />
                </div>
                <code className={styles.endpointPath}>{selectedEndpoint.path}</code>
            </div>

            {selectedEndpoint.parameters && selectedEndpoint.parameters.length > 0 && (
                <div className={styles.parametersTable}>
                    <h3>Request Parameters</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedEndpoint.parameters.map((param) => (
                                <tr key={param.name}>
                                    <td><code>{param.name}</code></td>
                                    <td><code>{param.type}</code></td>
                                    <td>{param.required}</td>
                                    <td>{param.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <h2>Example Request</h2>
            {selectedEndpoint.examples && (
                <CodeTabs examples={selectedEndpoint.examples} />
            )}
        </div>
    );
} 