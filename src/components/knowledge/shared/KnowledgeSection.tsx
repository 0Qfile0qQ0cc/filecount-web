import type { ReactNode } from "react";

type KnowledgeSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
};

export function KnowledgeSection({
  id,
  title,
  children,
  muted = false,
}: KnowledgeSectionProps) {
  const headingId = id ?? `section-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={muted ? "knowledge-section--muted py-10 lg:py-14" : "py-10 lg:py-14"}
    >
      <div className="knowledge-content-width">
        <h2 id={headingId} className="knowledge-section-title">
          {title}
        </h2>
        <div className="mt-6 knowledge-prose">{children}</div>
      </div>
    </section>
  );
}
