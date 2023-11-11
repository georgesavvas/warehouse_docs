import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Docs",
    icon: "public/media/docs02.svg",
    href: "/docs",
  },
  {
    title: "Feedback",
    icon: "public/media/feedback.svg",
    href: "/feedback",
  },
  {
    title: "Issues",
    icon: "public/media/bug_grey.svg",
    href: "/issues",
  },
];

const Feature = ({icon, title, href, wip}) => {
  return (
    <div className={styles.feature} style={wip ? {pointerEvents: "none"} : null}>
      {wip ? <div className={styles.wipContainer}><h2>Coming Soon!</h2></div> : null}
      <a href={href} style={wip ? {pointerEvents: "none", filter: "brightness(50%)"} : null}>
        <div className="text--center">
          <img className={styles.featureSvg + " " + styles[title]} src={icon} />
        </div>
        <div className="text--center padding-horiz--md padding-vert--md">
          <h1 style={{color: "lightgrey", textDecoration: "none"}}>{title}</h1>
        </div>
      </a>
    </div>
  );
};

export const HomepageFeatures = () => {
  return (
    <div className={styles.featureContainer}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
};

export default HomepageFeatures;
