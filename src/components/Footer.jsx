/**
 * Footer with explainer, GitHub link, credits, and ipsum site shoutout.
 */
export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <hr className="border-gray-200 mb-16" />

      {/* What are spinner verbs? — SEO/LLM explainer */}
      <section className="text-center mb-12">
        <h2 className="text-lg font-bold text-black mb-3">
          What are spinner verbs?
        </h2>
        <p className="text-base text-gray-500 leading-relaxed">
          Spinner verbs are the loading messages Claude Code displays while it
          processes your requests &mdash; words like &ldquo;Flibbertigibbeting...&rdquo; and
          &ldquo;Hyperspacing...&rdquo; that cycle in your terminal. Since Claude Code
          v2.1.23 (January 2026), you can customize these by adding a{" "}
          <code className="text-sm font-[var(--font-mono)] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
            spinnerVerbs
          </code>{" "}
          config to your{" "}
          <code className="text-sm font-[var(--font-mono)] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
            ~/.claude/settings.json
          </code>{" "}
          file. Spinner Verbs gives you themed packs you can install with one click.
        </p>
      </section>

      <hr className="border-gray-200 max-w-xs mx-auto mb-12" />

      {/* GitHub + contribute */}
      <div className="text-center space-y-3 mb-12">
        <p className="text-base text-gray-500">
          <a
            href="https://github.com/stoodiohq/spinner-verbs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline font-medium"
          >
            Open source on GitHub
          </a>
          {" "}&mdash; PRs for new packs are welcome and encouraged.
        </p>

        <p className="text-base text-gray-500">
          Got a theme we missed?{" "}
          <a
            href="https://github.com/stoodiohq/spinner-verbs/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline font-medium"
          >
            Build a pack and PR it.
          </a>
        </p>
      </div>

      <hr className="border-gray-200 max-w-xs mx-auto mb-12" />

      {/* Credits */}
      <div className="text-center space-y-4">
        <p className="text-sm text-gray-400">
          Standing on the shoulders of Bacon Ipsum, Hipster Ipsum, Cupcake Ipsum,
          and every ridiculous ipsum site that made the 2000s internet beautiful.
        </p>

        <p className="text-sm text-gray-400">
          Built with <span className="text-[var(--color-accent)]">&hearts;</span> by{" "}
          <a href="https://www.stoodio.com" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 hover:text-[var(--color-accent)] transition-colors">Stoodio</a>
        </p>
      </div>
    </footer>
  );
}
