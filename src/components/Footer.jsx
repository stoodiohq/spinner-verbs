/**
 * Footer with GitHub link and credits.
 */
export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto text-center px-6 pb-16">
      {/* What are spinner verbs? — SEO/LLM explainer */}
      <section className="mb-10 text-left">
        <h2 className="text-sm font-semibold text-black mb-2">
          What are spinner verbs?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Spinner verbs are the loading messages Claude Code displays while it
          processes your requests — words like "Flibbertigibbeting..." and
          "Hyperspacing..." that cycle in your terminal. Since Claude Code
          v2.1.23 (January 2026), you can customize these by adding a{" "}
          <code className="text-xs font-[var(--font-mono)] text-gray-600 bg-gray-100 px-1 py-0.5 rounded">
            spinnerVerbs
          </code>{" "}
          config to your{" "}
          <code className="text-xs font-[var(--font-mono)] text-gray-600 bg-gray-100 px-1 py-0.5 rounded">
            ~/.claude/settings.json
          </code>{" "}
          file.
        </p>
      </section>

      {/* Links */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
        <a
          href="https://github.com/stoodiohq/spinner-verbs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          GitHub
        </a>
        <span>·</span>
        <a
          href="https://github.com/stoodiohq/spinner-verbs/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Submit a pack
        </a>
        <span>·</span>
        <span>Open source · MIT licensed</span>
      </div>
    </footer>
  );
}
