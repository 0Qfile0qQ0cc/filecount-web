"use client";

import { Loader2 } from "lucide-react";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import { CTA_TOKENS } from "@/components/layout/header/constants";
import { cn } from "@/lib/utils";

import {
  CAREERS_CV_ACCEPT,
  EMPTY_CAREERS_FORM_VALUES,
  isCareersFormValid,
  validateCareersFormField,
  type CareersFormErrors,
  type CareersFormField,
  type CareersFormValues,
} from "./careers-form-validation";
import type { CareersApplicationContent } from "./constants";

type CareersApplicationFormProps = {
  content: CareersApplicationContent;
};

type TouchedState = Partial<Record<CareersFormField, boolean>>;

function toErrorMessages(content: CareersApplicationContent) {
  return content.errors;
}

export function CareersApplicationForm({ content }: CareersApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<CareersFormValues>(EMPTY_CAREERS_FORM_VALUES);
  const [touched, setTouched] = useState<TouchedState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cvFileName, setCvFileName] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const errorMessages = useMemo(() => toErrorMessages(content), [content]);

  const errors = useMemo(() => {
    const next: CareersFormErrors = {};
    (Object.keys(values) as CareersFormField[]).forEach((field) => {
      if (!touched[field]) return;
      const error = validateCareersFormField(field, values, errorMessages);
      if (error) next[field] = error;
    });
    return next;
  }, [values, touched, errorMessages]);

  const formIsValid = useMemo(
    () => isCareersFormValid(values, errorMessages),
    [values, errorMessages],
  );

  const markTouched = useCallback((field: CareersFormField) => {
    setTouched((current) => ({ ...current, [field]: true }));
  }, []);

  const markAllTouched = useCallback(() => {
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      linkedin: true,
      expertise: true,
      experience: true,
      message: true,
      cv: true,
    });
  }, []);

  const updateValue = useCallback(
    <K extends CareersFormField>(field: K, value: CareersFormValues[K]) => {
      setValues((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const assignCvFile = useCallback(
    (file: File | null) => {
      updateValue("cv", file);
      setCvFileName(file?.name ?? "");
      markTouched("cv");
    },
    [markTouched, updateValue],
  );

  const handleCvChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] ?? null;
      assignCvFile(file);
    },
    [assignCvFile],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragActive(false);
      if (isSubmitting) return;

      const file = event.dataTransfer.files?.[0] ?? null;
      assignCvFile(file);
    },
    [assignCvFile, isSubmitting],
  );

  const simulateSubmit = useCallback(async () => {
    setUploadProgress(0);

    await new Promise<void>((resolve) => {
      let progress = 0;
      const interval = window.setInterval(() => {
        progress += 12;
        setUploadProgress(Math.min(progress, 100));
        if (progress >= 100) {
          window.clearInterval(interval);
          resolve();
        }
      }, 120);
    });

    await new Promise((resolve) => window.setTimeout(resolve, 300));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honeypot.trim().length > 0) return;

    markAllTouched();

    if (!formIsValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await simulateSubmit();
      setSubmitted(true);
      setValues(EMPTY_CAREERS_FORM_VALUES);
      setTouched({});
      setCvFileName("");
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="careers-form__success mx-auto text-center" role="status" aria-live="polite">
        <p className="careers-form__success-title">{content.successTitle}</p>
        <p>{content.successMessage}</p>
        <p>{content.successFollowUp}</p>
      </div>
    );
  }

  const submitDisabled = !formIsValid || isSubmitting;

  return (
    <form className="careers-form mx-auto" onSubmit={handleSubmit} noValidate>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="careers-website">Website</label>
        <input
          id="careers-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div className="careers-form__grid">
        <Field
          id="careers-full-name"
          label={content.fields.fullName}
          error={errors.fullName}
        >
          <input
            id="careers-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "careers-full-name-error" : undefined}
            onBlur={() => markTouched("fullName")}
            onChange={(event) => updateValue("fullName", event.target.value)}
          />
        </Field>

        <Field
          id="careers-email"
          label={content.fields.email}
          error={errors.email}
        >
          <input
            id="careers-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "careers-email-error" : undefined}
            onBlur={() => markTouched("email")}
            onChange={(event) => updateValue("email", event.target.value)}
          />
        </Field>

        <Field
          id="careers-phone"
          label={content.fields.phone}
          error={errors.phone}
        >
          <input
            id="careers-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "careers-phone-error" : undefined}
            onBlur={() => markTouched("phone")}
            onChange={(event) => updateValue("phone", event.target.value)}
          />
        </Field>

        <Field
          id="careers-linkedin"
          label={content.fields.linkedin}
          error={errors.linkedin}
        >
          <input
            id="careers-linkedin"
            name="linkedin"
            type="url"
            autoComplete="url"
            placeholder="https://www.linkedin.com/in/"
            value={values.linkedin}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.linkedin)}
            aria-describedby={errors.linkedin ? "careers-linkedin-error" : undefined}
            onBlur={() => markTouched("linkedin")}
            onChange={(event) => updateValue("linkedin", event.target.value)}
          />
        </Field>

        <Field
          id="careers-expertise"
          label={content.fields.expertise}
          error={errors.expertise}
        >
          <select
            id="careers-expertise"
            name="expertise"
            value={values.expertise}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.expertise)}
            aria-describedby={errors.expertise ? "careers-expertise-error" : undefined}
            onBlur={() => markTouched("expertise")}
            onChange={(event) => updateValue("expertise", event.target.value)}
          >
            <option value="" disabled>
              {content.fields.expertisePlaceholder}
            </option>
            {content.expertiseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="careers-experience"
          label={content.fields.experience}
          error={errors.experience}
        >
          <select
            id="careers-experience"
            name="experience"
            value={values.experience}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.experience)}
            aria-describedby={errors.experience ? "careers-experience-error" : undefined}
            onBlur={() => markTouched("experience")}
            onChange={(event) => updateValue("experience", event.target.value)}
          >
            <option value="" disabled>
              {content.fields.experiencePlaceholder}
            </option>
            {content.experienceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="careers-message"
          label={content.fields.message}
          error={errors.message}
          fullWidth
        >
          <textarea
            id="careers-message"
            name="message"
            rows={4}
            maxLength={1000}
            value={values.message}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "careers-message-error" : undefined}
            onBlur={() => markTouched("message")}
            onChange={(event) => updateValue("message", event.target.value)}
          />
        </Field>

        <div className="careers-form__field careers-form__field--full">
          <label htmlFor="careers-cv">{content.fields.cv}</label>
          <div
            className={cn(
              "careers-form__dropzone",
              isDragActive && "careers-form__dropzone--active",
              errors.cv && "careers-form__dropzone--invalid",
            )}
            onDragEnter={(event) => {
              event.preventDefault();
              if (!isSubmitting) setIsDragActive(true);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              if (!isSubmitting) setIsDragActive(true);
            }}
            onDragLeave={(event) => {
              event.preventDefault();
              setIsDragActive(false);
            }}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              id="careers-cv"
              name="cv"
              type="file"
              accept={CAREERS_CV_ACCEPT}
              disabled={isSubmitting}
              className="careers-form__file-input"
              aria-invalid={Boolean(errors.cv)}
              aria-describedby={errors.cv ? "careers-cv-error" : "careers-cv-hint"}
              onChange={handleCvChange}
            />
            <p className="careers-form__dropzone-text">{content.fields.cvDropHint}</p>
            {cvFileName ? (
              <p className="careers-form__file-name">{cvFileName}</p>
            ) : null}
          </div>
          <span id="careers-cv-hint" className="careers-form__hint">
            {content.fields.cvHint}
          </span>
          {errors.cv ? (
            <p id="careers-cv-error" className="careers-form__error" role="alert">
              {errors.cv}
            </p>
          ) : null}
          {isSubmitting && uploadProgress > 0 ? (
            <div className="careers-form__progress" aria-live="polite">
              <div className="careers-form__progress-label">
                {content.uploadProgressLabel} ({uploadProgress}%)
              </div>
              <div className="careers-form__progress-track">
                <div
                  className="careers-form__progress-bar"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="careers-form__actions">
        <button
          type="submit"
          disabled={submitDisabled}
          aria-busy={isSubmitting}
          className={cn(
            "cta-shimmer-button group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap",
            "border bg-[var(--cta-background)] px-5 py-2.5",
            "text-[length:var(--nav-font-size)] font-medium text-[var(--nav-color)]",
            "transition-[border-color,box-shadow,opacity] duration-[var(--header-transition-duration)] ease-[var(--header-transition-easing)]",
            "hover:border-[var(--cta-hover-border)] hover:bg-[var(--cta-hover-background)] hover:shadow-[var(--cta-hover-shadow)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-color)] focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[var(--header-border)] disabled:hover:bg-[var(--cta-background)] disabled:hover:shadow-none",
          )}
          style={{
            borderColor: CTA_TOKENS.borderColor,
            borderRadius: CTA_TOKENS.borderRadius,
            fontWeight: 500,
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="careers-form__spinner" size={16} strokeWidth={2} aria-hidden="true" />
              <span className="relative z-10">{content.submittingLabel}</span>
            </>
          ) : (
            <>
              <span
                aria-hidden="true"
                className="cta-shimmer-overlay pointer-events-none absolute inset-y-0 start-0 w-2/5 bg-white"
              />
              <span className="relative z-10">{content.submitLabel}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  fullWidth?: boolean;
  children: ReactNode;
};

function Field({ id, label, error, fullWidth, children }: FieldProps) {
  return (
    <div
      className={cn(
        "careers-form__field",
        fullWidth && "careers-form__field--full",
        error && "careers-form__field--invalid",
      )}
    >
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="careers-form__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
