"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Network,
  Search,
  FileText,
  Database,
  Brain,
  Radar,
  Users,
  Building2,
  ChevronRight,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Lock,
  Sparkles,
  BarChart3,
  Eye,
  Globe,
  Receipt,
  Newspaper,
  FlaskConical,
  ScanSearch,
  Upload,
  CheckCheck,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Tab = "Overview" | "Investigation" | "Pattern Ops" | "Architecture" | "Customers";

type AlertItem = {
  id: string;
  entity: string;
  title: string;
  severity: "High" | "Medium" | "Low";
  risk: number;
  amount: string;
  status: string;
};

type InvestigationStep = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
};

type Layer = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bullets: string[];
};

type Customer = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

type IntelSource = {
  name: string;
  region: string;
  type: string;
  freshness: string;
  status: string;
};

type PatternCandidate = {
  id: string;
  pattern: string;
  source: string;
  features: string[];
  precision: string;
  alerts: number;
  rollout: "Rejected" | "Investigation Only" | "Soft Alert" | "Production";
};

const tabs: Tab[] = ["Overview", "Investigation", "Pattern Ops", "Architecture", "Customers"];

const alerts: AlertItem[] = [
  {
    id: "CASE-24091",
    entity: "Policy Holder A",
    title: "Refund after bank account change",
    severity: "High",
    risk: 92,
    amount: "$8,420",
    status: "AI Investigating",
  },
  {
    id: "CASE-24077",
    entity: "Broker Cluster 7",
    title: "Commission reversal pattern",
    severity: "Medium",
    risk: 74,
    amount: "$12,160",
    status: "Needs Analyst Review",
  },
  {
    id: "CASE-24063",
    entity: "Claimant D",
    title: "Multi-device refund ring",
    severity: "High",
    risk: 88,
    amount: "$5,930",
    status: "Escalated",
  },
];

const investigationSteps: InvestigationStep[] = [
  {
    icon: Radar,
    title: "Alert Triggered",
    detail: "Rule and graph anomaly detected after a refund followed a recent bank-account change.",
  },
  {
    icon: Search,
    title: "AI Hypothesis",
    detail: "Detective Agent suspects mule account reuse and an unusual approval path.",
  },
  {
    icon: Network,
    title: "Link Analysis",
    detail: "Shared device and IP connect this case to two prior suspicious refunds.",
  },
  {
    icon: Brain,
    title: "Behavior Profiling",
    detail: "Form edits completed in 11 seconds with a low human-dwell pattern.",
  },
  {
    icon: FileText,
    title: "Evidence Drafted",
    detail: "Legal Agent generates a case narrative, timeline, and SAR-ready summary.",
  },
];

const layers: Layer[] = [
  {
    name: "Semantic Adapter",
    icon: Database,
    color: "from-cyan-500/20 to-sky-500/10",
    bullets: [
      "Infer schema from raw tables, CSVs, and APIs",
      "Map source fields into a fraud event model",
      "Recommend confidence-based mappings",
    ],
  },
  {
    name: "Knowledge Agent",
    icon: Brain,
    color: "from-violet-500/20 to-fuchsia-500/10",
    bullets: [
      "Translate fraud intelligence into candidate logic",
      "Generate SQL and graph-friendly patterns",
      "Continuously refresh a pattern library",
    ],
  },
  {
    name: "Detective Agent",
    icon: Search,
    color: "from-amber-500/20 to-orange-500/10",
    bullets: [
      "Launch tool-using investigations",
      "Expand linked entities across the graph",
      "Build a machine-readable evidence pack",
    ],
  },
  {
    name: "Legal Agent",
    icon: FileText,
    color: "from-emerald-500/20 to-green-500/10",
    bullets: [
      "Generate an explainable audit trail",
      "Draft SAR and internal fraud memos",
      "Support analyst sign-off and governance",
    ],
  },
];

const customers: Customer[] = [
  {
    title: "Insurance Fraud / SIU",
    icon: ShieldAlert,
    text: "Refund abuse, claims collusion, bank-account changes, and identity rings.",
  },
  {
    title: "Internal Audit Teams",
    icon: BarChart3,
    text: "High write-offs, approval exceptions, commission manipulation, and control failures.",
  },
  {
    title: "AML / Compliance Ops",
    icon: Lock,
    text: "Case triage, entity links, suspicious narratives, and evidence packaging.",
  },
  {
    title: "Mid-Market Banks",
    icon: Building2,
    text: "An investigation copilot layered on top of existing rules engines and alert queues.",
  },
];

const intelSources: IntelSource[] = [
  { name: "INTERPOL", region: "Global", type: "Law enforcement", freshness: "2h ago", status: "Ingested" },
  { name: "FBI IC3", region: "US", type: "Public advisory", freshness: "5h ago", status: "Ingested" },
  { name: "CAFC", region: "Canada", type: "Fraud bulletin", freshness: "Today", status: "Ingested" },
  { name: "Frank on Fraud", region: "Industry", type: "Trend source", freshness: "Today", status: "Parsed" },
];

const patternCandidates: PatternCandidate[] = [
  {
    id: "PAT-311",
    pattern: "AI voice impersonation followed by rapid account recovery",
    source: "FBI IC3 + CAFC",
    features: ["new_contact_to_mfa_reset_minutes", "beneficiary_change_1h", "device_novelty_score"],
    precision: "18.4%",
    alerts: 39,
    rollout: "Soft Alert",
  },
  {
    id: "PAT-287",
    pattern: "Burst of micro-payments across multiple payment methods",
    source: "Frank on Fraud",
    features: ["payment_methods_3min", "sub5_amount_count", "retry_burst_score"],
    precision: "24.9%",
    alerts: 14,
    rollout: "Production",
  },
  {
    id: "PAT-305",
    pattern: "Refund after bank change with linked device reuse",
    source: "Internal confirmed cases",
    features: ["bank_change_to_refund_hours", "shared_device_case_count", "approver_exception_score"],
    precision: "31.2%",
    alerts: 11,
    rollout: "Production",
  },
  {
    id: "PAT-319",
    pattern: "Cross-border urgency message with payout path shift",
    source: "INTERPOL",
    features: ["country_hop_24h", "new_payee_after_contact", "contact_channel_switch_rate"],
    precision: "6.1%",
    alerts: 132,
    rollout: "Rejected",
  },
];

const metricCards = [
  { label: "Semantic Mapping", value: "Zero-to-usable in hours", icon: Globe },
  { label: "Investigation Speed", value: "5x–10x faster", icon: Clock3 },
  { label: "Analyst Burden", value: "Reduced manual link chasing", icon: Users },
  { label: "Evidence Quality", value: "Narrative + audit trail", icon: FileText },
] as const;

function clampRisk(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

function rolloutClass(rollout: PatternCandidate["rollout"]): string {
  const styles = {
    Rejected: "bg-red-400/15 text-red-200 border-red-400/20",
    "Investigation Only": "bg-violet-400/15 text-violet-200 border-violet-400/20",
    "Soft Alert": "bg-amber-400/15 text-amber-200 border-amber-400/20",
    Production: "bg-emerald-400/15 text-emerald-200 border-emerald-400/20",
  } as const;
  return styles[rollout];
}

function RiskGauge({ value }: { value: number }) {
  const safeValue = clampRisk(value);
  const angle = (safeValue / 100) * 180;

  return (
    <div className="relative flex h-40 w-64 items-end justify-center">
      <div className="absolute inset-x-0 bottom-0 mx-auto h-32 w-64 rounded-t-full border border-white/10 bg-gradient-to-t from-white/5 to-transparent" />
      <div className="absolute bottom-0 h-1 w-1 rounded-full bg-white" />
      <div
        className="absolute bottom-0 h-24 origin-bottom rounded-full bg-gradient-to-t from-cyan-400 to-cyan-200"
        style={{ width: 3, transform: `rotate(${angle - 90}deg)` }}
      />
      <div className="absolute bottom-4 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">Risk Confidence</div>
        <div className="mt-1 text-4xl font-semibold text-white">{safeValue}</div>
      </div>
    </div>
  );
}

function Node({ x, y, label, active = false }: { x: string; y: string; label: string; active?: boolean }) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs ${
        active
          ? "border-cyan-400 bg-cyan-400/15 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          : "border-white/10 bg-white/5 text-zinc-200"
      }`}
      style={{ left: x, top: y }}
    >
      {label}
    </div>
  );
}

function RolloutBadge({ rollout }: { rollout: PatternCandidate["rollout"] }) {
  return <span className={`rounded-full border px-2.5 py-1 text-xs ${rolloutClass(rollout)}`}>{rollout}</span>;
}

function SectionCard({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-cyan-300" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function OverviewTab({ selectedCase, setSelectedCase, topReasons }: {
  selectedCase: AlertItem;
  setSelectedCase: React.Dispatch<React.SetStateAction<AlertItem>>;
  topReasons: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-8">
        <SectionCard title="Live Command Surface" icon={Activity}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Open Alerts", "126", "↓ 18% analyst time projected"],
              ["AI Cases Closed", "42", "auto-evidence generated"],
              ["Linked Risk Rings", "9", "3 require escalation"],
            ].map(([label, value, sub]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</div>
                <div className="mt-3 text-3xl font-semibold">{value}</div>
                <div className="mt-2 text-sm text-zinc-300">{sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#060b18] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">AI Investigation Canvas</div>
                  <div className="mt-1 text-lg font-medium">Refund Ring: Policy Holder A</div>
                </div>
                <Badge className="rounded-full bg-cyan-400/15 text-cyan-100">Graph Expanded</Badge>
              </div>

              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <line x1="28" y1="42" x2="50" y2="26" stroke="rgba(255,255,255,0.18)" />
                <line x1="28" y1="42" x2="52" y2="60" stroke="rgba(255,255,255,0.18)" />
                <line x1="50" y1="26" x2="72" y2="42" stroke="rgba(34,211,238,0.6)" />
                <line x1="52" y1="60" x2="72" y2="42" stroke="rgba(34,211,238,0.6)" />
                <line x1="52" y1="60" x2="78" y2="70" stroke="rgba(255,255,255,0.18)" />
                <line x1="28" y1="42" x2="18" y2="68" stroke="rgba(255,255,255,0.18)" />
              </svg>

              <Node x="28%" y="42%" label="Account A" active />
              <Node x="50%" y="26%" label="Device D-14" />
              <Node x="52%" y="60%" label="Bank Acct 8931" />
              <Node x="72%" y="42%" label="Prior Case B" active />
              <Node x="78%" y="70%" label="Address Match" />
              <Node x="18%" y="68%" label="Approver U-9" />

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  ["Entities", "14"],
                  ["Shared Links", "7"],
                  ["Known Bad Nodes", "2"],
                  ["Confidence", "92%"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{k}</div>
                    <div className="mt-2 text-xl font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Decision Layer</div>
              <div className="mt-2 text-lg font-medium">Case Confidence Engine</div>
              <div className="mt-3 flex justify-center">
                <RiskGauge value={selectedCase.risk} />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-zinc-500">Top Action</div>
                  <div className="mt-1 font-medium text-cyan-100">Queue for SIU Review</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-zinc-500">Evidence Pack</div>
                  <div className="mt-1 font-medium text-emerald-100">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="xl:col-span-4 space-y-6">
        <SectionCard title="Priority Cases" icon={AlertTriangle}>
          <div className="space-y-3">
            {alerts.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(item)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selectedCase.id === item.id
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-white/10 bg-black/20 hover:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.id}</div>
                    <div className="mt-1 font-medium">{item.title}</div>
                    <div className="mt-1 text-sm text-zinc-400">{item.entity}</div>
                  </div>
                  <Badge className="rounded-full bg-white/10 text-white">{item.risk}</Badge>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                  <span>{item.amount}</span>
                  <span>{item.status}</span>
                </div>
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Why This Case Matters" icon={CheckCircle2}>
          <div className="space-y-3">
            {topReasons.map((reason, i) => (
              <div key={reason} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-sm">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-100">{i + 1}</div>
                <div className="text-zinc-300">{reason}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function InvestigationTab() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-7">
        <SectionCard title="Autonomous Investigation Timeline" icon={Network}>
          <div className="space-y-4">
            {investigationSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{step.title}</div>
                      <ChevronRight className="h-4 w-4 text-zinc-500" />
                      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Step {idx + 1}</div>
                    </div>
                    <div className="mt-2 text-sm text-zinc-400">{step.detail}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionCard>
      </div>

      <div className="xl:col-span-5 space-y-6">
        <SectionCard title="Investigator Console" icon={Eye}>
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="text-zinc-500">Latest tool call</div>
              <div className="mt-1 font-mono text-cyan-100">find_linked_devices(account_id=&quot;A&quot;, lookback=&quot;90d&quot;)</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="text-zinc-500">Result</div>
              <div className="mt-1">2 overlapping devices found. 1 linked to a prior escalated case.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="text-zinc-500">Next recommended action</div>
              <div className="mt-1 text-amber-200">Pull note history and compare approver behavior clusters.</div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Draft Case Narrative" icon={Receipt}>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-300">
            Account A is flagged for suspicious refund behavior. A bank account was changed 2 days before a high-value refund was issued.
            The same device was previously observed in two suspicious cases, one of which had already been escalated. The approval path
            contains repeated exception patterns and generic notes. Based on temporal sequence, entity linkage, and behavior profile, this
            case should be held for specialist review.
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function PatternOpsTab() {
  const prodCount = patternCandidates.filter((p) => p.rollout === "Production").length;
  const rejectedCount = patternCandidates.filter((p) => p.rollout === "Rejected").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <SectionCard title="Daily Global Fraud Pattern Learning" icon={Newspaper}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                ["Sources Scanned", "18", "official + industry + internal"],
                ["Candidates Extracted", "7", "LLM normalized into fraud ontology"],
                ["Promoted Today", String(prodCount), "validated on recent history"],
                ["Rejected", String(rejectedCount), "too noisy for production"],
              ].map(([label, value, sub]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</div>
                  <div className="mt-3 text-3xl font-semibold">{value}</div>
                  <div className="mt-2 text-sm text-zinc-300">{sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-3xl border border-white/10 bg-[#060b18] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Pattern Ops Pipeline</div>
                    <div className="mt-1 text-lg font-medium">Learn → Backtest → Promote</div>
                  </div>
                  <Badge className="rounded-full bg-cyan-400/15 text-cyan-100">Daily Run: 03:00</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Upload, title: "Ingest Sources", detail: "Pull advisories, blogs, and internal confirmed cases" },
                    { icon: Brain, title: "Extract Tactics", detail: "Convert text into signals, entities, and time windows" },
                    { icon: FlaskConical, title: "Backtest on 90 Days", detail: "Measure precision, alert volume, and overlap" },
                    { icon: CheckCheck, title: "Promote Selectively", detail: "Publish only to investigation-only, soft alert, or production" },
                  ].map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{step.title}</div>
                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Step {idx + 1}</span>
                          </div>
                          <div className="mt-1 text-sm text-zinc-400">{step.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Today’s Source Feed</div>
                <div className="mt-2 text-lg font-medium">Fresh Intel Inputs</div>
                <div className="mt-4 space-y-3">
                  {intelSources.map((source) => (
                    <div key={source.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div>
                        <div className="font-medium">{source.name}</div>
                        <div className="mt-1 text-sm text-zinc-400">{source.region} · {source.type}</div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-cyan-200">{source.status}</div>
                        <div className="mt-1 text-zinc-500">{source.freshness}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="xl:col-span-4">
          <SectionCard title="Auto-Generated Candidate Logic" icon={ScanSearch}>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Candidate SQL</div>
                <div className="mt-2 font-mono text-sm leading-6 text-cyan-100">
                  <div>COUNT(DISTINCT payment_method) &gt;= 5</div>
                  <div>AND amount &lt; 5</div>
                  <div>AND event_window &lt;= 3 min</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Candidate Features</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "payment_methods_3min",
                    "retry_burst_score",
                    "shared_device_case_count",
                    "bank_change_to_refund_hours",
                  ].map((feature) => (
                    <Badge key={feature} className="rounded-full bg-white/10 text-zinc-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Guardrails</div>
                <div className="mt-2 space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-emerald-300" /> Backtest before publish
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-emerald-300" /> Version every promoted pattern
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-300" /> No direct blog-to-production push
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      <SectionCard title="Candidate Backtest and Rollout Decisions" icon={FlaskConical}>
        <div className="space-y-3">
          {patternCandidates.map((candidate) => (
            <div key={candidate.id} className="rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-cyan-400/15 text-cyan-100">{candidate.id}</Badge>
                    <div className="font-medium">{candidate.pattern}</div>
                  </div>
                  <div className="mt-2 text-sm text-zinc-400">Source: {candidate.source}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {candidate.features.map((feature) => (
                      <Badge key={feature} className="rounded-full bg-white/10 text-zinc-200">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid min-w-[240px] grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-zinc-500">Precision</div>
                    <div className="mt-1 font-medium text-white">{candidate.precision}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-zinc-500">Alerts</div>
                    <div className="mt-1 font-medium text-white">{candidate.alerts}</div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-zinc-500">Rollout</div>
                    <RolloutBadge rollout={candidate.rollout} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function ArchitectureTab() {
  return (
    <div className="space-y-6">
      <SectionCard title="Product Architecture" icon={Network}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${layer.color} p-5`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-black/20 p-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-medium">{layer.name}</div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-zinc-300">
                  {layer.bullets.map((b) => (
                    <div key={b} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      {b}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          ["Input Signals", ["SQL / CSV / APIs / event streams", "Transaction logs, notes, devices, IPs, approvals", "Fraud intelligence and external risk context"]],
          ["Core Outputs", ["Unified fraud event graph", "Investigation narrative and linked evidence", "Analyst queue, escalation, SAR-ready draft"]],
          ["Why It Wins", ["Less manual graph chasing", "More explainable than a black-box score", "Works as a layer above existing alert systems"]],
        ].map(([title, items]) => (
          <Card key={title as string} className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">{title as string}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-300">
              {(items as string[]).map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CustomersTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {customers.map((customer, i) => {
        const Icon = customer.icon;
        return (
          <motion.div
            key={customer.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <Card className="h-full rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  {customer.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-zinc-400">{customer.text}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-cyan-200">
                  View ICP <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AiFraudInvestigatorDemo() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [selectedCase, setSelectedCase] = useState<AlertItem>(alerts[0]);

  const topReasons = useMemo(
    () => [
      "Refund occurred 2 days after bank account change",
      "Shared device seen in 2 prior suspicious cases",
      "IP routed via hosting or proxy network",
      "Approver appears in repeated exception flow",
      "Notes are generic and lack supporting evidence",
    ],
    []
  );

  const activeView = {
    Overview: <OverviewTab selectedCase={selectedCase} setSelectedCase={setSelectedCase} topReasons={topReasons} />,
    Investigation: <InvestigationTab />,
    "Pattern Ops": <PatternOpsTab />,
    Architecture: <ArchitectureTab />,
    Customers: <CustomersTab />,
  }[tab];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(168,85,247,0.08),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                <Sparkles className="h-4 w-4" />
                AI Fraud Investigator Demo
              </div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Autonomous Fraud Investigation for Audit, Risk, and Compliance
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-zinc-400 md:text-base">
                A product demo for an AI-native fraud investigation platform with semantic data intake, dynamic pattern extraction,
                autonomous graph-based investigation, and audit-ready evidence generation.
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-2xl bg-cyan-500 px-5 text-black hover:bg-cyan-400">Ask for a Demo</Button>
              <Button variant="outline" className="rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10">
                Export Brief
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={tab === item}
                onClick={() => setTab(item)}
                className={`rounded-2xl border px-4 py-2 text-sm transition ${
                  tab === item
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-100"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {activeView}

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          {metricCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Icon className="h-4 w-4 text-cyan-300" />
                  {item.label}
                </div>
                <div className="mt-2 text-lg font-medium">{item.value}</div>
              </div>
            );
          })}
        </div>

        <div className="sr-only" data-testid="component-self-check">
          tabs:{tabs.length}; alerts:{alerts.length}; steps:{investigationSteps.length}; layers:{layers.length}; customers:{customers.length}; patterns:{patternCandidates.length}; sources:{intelSources.length}; clampRisk(-5):{clampRisk(-5)}; clampRisk(150):{clampRisk(150)}; prodClass:{rolloutClass("Production")}
        </div>
      </div>
    </div>
  );
}
