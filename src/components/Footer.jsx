/**
 * Footer with explainer, GitHub link, credits.
 */
export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 pt-8 pb-16">
      {/* What are spinner verbs? — SEO/LLM explainer */}
      <section className="text-center mb-12 pt-12 border-t border-[var(--color-light-gray)]">
        <h2 className="text-lg font-bold text-[var(--color-dark)] mb-3">
          What are spinner verbs?
        </h2>
        <p className="text-base text-[var(--color-body)] leading-relaxed max-w-3xl mx-auto">
          Spinner verbs are the loading messages Claude Code displays while it
          processes your requests &mdash; words like &ldquo;Flibbertigibbeting...&rdquo; and
          &ldquo;Hyperspacing...&rdquo; that cycle in your terminal. You can customize these by adding a{" "}
          <code className="text-sm font-[var(--font-mono)] text-[var(--color-dark)] bg-[var(--color-light-gray)] px-1.5 py-0.5 rounded">
            spinnerVerbs
          </code>{" "}
          config to your{" "}
          <code className="text-sm font-[var(--font-mono)] text-[var(--color-dark)] bg-[var(--color-light-gray)] px-1.5 py-0.5 rounded">
            ~/.claude/settings.json
          </code>{" "}
          file. Spinner Verbs gives you themed packs you can install with one click.
        </p>
      </section>

      {/* Links + credits */}
      <div className="text-center space-y-2 text-sm text-[var(--color-body)]">
        <p>
          <a
            href="https://github.com/stoodiohq/spinner-verbs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline font-medium"
          >
            Open source on GitHub
          </a>
          {" "}&mdash;{" "}
          <a
            href="https://github.com/stoodiohq/spinner-verbs/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline font-medium"
          >
            Submit a pack
          </a>
        </p>

        <p className="pt-4">
          Built with <span className="text-[var(--color-accent)]">&hearts;</span> by{" "}
          <a href="https://www.stoodio.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors">Stoodio</a>
        </p>
      </div>
    </footer>
  );
}
