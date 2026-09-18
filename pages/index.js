import Head from 'next/head'
import styles from '../styles/Home.module.css'

const features = [
  {
    title: 'Full end-to-end coverage',
    text: 'We write and maintain automated tests for your web app, so your team ships features instead of test code.',
  },
  {
    title: 'AI plus human QA engineers',
    text: 'AI drafts tests and investigates failures. QA engineers review every result, so you never chase a false alarm.',
  },
  {
    title: 'Runs in parallel, every deploy',
    text: 'Your whole suite runs at once in the cloud. Get results in minutes, not hours, on every pull request.',
  },
  {
    title: 'Bug reports, not noise',
    text: 'When a test fails, you get a reproducible bug report with a video, logs, and the exact step that broke.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Connect your app',
    text: 'Point QA Wolf at your staging environment and grant access.',
  },
  {
    number: '2',
    title: 'We build the tests',
    text: 'Your suite grows to full coverage while your team keeps shipping.',
  },
  {
    number: '3',
    title: 'Ship with confidence',
    text: 'Every deploy is checked. Real bugs reach you, flakes do not.',
  },
]

function WolfMark() {
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 4l5 6h10l5-6v10c0 7-5 12-10 14C11 26 6 21 6 14V4z"
        fill="currentColor"
      />
      <circle cx="12.5" cy="15" r="1.6" fill="#0b0f19" />
      <circle cx="19.5" cy="15" r="1.6" fill="#0b0f19" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>QA Wolf | End-to-end test coverage for your web app</title>
        <meta
          name="description"
          content="QA Wolf gets your web app to full automated end-to-end test coverage and keeps it there."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <WolfMark />
          <span>QOWolf</span>
        </a>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="https://docs.qawolf.com">Docs</a>
          <a href="https://app.qawolf.com" className={styles.navButton}>
            Sign in
          </a>
        </nav>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Automated QA as a service</p>
          <h1 className={styles.title}>
            Ship faster with <span className={styles.accent}>zero</span> QA
            work
          </h1>
          <p className={styles.lead}>
            QA Wolf gets your web app to full end-to-end test coverage and
            keeps it there. We build the tests, run them on every deploy, and
            send you only the real bugs.
          </p>
          <div className={styles.actions}>
            <a href="https://www.qawolf.com" className={styles.primary}>
              Get started
            </a>
            <a href="#how" className={styles.secondary}>
              See how it works
            </a>
          </div>
          <div className={styles.terminal} aria-hidden="true">
            <div className={styles.terminalBar}>
              <span />
              <span />
              <span />
            </div>
            <pre className={styles.terminalBody}>
              {`$ qawolf run --env staging
✓ Sign up with email                 3.1s
✓ Checkout with saved card           4.8s
✓ Invite teammate to workspace       2.6s
✓ Export report as CSV               3.9s

4 passed, 0 failed, 0 flaky`}
            </pre>
          </div>
        </section>

        <section id="features" className={styles.section}>
          <h2 className={styles.sectionTitle}>Why teams choose QA Wolf</h2>
          <div className={styles.grid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.card}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.cta}>
          <h2>Ready to stop writing tests?</h2>
          <p>Talk to us and see full coverage on your own app.</p>
          <a href="https://www.qawolf.com" className={styles.primary}>
            Get started
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <WolfMark />
          <span>QA Wolf</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.qawolf.com">qawolf.com</a>
          <a href="https://docs.qawolf.com">Docs</a>
          <a href="https://github.com/qawolf">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
