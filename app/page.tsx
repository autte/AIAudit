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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-[#0c2340] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-xl font-bold text-blue-300">
              A
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">RevenueLeak AI</div>
              <div className="text-xs text-slate-300">Recover Hidden Revenue from Payments & Refunds</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#how" className="transition hover:text-white">How It Works</a>
            <a href="#modules" className="transition hover:text-white">Modules</a>
            <a href="#results" className="transition hover:text-white">Results</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
			  href="mailto:hello@auditflow.space?subject=Demo%20Request&body=Hi%2C%20I%20would%20like%20to%20book%20a%20demo."
			  className="inline-block rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
			>
			  Book a Demo
		  </a>
        </div>
      </header>

      <section className="bg-[#0c2340] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-200">
              Revenue leakage detection for audit, risk, and compliance teams
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Find and recover hidden revenue from refunds, billing errors, and payment fraud.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Upload your data and instantly detect suspicious refunds, abnormal payment behavior, and control failures — before they turn into real losses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                Scan Your Data in 5 Minutes
              </button>
              <button className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/5">
                See Real Fraud Example
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-700 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-[#102b4f] p-5 shadow-2xl shadow-black/20">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-blue-200">How fraud actually happens</div>
                <div className="mt-1 text-xl font-semibold">Fraud flow & event timeline</div>
              </div>
              <div className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
                Open Demo Case
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/30 p-4">
                <div className="text-sm font-medium text-slate-200">Relationship signals</div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">Bank account changed</div>
                  <div className="ml-8 w-fit rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-amber-100">Refund issued</div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">Customer reimbursement</div>
                  <div className="ml-12 w-fit rounded-xl border border-purple-400/30 bg-purple-400/10 p-3 text-purple-100">Same account reused</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/30 p-4">
                <div className="text-sm font-medium text-slate-200">Why this is suspicious</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The refund was issued one day after a bank account update. The same account also appears on multiple unrelated customer records, raising potential diversion risk.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                    <div className="text-xs uppercase tracking-wide text-slate-400">Risk score</div>
                    <div className="mt-1 text-xl font-semibold text-white">78 / 100</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                    <div className="text-xs uppercase tracking-wide text-slate-400">Pattern rarity</div>
                    <div className="mt-1 text-xl font-semibold text-white">3.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">How it works</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            A simple workflow to detect, explain, and quantify hidden revenue loss.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Built for teams that want a clean, enterprise-style interface that feels credible to audit leaders, compliance teams, and prospective clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-700">
                {card.id}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">What we found</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              See exactly how money leaks happen — and how much is at risk.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This section helps the page feel more professional by combining a realistic case summary with visual investigation elements.
            </p>
            <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Real Example</div>
              <div className="mt-3 text-4xl font-bold tracking-tight text-slate-900">$87,500</div>
              <div className="mt-2 text-lg font-medium text-slate-700">Potential revenue leakage detected in 6 months</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {findings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Suspicious cases</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">Prioritized investigation queue</div>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Export cases</div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-[0.8fr_1fr_1.4fr_0.8fr] bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <div>Case</div>
                <div>Policy</div>
                <div>Pattern</div>
                <div>Status</div>
              </div>
              {[
                ['RF-104', 'POL-2201', 'Refund after bank change', 'Critical'],
                ['RF-116', 'POL-1874', 'Shared bank account', 'High'],
                ['RF-127', 'POL-0912', 'Abnormal refund volume', 'High'],
                ['RF-133', 'POL-4028', 'Out-of-sequence approval', 'Review'],
              ].map(([a, b, c, d]) => (
                <div key={a} className="grid grid-cols-[0.8fr_1fr_1.4fr_0.8fr] items-center border-t border-slate-200 px-4 py-4 text-sm text-slate-700">
                  <div className="font-medium text-slate-900">{a}</div>
                  <div>{b}</div>
                  <div>{c}</div>
                  <div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      d === 'Critical'
                        ? 'bg-red-100 text-red-700'
                        : d === 'High'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {d}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Fraud Process Intelligence</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Most fraud is not a single event — it is a process pattern.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Beyond detecting anomalies, understand the full process flow — where delays, rework loops, and suspicious paths occur.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-500">Process Mining Demo</div>
              <h3 className="mt-2 text-xl font-semibold">Interactive Flow Viewer</h3>
              <p className="mt-3 text-sm text-slate-600">
                Explore real transaction flows to identify unusual paths such as repeated rework, abnormal approval chains, or delayed processing.
              </p>
              <div className="mt-6 rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-500">
                Open interactive demo →
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-sm text-slate-700">
                <li>• Identify excessive rework loops (potential manipulation)</li>
                <li>• Detect abnormal approval paths</li>
                <li>• Highlight delays that hide suspicious activity</li>
                <li>• Understand full transaction lifecycle</li>
              </ul>
              <a
                href="https://flowviewerpy-gg9chu65rycqmr9qkklvxo.streamlit.app/"
                target="_blank"
                className="mt-6 inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                Open Process Mining Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Modules</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Structured modules designed for audit, risk, and finance teams.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These modules make the page feel structured and professional while keeping the story focused on fraud detection, investigation, and business impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Module
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{module.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{module.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#0c2340] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Next step</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Want to uncover hidden revenue in your own data?
            </h2>
            <a
			  href="mailto:hello@auditflow.space?subject=Demo%20Request&body=Hi%2C%20I%20would%20like%20to%20book%20a%20demo."
			  className="inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
			>
			  Book Demo
			</a>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
              Book Demo
            </button>
            <button className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/5">
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
