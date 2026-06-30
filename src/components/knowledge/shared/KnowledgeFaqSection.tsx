import type { KnowledgeFaqItem } from "@/lib/knowledge/types";

type KnowledgeFaqSectionProps = {
  title: string;
  items: KnowledgeFaqItem[];
};

export function KnowledgeFaqSection({ title, items }: KnowledgeFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="knowledge-faq-heading" className="py-10 lg:py-14">
      <div className="knowledge-content-width">
        <h2 id="knowledge-faq-heading" className="knowledge-section-title">
          {title}
        </h2>
        <div className="faq-accordion mt-8">
          {items.map((item) => (
            <details key={item.question} className="faq-accordion__item">
              <summary className="faq-accordion__summary">{item.question}</summary>
              <p className="faq-accordion__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
