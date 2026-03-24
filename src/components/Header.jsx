export default function Header() {
  return (
    <header className="max-w-3xl mx-auto text-center pt-20 pb-6 px-6">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
          Spinner
          <span className="text-[var(--color-accent)]">Verbs</span>
          <span className="text-[var(--color-accent)]">.</span>
        </h1>
      </div>

      {/* Hero copy — nostalgia first, then bridge, then CTA */}
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
        Remember Bacon Ipsum? Hipster Ipsum? Cupcake Ipsum?
        <br className="hidden md:block" />
        We brought that energy to your terminal.
      </p>

      <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 max-w-2xl mx-auto">
        Claude Code shows{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Flibbertigibbeting..."</span>
        {" "}while it thinks. But it could show{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Mo-money-mo-probleming..."</span>
        {" "}or{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"SYNTAX ERROR IN LINE 20"</span>
      </p>

      <p className="text-lg font-semibold text-black mb-2">
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
