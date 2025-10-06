import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';



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

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {/* hero blurb */}
        <div className={styles.heroDescription}>
          <p>
            delta is a new decentralized network which breaks the tradeoffs of traditional blockchains.
          </p>
        </div>

        {/* main button */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/docs/frontpage">
            Read the docs
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      {featuresList.map((link, idx) => (
          link.type === 'download' ? (
            // Download link
          <a
            className={clsx('card padding--lg', styles.featureItem, styles.downloadCard)}
            href={useBaseUrl(link.to)}
            download={link.filename}
            target="_blank"
            rel="noopener noreferrer">
            <div className="text--center">
              <div className={styles.featureIcon}>{link.icon}</div>
              <Heading as="h3">{link.title}</Heading>
              <p>{link.description}</p>
            </div>
          </a>
        ) : link.type === 'external' ? (
          // External link
          <a
            className={clsx('card padding--lg', styles.featureItem, styles.externalCard)}
            href={link.to}
            target="_blank"
            rel="noopener noreferrer">
            <div className="text--center">
              <div className={styles.featureIcon}>{link.icon}</div>
              <Heading as="h3">
                {link.title}
                <span className={styles.externalIcon}> ↗</span>
              </Heading>
              <p>{link.description}</p>
            </div>
          </a>
        ): (
          // Internal link
          <Link
            className={clsx('card padding--lg', styles.featureItem)}
            to={link.to}>
            <div className="text--center">
              <div className={styles.featureIcon}>{link.icon}</div>
              <Heading as="h3">{link.title}</Heading>
              <p>{link.description}</p>
            </div>
          </Link>
        )
      ))}
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="delta is a new decentralized network which breaks the tradeoffs of traditional blockchains."
      noFooter={true}
      >
      <HeroSection />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
