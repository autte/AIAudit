"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function AuditAIDemoPage() {
  const demoCases = [
    {
      id: "RF-1042",
      policy: "POL-883921",
      amount: "$8,420",
      score: 92,
      pattern: "Bank change → refund within 2 days",
      owner: "Agent A. Martin",
      status: "Critical",
      exposure: "$184K",
      avgReview: "7 min",
      explanation: [
        "This refund was issued within 48 hours of a bank account update. The same user initiated the bank change and created the refund.",
        "The refund destination does not match the original payment method, increasing the likelihood of redirection risk.",
        "Similar event sequences occur in only 0.4% of historical cases but represent 17% of high-value refund exceptions.",
      ],
      stats: {
        risk: "92/100",
        rarity: "0.4%",
        overlap: "Same User",
        review: "Open",
      },
      timeline: [
        { time: "10:02", action: "Bank account changed", actor: "Agent A. Martin" },
        { time: "10:14", action: "Refund created", actor: "Agent A. Martin" },
        { time: "10:18", action: "Approval missing", actor: "System flag" },
        { time: "10:26", action: "Refund released", actor: "Billing job" },
      ],
      nodes: [
        { className: "left-[8%] top-[42%]", title: "Policy", value: "POL-883921", tone: "sky", delay: 0.1 },
        { className: "left-[34%] top-[18%]", title: "Bank Change", value: "2 days before refund", tone: "cyan", delay: 0.25 },
        { className: "left-[37%] top-[62%]", title: "Refund", value: "$8,420", tone: "red", delay: 0.4 },
        { className: "left-[67%] top-[20%]", title: "User", value: "A. Martin", tone: "amber", delay: 0.55 },
        { className: "left-[70%] top-[64%]", title: "Account", value: "...4921", tone: "violet", delay: 0.7 },
      ],
      lines: [
        { className: "left-[21%] top-[42%] w-[18%] rotate-[-28deg]", delay: 0.15 },
        { className: "left-[22%] top-[53%] w-[18%] rotate-[22deg]", delay: 0.3 },
        { className: "left-[47%] top-[28%] w-[19%] rotate-[0deg]", delay: 0.45 },
        { className: "left-[47%] top-[63%] w-[19%] rotate-[0deg]", delay: 0.55 },
        { className: "left-[58%] top-[35%] w-[16%] rotate-[52deg]", delay: 0.7 },
      ],
    },
    {
      id: "RF-1031",
      policy: "POL-774210",
      amount: "$5,380",
      score: 84,
      pattern: "Refund method differs from original payment",
      owner: "User L. Chen",
      status: "High",
      exposure: "$121K",
      avgReview: "6 min",
      explanation: [
        "The customer originally paid by card, but the refund was released to a bank account not previously used on the policy.",
        "A payment-method mismatch was followed by an unusually large refund on the same billing cycle.",
        "This pattern is uncommon in standard refund flows and often requires source-of-funds verification.",
      ],
      stats: {
        risk: "84/100",
        rarity: "1.1%",
        overlap: "Method Mismatch",
        review: "Pending",
      },
      timeline: [
        { time: "09:11", action: "Credit card payment posted", actor: "Customer payment" },
        { time: "11:42", action: "Bank refund method added", actor: "User L. Chen" },
        { time: "12:03", action: "Refund created", actor: "User L. Chen" },
        { time: "12:16", action: "Exception routed", actor: "Fraud monitor" },
      ],
      nodes: [
        { className: "left-[10%] top-[24%]", title: "Card Payment", value: "Visa ••••1148", tone: "sky", delay: 0.1 },
        { className: "left-[10%] top-[66%]", title: "Policy", value: "POL-774210", tone: "cyan", delay: 0.22 },
        { className: "left-[40%] top-[45%]", title: "Refund", value: "$5,380", tone: "red", delay: 0.35 },
        { className: "left-[70%] top-[20%]", title: "Bank Method", value: "Added same day", tone: "amber", delay: 0.5 },
        { className: "left-[72%] top-[70%]", title: "Owner", value: "L. Chen", tone: "violet", delay: 0.65 },
      ],
      lines: [
        { className: "left-[24%] top-[34%] w-[20%] rotate-[20deg]", delay: 0.15 },
        { className: "left-[24%] top-[63%] w-[19%] rotate-[-18deg]", delay: 0.28 },
        { className: "left-[49%] top-[37%] w-[20%] rotate-[-22deg]", delay: 0.43 },
        { className: "left-[50%] top-[61%] w-[20%] rotate-[18deg]", delay: 0.56 },
      ],
    },
    {
      id: "RF-1017",
      policy: "POL-661942",
      amount: "$3,960",
      score: 78,
      pattern: "Multiple payment methods + refund spike",
      owner: "Broker J. Singh",
      status: "High",
      exposure: "$94K",
      avgReview: "5 min",
      explanation: [
        "Two payment methods were used on the same policy period, followed by a refund spike higher than peer cases in the same segment.",
        "The policy also shows a cancellation-and-reinstatement loop that often masks true refund behavior.",
        "The amount is moderate, but the sequence structure is more suspicious than the value alone.",
      ],
      stats: {
        risk: "78/100",
        rarity: "2.3%",
        overlap: "Multi-Method",
        review: "Escalated",
      },
      timeline: [
        { time: "08:44", action: "ACH payment posted", actor: "Customer" },
        { time: "09:06", action: "Card payment posted", actor: "Customer" },
        { time: "14:30", action: "Policy reinstated", actor: "Broker J. Singh" },
        { time: "15:02", action: "Refund spike flagged", actor: "Risk engine" },
      ],
      nodes: [
        { className: "left-[8%] top-[24%]", title: "ACH", value: "Bank debit", tone: "sky", delay: 0.1 },
        { className: "left-[8%] top-[66%]", title: "Card", value: "Mastercard", tone: "cyan", delay: 0.22 },
        { className: "left-[38%] top-[45%]", title: "Refund", value: "$3,960", tone: "red", delay: 0.35 },
        { className: "left-[68%] top-[18%]", title: "Policy Loop", value: "Cancel → Reinstate", tone: "amber", delay: 0.5 },
        { className: "left-[70%] top-[68%]", title: "Broker", value: "J. Singh", tone: "violet", delay: 0.65 },
      ],
      lines: [
        { className: "left-[22%] top-[34%] w-[19%] rotate-[18deg]", delay: 0.15 },
        { className: "left-[22%] top-[62%] w-[19%] rotate-[-18deg]", delay: 0.28 },
        { className: "left-[47%] top-[34%] w-[20%] rotate-[-20deg]", delay: 0.43 },
        { className: "left-[47%] top-[61%] w-[20%] rotate-[18deg]", delay: 0.56 },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % demoCases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeCase = demoCases[activeIndex];
  const riskCases = demoCases;

  const timeline = activeCase.timeline;

  const signals = [
    "Refund after bank account change",
    "Payment method mismatch",
    "Same-user multi-step action",
    "Commission reversal anomaly",
    "Cancellation and reinstatement loop",
    "Unusual refund timing",
  ];

  // Add the type definition ": Record<string, string>" or cast it
	const pills: Record<string, string> = {
	  Critical: "bg-red-500/15 text-red-300 border-red-400/30",
	  High: "bg-amber-500/15 text-amber-300 border-amber-400/30",
	  Medium: "bg-sky-500/15 text-sky-300 border-sky-400/30",
	};

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,64,175,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(8,145,178,0.14),transparent_22%)]" />

      <style>{`
          @keyframes nodeFloat {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.96; }
            50% { transform: translateY(-4px) scale(1.03); opacity: 1; }
          }
          @keyframes nodeGlow {
            0%, 100% { opacity: 0.08; }
            50% { opacity: 0.22; }
          }
          @keyframes linePulse {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.9; }
          }
        `}</style>
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
            <div className="mt-5">
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                Launch your in-house risk engine in as little as 24 hours
              </p>
              <div className="flex flex-wrap gap-3">
              <a
                href="mailto:caoxin83@gmail.com?subject=Demo%20Request%20-%20AuditFlow%20AI"
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/15 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/25"
              >
                Ask for a Demo
              </a>
              <a
                href="https://www.linkedin.com/in/xin-cao-64822a271/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                Contact on LinkedIn
              </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:min-w-[360px]">
            <MetricCard label="Flagged Cases" value="128" sub="Last 30 days" />
            <MetricCard label="Critical Alerts" value="19" sub="Needs review" />
            <MetricCard label="Potential Exposure" value={activeCase.exposure} sub="Estimated impact" />
            <MetricCard label="Avg Review Time" value={activeCase.avgReview} sub="Per case" />
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
                  <div className="absolute right-3 top-3 z-20 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                    Live Demo · Auto Play
                  </div>
                  {activeCase.nodes.map((node) => (
                    <Node key={`${activeCase.id}-${node.title}`} {...node} />
                  ))}
                  {activeCase.lines.map((line, idx) => (
                    <Line key={`${activeCase.id}-line-${idx}`} {...line} />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#081423] p-4">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI explanation</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">Why {activeCase.id} was flagged</h3>
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-300">
                  {activeCase.explanation.map((text, idx) => (
                    <p key={`${activeCase.id}-exp-${idx}`}>{text}</p>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <SmallStat title="Risk Score" value={activeCase.stats.risk} />
                  <SmallStat title="Pattern Rarity" value={activeCase.stats.rarity} />
                  <SmallStat title="User Overlap" value={activeCase.stats.overlap} />
                  <SmallStat title="Review Status" value={activeCase.stats.review} />
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
                    <tr
                      key={item.id}
                      className={`${idx !== riskCases.length - 1 ? "border-t border-white/10" : ""} ${item.id === activeCase.id ? "bg-cyan-400/5" : ""}`}
                    >
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
              <div className="flex items-center justify-between gap-3">
                <h2 className="mt-1 text-xl font-semibold text-white">Case {activeCase.id}</h2>
                <div className="flex gap-2">
                  {demoCases.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full ${item.id === activeCase.id ? "bg-cyan-300" : "bg-white/20"}`}
                      aria-label={`Show ${item.id}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100">
              Auto-switching every 4.5 seconds. Click the dots to manually change the case.
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

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Demo request</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Want a live walkthrough with your own fraud scenarios?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
                Send me a message and I can walk you through the platform, tailor the demo to your use case,
                and discuss how it can detect refund fraud, payment abuse, and revenue leakage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:caoxin83@gmail.com?subject=Demo%20Request%20-%20AuditFlow%20AI&body=Hi%20Aurora%2C%20I%27d%20like%20to%20book%20a%20demo."
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/15 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/25"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/xin-cao-64822a271/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Message on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MetricCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#081423] p-4">
      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{sub}</div>
    </div>
  );
}

function SmallStat({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{title}</div>
      <div className="mt-1 text-base font-semibold text-white">{value}</div>
    </div>
  );
}

function FeatureCard({ title, text }) {
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

function Node({ className, title, value, tone, delay = 0 }) {
  const toneMap = {
    sky: "border-sky-400/30 bg-sky-400/10 text-sky-100",
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    red: "border-red-400/30 bg-red-400/10 text-red-100",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-100",
    violet: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  };

  return (
    <div
      className={`absolute w-36 rounded-2xl border p-3 shadow-xl ${toneMap[tone]} ${className}`}
      style={{
        animation: `nodeFloat 3.2s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          animation: `nodeGlow 2.4s ease-in-out ${delay}s infinite`,
        }}
      />
      <div className="relative text-[11px] uppercase tracking-[0.14em] opacity-70">{title}</div>
      <div className="relative mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function Line({ className, delay = 0 }) {
  return (
    <div
      style={{
        transformOrigin: "left center",
        animation: `linePulse 2.2s ease-in-out ${delay}s infinite`,
      }}
      className={`absolute h-px bg-gradient-to-r from-cyan-400/60 via-cyan-300/70 to-transparent ${className}`}
    />
  );
}
