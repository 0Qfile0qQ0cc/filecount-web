"use client";

import { useState } from "react";

import { HeroSecondaryButton } from "@/components/sections/hero/HeroSecondaryButton";
import { Link } from "@/lib/i18n/navigation";
import { evaluateDecision } from "@/lib/knowledge/decision-assistant/engine";
import { knowledgeEntryPath } from "@/lib/knowledge/paths";
import { getKnowledgeUiContent } from "@/lib/knowledge/ui-content";
import type { DecisionAssistantInput, DecisionAssistantResult } from "@/lib/knowledge/types";
import type { Locale } from "@/types/locale";

type DecisionAssistantFormProps = {
  locale: Locale;
};

const NEED_KEYS = ["erp", "crm", "dms", "workflow", "cybersecurity"] as const;

const CLOUD_OPTIONS = ["cloud", "hybrid", "on-premises", "undecided"] as const;

function getEntryHrefForSlug(slug: string): string {
  const technologySlugs = ["erp", "crm", "dms", "ecm", "hrms", "workflow"];
  if (technologySlugs.includes(slug)) {
    return knowledgeEntryPath("technology", slug);
  }
  if (slug === "cloud-computing") {
    return knowledgeEntryPath("glossary", slug);
  }
  if (slug === "cybersecurity") {
    return knowledgeEntryPath("guide", slug);
  }
  return knowledgeEntryPath("technology", slug);
}

export function DecisionAssistantForm({ locale }: DecisionAssistantFormProps) {
  const ui = getKnowledgeUiContent(locale).decisionAssistant;
  const [result, setResult] = useState<DecisionAssistantResult | null>(null);
  const [form, setForm] = useState<DecisionAssistantInput>({
    industry: "",
    employees: "",
    branches: "",
    currentSystems: [],
    currentChallenges: [],
    growthPlans: "",
    cloudPreference: "undecided",
    needs: {
      erp: false,
      crm: false,
      dms: false,
      workflow: false,
      cybersecurity: false,
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(evaluateDecision(form, locale));
  };

  const handleReset = () => {
    setResult(null);
    setForm({
      industry: "",
      employees: "",
      branches: "",
      currentSystems: [],
      currentChallenges: [],
      growthPlans: "",
      cloudPreference: "undecided",
      needs: {
        erp: false,
        crm: false,
        dms: false,
        workflow: false,
        cybersecurity: false,
      },
    });
  };

  return (
    <div className="knowledge-content-width">
      <p className="text-[var(--nav-color)] opacity-85">{ui.description}</p>
      <p className="mt-2 text-sm text-[var(--nav-color)] opacity-70">{ui.disclaimer}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="knowledge-form-field">
            <span>{ui.industry}</span>
            <input
              type="text"
              required
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
            />
          </label>
          <label className="knowledge-form-field">
            <span>{ui.employees}</span>
            <input
              type="text"
              required
              value={form.employees}
              onChange={(e) => setForm({ ...form, employees: e.target.value })}
            />
          </label>
          <label className="knowledge-form-field">
            <span>{ui.branches}</span>
            <input
              type="text"
              value={form.branches}
              onChange={(e) => setForm({ ...form, branches: e.target.value })}
            />
          </label>
          <label className="knowledge-form-field">
            <span>{ui.cloudPreference}</span>
            <select
              value={form.cloudPreference}
              onChange={(e) =>
                setForm({
                  ...form,
                  cloudPreference: e.target.value as DecisionAssistantInput["cloudPreference"],
                })
              }
            >
              {CLOUD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option === "on-premises"
                    ? ui.cloudOptions.onPremises
                    : ui.cloudOptions[option as keyof typeof ui.cloudOptions]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="knowledge-form-field">
          <span>{ui.growthPlans}</span>
          <textarea
            rows={3}
            value={form.growthPlans}
            onChange={(e) => setForm({ ...form, growthPlans: e.target.value })}
          />
        </label>

        <fieldset className="knowledge-form-fieldset">
          <legend>{ui.needsTitle}</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {NEED_KEYS.map((key) => (
              <label key={key} className="knowledge-checkbox-label">
                <input
                  type="checkbox"
                  checked={form.needs[key]}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      needs: { ...form.needs, [key]: e.target.checked },
                    })
                  }
                />
                <span>{ui.needs[key]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className="knowledge-primary-button">
            {ui.submit}
          </button>
          {result && (
            <button type="button" onClick={handleReset} className="knowledge-secondary-button">
              {ui.reset}
            </button>
          )}
        </div>
      </form>

      {result && (
        <div className="mt-10 rounded-xl border border-[var(--header-border)] bg-[var(--header-background)] p-6 lg:p-8">
          <h2 className="text-xl font-bold text-[var(--nav-color)]">{ui.resultsTitle}</h2>
          <p className="mt-3 text-[var(--nav-color)] opacity-85">{result.summary}</p>

          {result.recommendations.length > 0 && (
            <ul className="mt-6 space-y-4">
              {result.recommendations.map((rec) => (
                <li
                  key={rec.technologySlug}
                  className="rounded-lg border border-[var(--header-border)] bg-[var(--site-background)] p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={getEntryHrefForSlug(rec.technologySlug)}
                      className="font-semibold text-[var(--nav-hover-color)] hover:underline"
                    >
                      {rec.technologyLabel}
                    </Link>
                    <span className="knowledge-priority-badge">{rec.priority}</span>
                  </div>
                  <p className="mt-2 text-sm opacity-85">{rec.reason}</p>
                </li>
              ))}
            </ul>
          )}

          <h3 className="mt-8 font-semibold text-[var(--nav-color)]">{ui.nextSteps}</h3>
          <ul className="mt-3 list-disc space-y-1 ps-5 text-sm opacity-85">
            {result.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <div className="mt-8">
            <HeroSecondaryButton
              label={getKnowledgeUiContent(locale).templates.talkToConsultant}
              href="/contact"
            />
          </div>
        </div>
      )}
    </div>
  );
}
