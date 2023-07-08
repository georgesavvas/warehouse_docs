import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Docs",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  },
  {
    title: "Feedback",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  },
  {
    title: "Bugs",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.feature}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
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
