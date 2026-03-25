export default function FraudRevenueLandingPage() {
  const cards = [
    {
      id: '01',
      title: 'Detect Suspicious Transactions',
      desc: 'Surface abnormal refunds, payment anomalies, and control gaps from billing and refund data in minutes.',
    },
    {
      id: '02',
      title: 'Uncover Hidden Patterns',
      desc: 'Reveal connections across customers, bank accounts, users, and transactions to identify suspicious behavior.',
    },
    {
      id: '03',
      title: 'Investigate with Clarity',
      desc: 'Follow event timelines, review linked signals, and understand how risky cases emerged step by step.',
    },
    {
      id: '04',
      title: 'Quantify Financial Impact',
      desc: 'Estimate potential exposure and prioritize the cases most likely to represent revenue leakage or fraud.',
    },
  ];

  const findings = [
    'Refund issued shortly after bank account change',
    'Same bank account linked to multiple customers',
    'Abnormal refund activity by specific users',
    'Control failures hidden inside normal workflows',
  ];

  const modules = [
    {
      title: 'Detection Module',
      body: 'Upload Excel or CSV data to identify suspicious refunds, duplicate-like behavior, unusual timing, and payment anomalies.',
    },
    {
      title: 'Investigation Module',
      body: 'Review event timelines, linked entities, and case narratives so audit, risk, and compliance teams can investigate faster.',
    },
    {
      title: 'Revenue Leakage Module',
      body: 'Estimate potential dollars at risk and focus review effort on the patterns most likely to impact financial results.',
    },
  ];

  const stats = [
    { label: 'Suspicious Transactions', value: '128', note: 'Last 30 days' },
    { label: 'Potential Revenue Loss', value: '$94K', note: 'Estimated risk' },
    { label: 'Avg Review Time', value: '5 min', note: 'Per case' },
    { label: 'Critical Alerts', value: '19', note: 'Need review' },
  ];

  const cases = [
    ['RF-104', 'POL-2201', 'Refund after bank change', 'Critical'],
    ['RF-116', 'POL-1874', 'Shared bank account', 'High'],
    ['RF-127', 'POL-0912', 'Abnormal refund volume', 'High'],
    ['RF-133', 'POL-4028', 'Out-of-sequence approval', 'Review'],
  ];

  return (
    <div className="min-h-screen bg-[#071a2f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071a2f]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-xl font-bold text-blue-300">
              A
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">RevenueLeak AI</div>
              <div className="text-xs text-slate-300">
                Recover Hidden Revenue from Payments & Refunds
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#how" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#results" className="transition hover:text-white">
              Results
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#modules" className="transition hover:text-white">
              Modules
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="mailto:hello@auditflow.space?subject=Demo%20Request&body=Hi%2C%20I%20would%20like%20to%20request%20a%20live%20demo."
            className="inline-block rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
          >
            Request Live Demo
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071a2f_0%,#0b223d_55%,#102845_100%)] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
          <div className="h-72 w-[42rem] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-200">
              Revenue leakage detection for audit, risk, and compliance teams
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Find and recover hidden revenue from refunds, billing errors, and payment fraud.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Upload your data and instantly detect suspicious refunds, abnormal payment behavior,
              and control failures — before they turn into real losses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@auditflow.space?subject=Demo%20Request&body=Hi%2C%20I%20would%20like%20to%20request%20a%20live%20demo."
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Request Live Demo
              </a>

              <a
                href="https://flowviewerpy-gg9chu65rycqmr9qkklvxo.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/5"
              >
                See Real Fraud Example
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,43,79,0.96),rgba(10,28,50,0.96))] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-blue-200">
                    Risk Investigation Workspace
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    Fraud flow & event timeline
                  </div>
                </div>
              </div>

              <a
                href="https://flowviewerpy-gg9chu65rycqmr9qkklvxo.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200 transition hover:bg-blue-400/20"
              >
                Open Demo Case
              </a>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                <div className="text-sm font-medium text-slate-200">Relationship signals</div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                    Bank account changed
                  </div>
                  <div className="ml-8 w-fit rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-amber-100">
                    Refund issued
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                    Customer reimbursement
                  </div>
                  <div className="ml-12 w-fit rounded-xl border border-purple-400/30 bg-purple-400/10 p-3 text-purple-100">
                    Same account reused
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                <div className="text-sm font-medium text-slate-200">Why this is suspicious</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The refund was issued one day after a bank account update. The same account
                  also appears on multiple unrelated customer records, raising potential diversion
                  risk.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                    <div className="text-xs uppercase tracking-wide text-slate-400">Risk score</div>
                    <div className="mt-1 text-xl font-semibold text-white">78 / 100</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Pattern rarity
                    </div>
                    <div className="mt-1 text-xl font-semibold text-white">3.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 bg-[linear-gradient(180deg,rgba(16,40,69,0)_0%,rgba(10,30,52,0.9)_100%)]" />
      </section>

      <section
        id="how"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0b223d_0%,#0f2744_100%)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
          <div className="h-64 w-[36rem] rounded-full bg-blue-400/8 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              How it works
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              A simple workflow to detect, explain, and quantify hidden revenue loss.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Built for teams that want a clean, enterprise-style interface that feels credible to
              audit leaders, compliance teams, and prospective clients.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="rounded-3xl border border-blue-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-sm font-semibold text-blue-200">
                  {card.id}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.08),transparent_24%),linear-gradient(180deg,#0f2744_0%,#12304f_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              What we found
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              See exactly how money leaks happen — and how much is at risk.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This section helps the page feel more professional by combining a realistic case
              summary with visual investigation elements.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Real Example
              </div>
              <div className="mt-3 text-4xl font-bold tracking-tight text-white">$87,500</div>
              <div className="mt-2 text-lg font-medium text-slate-200">
                Potential revenue leakage detected in 6 months
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {findings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#eef4fb_0%,#f8fbff_100%)] p-6 text-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Investigation Console
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                  Prioritized investigation queue
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-slate-600">Live screening</span>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Open cases
                </div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">24</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Critical
                </div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">7</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Potential loss
                </div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">$87.5K</div>
              </div>
            </div>

            <div className="space-y-3">
              {cases.map(([a, b, c, d]) => (
                <div
                  key={a}
                  className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 md:grid-cols-[0.8fr_1fr_1.6fr_0.8fr_0.7fr]"
                >
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">Case</div>
                    <div className="mt-1 font-semibold text-slate-900">{a}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">Policy</div>
                    <div className="mt-1 text-slate-700">{b}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">Pattern</div>
                    <div className="mt-1 text-slate-700">{c}</div>
                  </div>

                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        d === 'Critical'
                          ? 'bg-red-100 text-red-700'
                          : d === 'High'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {d}
                    </span>
                  </div>

                  <button className="rounded-full border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#12304f_0%,#102845_100%)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
          <div className="h-64 w-[38rem] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Fraud Process Intelligence
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Most fraud is not a single event — it is a process pattern.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Beyond detecting anomalies, understand the full process flow — where delays, rework
              loops, and suspicious paths occur.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-blue-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="text-sm font-semibold text-slate-300">Process Mining Demo</div>
              <h3 className="mt-2 text-xl font-semibold text-white">Interactive Flow Viewer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore real transaction flows to identify unusual paths such as repeated rework,
                abnormal approval chains, or delayed processing.
              </p>

              <a
                href="https://flowviewerpy-gg9chu65rycqmr9qkklvxo.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-xl border border-white/10 bg-[#f4f7fb] p-4 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                Open interactive demo →
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-sm leading-7 text-slate-300">
                <li>• Identify excessive rework loops that may indicate manipulation</li>
                <li>• Detect abnormal approval paths and broken control chains</li>
                <li>• Highlight delays that hide suspicious operational behavior</li>
                <li>• Understand the full transaction lifecycle before escalation</li>
              </ul>

              <a
                href="https://flowviewerpy-gg9chu65rycqmr9qkklvxo.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Open Process Mining Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="modules"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#102845_0%,#0b223d_100%)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Modules
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Structured modules designed for audit, risk, and finance teams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              These modules keep the story focused on detection, investigation, and financial
              impact while making the page feel like a real product.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-3xl border border-blue-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="inline-flex rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Module
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{module.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#071a2f] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              Next step
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Want to uncover hidden revenue in your own data?
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Review the demo workflow, evaluate the investigation experience, and discuss how the
              same approach could apply to your own data environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@auditflow.space?subject=Demo%20Request&body=Hi%2C%20I%20would%20like%20to%20schedule%20a%20demo%20review."
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Schedule a Demo Review
            </a>

            <a
              href="mailto:hello@auditflow.space"
              className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}