export default function Header() {
  return (
    <header className="max-w-5xl mx-auto text-center pt-20 pb-6 px-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-7xl tracking-tight text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
          spinner<span className="text-[var(--color-accent)]">Verbs</span><span className="text-[var(--color-accent)]">.</span>
        </h1>
      </div>

      {/* Nostalgia hook */}
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
        Remember Bacon Ipsum? Hipster Ipsum? Cupcake Ipsum?
        <br className="hidden md:block" />
        We brought that energy to Claude Code.
      </p>

      <hr className="my-8 border-gray-200 max-w-xs mx-auto" />

      {/* The problem / bridge */}
      <p className="text-base md:text-lg text-gray-500 leading-relaxed">
        Claude Code shows{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Flibbertigibbeting..."</span>
        {" "}while it thinks. But it could show{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Mo-money-mo-probleming..."</span>
        {" "}or{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Kessel-running in 12 parsecs..."</span>
      </p>

      <hr className="my-8 border-gray-200 max-w-xs mx-auto" />

      {/* CTA */}
      <p className="text-lg font-semibold text-black mb-3">
        Pick a pack. Copy one line. Make your AI think in your language.
      </p>

      <p className="text-sm text-gray-400">
        Paste into{" "}
        <code className="font-[var(--font-mono)] text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
          ~/.claude/settings.json
        </code>
        {" "}&mdash; that's it.
      </p>
    </header>
  );
}
