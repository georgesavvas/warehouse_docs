import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Docs",
    Svg: require('@site/static/img/docs02.svg').default,
    href: "docs",
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

function Feature({Svg, title, href, wip}) {
  return (
    <div className={styles.feature} style={wip ? {pointerEvents: "none"} : null}>
      {wip ? <div className={styles.wipContainer}><h2>Coming Soon!</h2></div> : null}
      <a href={href} style={wip ? {pointerEvents: "none", filter: "brightness(50%)"} : null}>
        <div className="text--center">
          <Svg className={styles.featureSvg + " " + styles[title]} role="img" />
        </div>
        <div className="text--center padding-horiz--md padding-vert--md">
          <h1 style={{color: "lightgrey", textDecoration: "none"}}>{title}</h1>
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
