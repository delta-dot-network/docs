import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';


function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroDescription}>
          <p>
            delta is a new decentralized network which breaks the tradeoffs of traditional blockchains.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className={styles.heroButton}
            to="/docs/docs/welcome">
            Read the docs
          </Link>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src={useBaseUrl(
            colorMode === 'dark' ? 'img/delta-symbol-black.svg' : 'img/delta-symbol-white.svg'
          )}
          alt="delta illustration"
          className={styles.bouncingImage}
        />
      </div>
    </header>
  );
}

function FeatureItem({title, description, to, icon, type, filename}) {
  const isDownload = type === 'download';
  const isExternal = type === 'external';
  const Wrapper = (isDownload || isExternal) ? 'a' : Link;
  
  const wrapperProps = isDownload ? {
    href: useBaseUrl(to),
    download: filename,
    target: '_blank',
    rel: 'noopener noreferrer',
  } : isExternal ? {
    href: to,
    target: '_blank',
    rel: 'noopener noreferrer',
  } : {
    to: to,
  };

  const cardClassName = clsx(
    'card padding--lg',
    styles.featureItem,
    isDownload && styles.downloadCard,
    isExternal && styles.externalCard
  );

  return (
    <Wrapper className={cardClassName} {...wrapperProps}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
          {isExternal && <span className={styles.externalIcon}> ↗</span>}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </Wrapper>
  );
}

function FeaturesSection() {
  const featuresList = [
    {
      title: 'Information for developers',
      description: 'Details on domain setup',
      to: '/docs/docs/building/delta-sdk',
      icon: '🚀',
      type: 'link'
    },
    {
      title: 'Protocol background',
      description: 'Deep dive into the delta protocol',
      to: '/docs/docs/background',
      icon: '🌊',
      type: 'link',
    },
    {
      title: 'delta for Regulated Finance',
      description: 'Read the deck',
      to: '/docs/files/delta_for_RTA.pdf',
      icon: '⬇️',
      type: 'download',
      filename: 'delta_for_RTA.pdf'
    },
  ];

  return (
    <section className={styles.features}>
      {featuresList.map((props, idx) => (
        <FeatureItem key={idx} title={props.title} description={props.description} to={props.to} icon={props.icon} type={props.type} filename={props.filename} />
      ))}
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="delta Network Docs"
      noFooter={true}
      >
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
