export default function Header() {
  return (
    <header className="max-w-3xl mx-auto text-center pt-16 pb-8 px-6">
      <h1 className="font-[var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight text-white crt-glow mb-6">
        Spinner Verbs
      </h1>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
        Remember{" "}
        <span className="text-pink-400">Bacon Ipsum</span>?{" "}
        <span className="text-amber-400">Hipster Ipsum</span>?{" "}
        <span className="text-rose-300">Cupcake Ipsum</span>?
        {" "}Those beautiful, ridiculous sites that made placeholder text actually fun?
      </p>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
        <span className="text-white font-semibold">We brought that energy to your terminal.</span>
      </p>

      <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
        Claude Code shows you{" "}
        <span className="font-mono text-[var(--color-glow-green)]">"Flibbertigibbeting..."</span>
        {" "}while it thinks. Fine. But it could show you{" "}
        <span className="font-mono text-yellow-300">"Mo-money-mo-probleming..."</span>
        {" "}or{" "}
        <span className="font-mono text-cyan-300">"Kessel-running in 12 parsecs..."</span>
        {" "}or{" "}
        <span className="font-mono text-green-400">"SYNTAX ERROR IN LINE 20..."</span>
      </p>

      <p className="text-base text-white font-semibold mb-3">
        Pick a pack. Copy one line. Make your AI think in your language.
      </p>

      <p className="text-sm text-gray-500 font-mono">
        Paste into <code className="text-gray-400 bg-[var(--color-dark-700)] px-2 py-0.5 rounded">~/.claude/settings.json</code> — that's it.
      </p>
    </header>
  );
}
