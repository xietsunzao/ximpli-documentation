import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import type { Props as TabItemProps } from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

interface CodeTabsProps {
  examples: Record<string, string>;
}

type LangIconsType = {
  [key: string]: string;
};

const LANG_ICONS: LangIconsType = {
  curl: 'fas fa-terminal',
  go: 'fab fa-golang',
  python: 'fab fa-python',
  nodejs: 'fab fa-node-js',
  php: 'fab fa-php'
};

// Map of language identifiers to Prism.js language classes
const LANG_CLASSES: Record<string, string> = {
  curl: 'bash',
  go: 'go',
  python: 'python',
  nodejs: 'javascript',
  php: 'php',
  json: 'json',
  typescript: 'typescript',
  javascript: 'javascript'
};

interface TabContentProps extends TabItemProps {
  icon: string;
}

export default function CodeTabs({ examples }: CodeTabsProps): JSX.Element {
  const tabs = Object.entries(examples).map(([lang, code]): TabContentProps => ({
    value: lang,
    label: (
      <div className={styles.tabLabel}>
        <i className={`${LANG_ICONS[lang]} ${styles.langIcon}`} />
        <span>{
          lang === 'nodejs' ? 'Node.js' : 
          lang === 'php' ? 'PHP' : 
          lang.charAt(0).toUpperCase() + lang.slice(1)
        }</span>
      </div>
    ) as unknown as string,
    icon: LANG_ICONS[lang],
    default: lang === 'curl',
    children: (
      <div className={styles.codeBlock}>
        <CodeBlock language={LANG_CLASSES[lang]}>
          {code.trim()}
        </CodeBlock>
      </div>
    )
  }));

  return (
    <Tabs groupId="programming-language">
      {tabs.map((tab) => (
        <TabItem key={tab.value} {...tab}>
          {tab.children}
        </TabItem>
      ))}
    </Tabs>
  );
} 