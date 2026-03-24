export default function Header() {
  return (
    <header className="max-w-5xl mx-auto text-center pt-24 px-6">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl tracking-tight text-[var(--color-dark)]" style={{ fontFamily: "'Instrument Serif', serif" }}>
          spinner<span className="text-[var(--color-accent)]">Verbs</span><span className="text-[var(--color-accent)]">.</span>
        </h1>
      </div>

      {/* Nostalgia hook */}
      <p className="text-xl md:text-2xl text-[var(--color-body)] leading-relaxed mb-6">
        Remember Bacon Ipsum? Hipster Ipsum? Cupcake Ipsum?
        <br className="hidden md:block" />
        We brought that energy to Claude Code.
      </p>

      {/* Example image */}
      <div className="mb-12 max-w-lg mx-auto">
        <img
          src="/spinner-example.jpg"
          alt="Claude Code terminal showing a custom spinner verb 'Beaming up...' after a user asks to make their spinner verbs Star Trek themed"
          className="rounded-xl shadow-md border border-[var(--color-light-gray)] w-full"
        />
      </div>

      {/* The problem / bridge */}
      <p className="text-base md:text-lg text-[var(--color-body)] leading-relaxed mb-12">
        Claude Code shows{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Flibbertigibbeting..."</span>
        {" "}while it thinks. But it could show{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Mo-money-mo-probleming..."</span>
        {" "}or{" "}
        <span className="font-[var(--font-mono)] text-sm text-[var(--color-accent)]">"Kessel-running in 12 parsecs..."</span>
      </p>

      {/* Divider — separates hero from the tool section */}
      <div className="border-t border-[var(--color-light-gray)] mt-4 -mx-6" style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }} />

      {/* CTA */}
      <p className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mt-12 mb-3">
        Pick your packs. Copy the prompt.<br className="hidden md:block" /> Paste it into Claude Code.
      </p>

      <p className="text-base text-[var(--color-body)] pb-4">
        Select one pack or mix several together &mdash; then copy the prompt and let Claude install them for you.
      </p>
    </header>
  );
}
