export default function Header() {
  return (
    <header className="max-w-2xl mx-auto text-center pt-20 pb-10 px-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
        Spinner Verbs
      </h1>

      <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
        Themed verb packs for your Claude Code loading spinner.
        Pick a pack, copy one line, paste into{" "}
        <code className="text-sm font-[var(--font-mono)] text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">
          ~/.claude/settings.json
        </code>
      </p>
    </header>
  );
}
