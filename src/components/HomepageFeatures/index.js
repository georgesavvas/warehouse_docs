import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Docs",
    Svg: require('@site/static/img/docs02.svg').default,
    href: "docs/intro",
  },
  {
    title: "Feedback",
    Svg: require('@site/static/img/feedback.svg').default,
    href: "feedback",
  },
  {
    title: "Issues",
    Svg: require('@site/static/img/bug_grey.svg').default,
    href: "issues",
  },
];

function Feature({Svg, title, href}) {
  return (
    <div className={styles.feature}>
      <a href={href}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md padding-vert--md">
          <h1>{title}</h1>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.featureContainer}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
