export default function AuditAIDemoPage() {
  const riskCases = [
    {
      id: "RF-1042",
      policy: "POL-883921",
      amount: "$8,420",
      score: 92,
      pattern: "Bank change → refund within 2 days",
      owner: "Agent A. Martin",
      status: "Critical",
    },
    {
      id: "RF-1031",
      policy: "POL-774210",
      amount: "$5,380",
      score: 84,
      pattern: "Refund method differs from original payment",
      owner: "User L. Chen",
      status: "High",
    },
    {
      id: "RF-1017",
      policy: "POL-661942",
      amount: "$3,960",
      score: 78,
      pattern: "Multiple payment methods + refund spike",
      owner: "Broker J. Singh",
      status: "High",
    },
  ];

  const timeline = [
    { time: "10:02", action: "Bank account changed", actor: "Agent A. Martin" },
    { time: "10:14", action: "Refund created", actor: "Agent A. Martin" },
    { time: "10:18", action: "Approval missing", actor: "System flag" },
    { time: "10:26", action: "Refund released", actor: "Billing job" },
  ];

  const signals = [
    "Refund after bank account change",
    "Payment method mismatch",
    "Same-user multi-step action",
    "Commission reversal anomaly",
    "Cancellation and reinstatement loop",
    "Unusual refund timing",
  ];

  const pills: Record<string, string> = {
    Critical: "bg-red-500/15 text-red-300 border-red-400/30",
    High: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    Medium: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,64,175,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(8,145,178,0.14),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
              AuditFlow AI · Enterprise Demo
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Recover 15% of Lost Revenue from Payment Fraud & Fake Refunds
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 lg:text-base">
              Detect suspicious refund patterns, bank account changes, payment-method mismatches,
              and approval gaps in one investigation workspace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:min-w-[360px]">
            <MetricCard label="Flagged Cases" value="128" sub="Last 30 days" />
            <MetricCard label="Critical Alerts" value="19" sub="Needs review" />
            <MetricCard label="Potential Exposure" value="$184K" sub="Estimated impact" />
            <MetricCard label="Avg Review Time" value="7 min" sub="Per case" />
          </div>
        </header>

        <section className="mb-8 grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur lg:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Investigation workspace</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Case graph and event path</h2>
              </div>
              <button className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/20">
                Open Demo Dataset
              </button>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-white/10 bg-[#081423] p-4">
                <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Linked entities involved in suspicious refund flow
                </div>
                <div className="relative h-[340px] overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:26px_26px]">
                  <Node className="left-[8%] top-[42%]" title="Policy" value="POL-883921" tone="sky" />
                  <Node className="left-[34%] top-[18%]" title="Bank Change" value="2 days before refund" tone="cyan" />
                  <Node className="left-[37%] top-[62%]" title="Refund" value="$8,420" tone="red" />
                  <Node className="left-[67%] top-[20%]" title="User" value="A. Martin" tone="amber" />
                  <Node className="left-[70%] top-[64%]" title="Account" value="...4921" tone="violet" />

                  <Line className="left-[21%] top-[42%] w-[18%] rotate-[-28deg]" />
                  <Line className="left-[22%] top-[53%] w-[18%] rotate-[22deg]" />
                  <Line className="left-[47%] top-[28%] w-[19%] rotate-[0deg]" />
                  <Line className="left-[47%] top-[63%] w-[19%] rotate-[0deg]" />
                  <Line className="left-[58%] top-[35%] w-[16%] rotate-[52deg]" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#081423] p-4">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI explanation</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">Why this case was flagged</h3>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-300">
                  <p>
                    This refund was issued <span className="font-semibold text-white">within 48 hours</span> of a
                    bank account update. The same user initiated the bank change and created the refund.
                  </p>
                  <p>
                    The refund destination does not match the original payment method, increasing the likelihood of
                    redirection risk.
                  </p>
                  <p>
                    Similar event sequences occur in only <span className="font-semibold text-white">0.4%</span> of
                    historical cases but represent <span className="font-semibold text-white">17%</span> of
                    high-value refund exceptions.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <SmallStat title="Risk Score" value="92/100" />
                  <SmallStat title="Pattern Rarity" value="0.4%" />
                  <SmallStat title="User Overlap" value="Same User" />
                  <SmallStat title="Review Status" value="Open" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Core detection signals</p>
            <h2 className="mt-1 text-xl font-semibold text-white">What the platform monitors</h2>
            <div className="mt-5 space-y-3">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081423] px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  {signal}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
              Ideal for insurers, banks, fintechs, and audit teams that need a lighter-weight alternative to
              large enterprise intelligence platforms.
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Suspicious cases</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Prioritized investigation queue</h2>
              </div>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
                Export Cases
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Case</th>
                    <th className="px-4 py-3 font-medium">Policy</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium">Pattern</th>
                    <th className="px-4 py-3 font-medium">Owner</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {riskCases.map((item, idx) => (
                    <tr key={item.id} className={idx !== riskCases.length - 1 ? "border-t border-white/10" : ""}>
                      <td className="px-4 py-4 font-medium text-white">{item.id}</td>
                      <td className="px-4 py-4 text-slate-300">{item.policy}</td>
                      <td className="px-4 py-4 text-slate-200">{item.amount}</td>
                      <td className="px-4 py-4 text-slate-300">{item.pattern}</td>
                      <td className="px-4 py-4 text-slate-300">{item.owner}</td>
                      <td className="px-4 py-4">
                        <span className={`rounded-full border px-2.5 py-1 text-xs ${pills[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur lg:col-span-5">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Event timeline</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Case RF-1042</h2>
            </div>

            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={`${item.time}-${idx}`} className="flex gap-4 rounded-2xl border border-white/10 bg-[#081423] p-4">
                  <div className="flex min-w-[56px] items-start justify-center">
                    <div className="rounded-xl bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-200">
                      {item.time}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">{item.action}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.actor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            title="Data Explorer"
            text="Upload or connect transaction data, filter by policy, account, user, region, and payment method, then group anomalies instantly."
          />
          <FeatureCard
            title="AI Investigation Notes"
            text="Generate concise explanations of why a case matters, including timing, sequence rarity, amount sensitivity, and user overlap."
          />
          <FeatureCard
            title="Workflow-Ready Alerts"
            text="Push suspicious refund cases into analyst queues, export review packs, and create structured evidence for audit follow-up."
          />
        </section>
      </div>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  sub: string;
};

function MetricCard({ label, value, sub }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#081423] p-4">
      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{sub}</div>
    </div>
  );
}

type SmallStatProps = {
  title: string;
  value: string;
};

function SmallStat({ title, value }: SmallStatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{title}</div>
      <div className="mt-1 text-base font-semibold text-white">{value}</div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
      <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">
        Module
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

type NodeProps = {
  className: string;
  title: string;
  value: string;
  tone: "sky" | "cyan" | "red" | "amber" | "violet";
};

function Node({ className, title, value, tone }: NodeProps) {
  const toneMap = {
    sky: "border-sky-400/30 bg-sky-400/10 text-sky-100",
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    red: "border-red-400/30 bg-red-400/10 text-red-100",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    violet: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  };

  return (
    <div className={`absolute w-36 rounded-2xl border p-3 shadow-xl ${toneMap[tone]} ${className}`}>
      <div className="text-[11px] uppercase tracking-[0.14em] opacity-70">{title}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

type LineProps = {
  className: string;
};

function Line({ className }: LineProps) {
  return <div className={`absolute h-px bg-gradient-to-r from-cyan-400/60 to-transparent ${className}`} />;
}