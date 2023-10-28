import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import LogoType from "@site/static/img/logo_type.png";
import React from 'react';
import styles from './index.module.css';

const Button = ({title, url, icon}) => {
  return (
    <a href={url} className={styles.href}>
      <div className={styles.feature}>
        <img src={icon} className={styles.svg} />
        <h1 className={styles.featureText}>{title}</h1>
      </div>
    </a>
  );
}

const buttons = [
  {
    title: "Docs",
    url: "/hub/docs",
    icon: "img/docs02.svg",
  },
  {
    title: "Feedback",
    url: "/hub/feedback",
    icon: "img/feedback.svg",
  },
  {
    title: "Issues",
    url: "/hub/issues",
    icon: "img/bug_grey.svg",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hub</h1>
      </div>
      <div className={styles.featureContainer}>
        {buttons.map(button => <Button {...button} />)}
      </div>
    </div>
  );
}
