import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const quickLinks = [
  {
    title: 'Intro to delta',
    description: 'Learn the basics of the delta Network',
    to: '/docs/docs/frontpage',
    icon: '📚',
    type: 'link'
  },
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
  {
  title: 'Ready to build?',
  description: 'Request access to our SDK',
  to: '/docs/docs/building/request-sdk-access',
  icon: '👷‍♀️',
  type: 'link'
},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to the {siteConfig.title} docs
        </Heading>
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

function QuickLinksSection() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        {/* <div className="text--center">
          <Heading as="h2">delta: for Businesses and Builders</Heading>
          <p>Jump straight to what you need</p>
        </div> */}
        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
          {quickLinks.map((link, idx) => (
            <div key={idx} className="col" style={{ display: 'flex' }}>
              {link.type === 'download' ? (
                // Download link with special attributes
                <a
                  className={clsx('card padding--lg', styles.quickLinkCard, styles.downloadCard)}
                  href={useBaseUrl(link.to)}
                  download={link.filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="text--center">
                    <div className={styles.quickLinkIcon}>{link.icon}</div>
                    <Heading as="h3">{link.title}</Heading>
                    <p>{link.description}</p>
                    {/*<div className={styles.downloadBadge}>Download</div>*/}
                  </div>
                </a>
              ) : link.type === 'external' ? (
                // External link
                <a
                  className={clsx('card padding--lg', styles.quickLinkCard, styles.externalCard)}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="text--center">
                    <div className={styles.quickLinkIcon}>{link.icon}</div>
                    <Heading as="h3">
                      {link.title}
                      <span className={styles.externalIcon}> ↗</span>
                    </Heading>
                    <p>{link.description}</p>
                    {/*<div className={styles.externalBadge}>External</div>*/}
                  </div>
                </a>
              ): (
                // Regular internal link
                <Link
                  className={clsx('card padding--lg', styles.quickLinkCard)}
                  to={link.to}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="text--center">
                    <div className={styles.quickLinkIcon}>{link.icon}</div>
                    <Heading as="h3">{link.title}</Heading>
                    <p>{link.description}</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} docs`}
      description="delta is a new decentralized network which breaks the tradeoffs of traditional blockchains.">
      <HomepageHeader />
      <main>
        <QuickLinksSection />
      </main>
    </Layout>
  );
}
