/**
 * Global not-found page for routes outside `[locale]`.
 * Must not call notFound() — that triggers a root layout error in Next.js 15.
 */
export default function NotFound() {
  return (
    <html lang="ar">
      <body>
        <main
          id="main-content"
          className="flex min-h-dvh items-center justify-center"
        >
          <p>404 — Page not found</p>
        </main>
      </body>
    </html>
  );
}
