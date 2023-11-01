import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import LogoType from "@site/static/img/logo_type.png";
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>WAREHOUSE</h1>
        <h4 className={styles.subtitle}>ASSET LIBRARY</h4>
        {/* <img src={LogoType} className={styles.logo} /> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.container}>
      <HomepageHeader />
      <HomepageFeatures />
      {/* <div className={styles.anim}>
        <div className={styles.bgFilter} />
        <div className={styles.bg} />
      </div> */}
    </div>
  );
}
