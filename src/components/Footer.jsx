/**
 * Footer with GitHub link, credits, and ipsum site shoutout.
 */
export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto text-center px-6 pt-12 pb-6">
      {/* What are spinner verbs? — SEO/LLM explainer */}
      <section className="mb-12 text-left bg-[var(--color-dark-800)] rounded-xl p-6 border border-[var(--color-dark-600)]">
        <h2 className="font-[var(--font-display)] text-lg font-bold text-white mb-3">
          What are spinner verbs?
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Spinner verbs are the loading messages Claude Code displays while it
          processes your requests — words like "Flibbertigibbeting..." and
          "Hyperspacing..." that cycle in your terminal. Since Claude Code
          v2.1.23 (January 2026), you can customize these by adding a{" "}
          <code className="text-gray-300 bg-[var(--color-dark-700)] px-1.5 py-0.5 rounded text-xs">
            spinnerVerbs
          </code>{" "}
          config to your{" "}
          <code className="text-gray-300 bg-[var(--color-dark-700)] px-1.5 py-0.5 rounded text-xs">
            ~/.claude/settings.json
          </code>{" "}
          file. Spinner Verbs gives you themed packs you can install with one
          click.
        </p>
      </section>

      {/* Links */}
      <div className="space-y-3 text-sm text-gray-500">
        <p>
          <a
            href="https://github.com/stoodio/spinner-verbs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
          >
            Open source on GitHub
          </a>
          {" — "}PRs for new packs are welcome (and encouraged).
        </p>

        <p>
          <a
            href="https://github.com/stoodio/spinner-verbs/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors underline underline-offset-4"
          >
            Got a theme we missed? Build a pack and PR it.
          </a>
        </p>

        <p className="text-gray-600 text-xs pt-4">
          Standing on the shoulders of{" "}
          <span className="text-gray-500">Bacon Ipsum</span>,{" "}
          <span className="text-gray-500">Hipster Ipsum</span>,{" "}
          <span className="text-gray-500">Cupcake Ipsum</span>, and every
          ridiculous ipsum site that made the 2000s internet beautiful.
        </p>

        <p className="text-gray-600 text-xs pt-2 pb-8">
          Built by{" "}
          <span className="text-gray-400">Stoodio</span>
        </p>
      </div>
    </footer>
  );
}
