import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

type HttpMethodProps = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
};

export default function HttpMethod({ method }: HttpMethodProps): JSX.Element {
  return (
    <BrowserOnly fallback={<span className={styles.method}>{method}</span>}>
      {() => (
        <span
          className={`${styles.method} ${styles[method.toLowerCase()]}`}
        >
          {method}
        </span>
      )}
    </BrowserOnly>
  );
} 