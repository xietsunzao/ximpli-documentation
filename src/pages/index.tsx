import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoWrapper}>
          <img 
            src={isDarkTheme ? '/img/logo-light.svg' : '/img/logo-dark.svg'}
            alt="Logo" 
            className={styles.logo}
          />
        </div>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>The API Documentation for Ximpli-Me Platform</p>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={styles.buttonOutline}
            to="/docs/api/organizations">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
