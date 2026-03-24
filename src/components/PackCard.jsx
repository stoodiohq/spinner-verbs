import CopyButton from "./CopyButton";

/**
 * Generates a unique CSS pattern for each pack's placeholder graphic.
 * Each card should feel like a mini ipsum site with its own visual identity.
 */
function getCardGraphicStyle(pack) {
  const color = pack.accentColor;
  const id = pack.id;

  const patterns = {
    bacon: {
      background: `
        linear-gradient(135deg, #8B2500 0%, #E25822 40%, #FF6B35 70%, #FFB347 100%)
      `,
      extra: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.04) 16px)`,
    },
    hipster: {
      background: `
        radial-gradient(ellipse at 20% 80%, #6B4226 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, #A0826D 0%, transparent 50%),
        linear-gradient(180deg, #3E2723 0%, #5D4037 50%, #8B7355 100%)
      `,
      extra: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)`,
    },
    cupcake: {
      background: `
        radial-gradient(circle at 30% 70%, #FF1493 0%, transparent 40%),
        radial-gradient(circle at 70% 30%, #FFB6C1 0%, transparent 40%),
        linear-gradient(160deg, #FF69B4 0%, #FF1493 50%, #C71585 100%)
      `,
      extra: `radial-gradient(circle 3px, rgba(255,255,255,0.15) 100%, transparent 100%) 0 0 / 24px 24px`,
    },
    pirate: {
      background: `
        linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)
      `,
      extra: `
        repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(218,165,32,0.06) 6px, rgba(218,165,32,0.06) 7px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(218,165,32,0.03) 30px, rgba(218,165,32,0.03) 31px)
      `,
    },
    gangsta: {
      background: `
        linear-gradient(150deg, #1a1a1a 0%, #2d2d2d 30%, #404040 60%, #1a1a1a 100%)
      `,
      extra: `repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(192,192,192,0.03) 4px, rgba(192,192,192,0.03) 8px)`,
    },
    "samuel-l": {
      background: `
        linear-gradient(180deg, #1a0000 0%, #8B0000 50%, #B22222 80%, #DC143C 100%)
      `,
      extra: `repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(0,0,0,0.15) 12px, rgba(0,0,0,0.15) 24px)`,
    },
    "90s-hip-hop": {
      background: `
        radial-gradient(ellipse at 0% 100%, #B8860B 0%, transparent 60%),
        radial-gradient(ellipse at 100% 0%, #8B6914 0%, transparent 60%),
        linear-gradient(225deg, #1a1200 0%, #3d2e00 30%, #5a4500 60%, #2e2200 100%)
      `,
      extra: `repeating-conic-gradient(rgba(255,215,0,0.03) 0% 25%, transparent 25% 50%) 0 0 / 40px 40px`,
    },
    "star-wars": {
      background: `
        radial-gradient(circle at 80% 20%, rgba(79,195,247,0.3) 0%, transparent 30%),
        radial-gradient(circle at 20% 80%, rgba(79,195,247,0.15) 0%, transparent 40%),
        linear-gradient(180deg, #000005 0%, #0a0a1a 50%, #0d1117 100%)
      `,
      extra: `radial-gradient(circle 1px, rgba(255,255,255,0.3) 100%, transparent 100%) 0 0 / 50px 50px`,
    },
    "star-trek": {
      background: `
        linear-gradient(135deg, #1a1a2e 0%, #2d1b69 40%, #11082d 100%)
      `,
      extra: `radial-gradient(ellipse 200px 100px at 50% 50%, rgba(255,179,71,0.1) 0%, transparent 100%)`,
    },
    "self-aware-ai": {
      background: `
        linear-gradient(180deg, #001a1a 0%, #002626 50%, #001a1a 100%)
      `,
      extra: `
        repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.03) 3px, rgba(0,229,255,0.03) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,229,255,0.02) 40px, rgba(0,229,255,0.02) 41px)
      `,
    },
    "corporate-bs": {
      background: `
        linear-gradient(135deg, #1a1a2e 0%, #283593 50%, #1565C0 100%)
      `,
      extra: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)`,
    },
    "bob-ross": {
      background: `
        radial-gradient(ellipse at 50% 100%, #1B5E20 0%, transparent 60%),
        radial-gradient(ellipse at 30% 40%, #2E7D32 0%, transparent 40%),
        radial-gradient(ellipse at 70% 30%, #388E3C 0%, transparent 40%),
        linear-gradient(180deg, #87CEEB 0%, #B0E0E6 30%, #90EE90 60%, #228B22 100%)
      `,
      extra: "none",
    },
    "retro-terminal": {
      background: `
        linear-gradient(180deg, #000800 0%, #001200 50%, #000800 100%)
      `,
      extra: `
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.03) 2px, rgba(57,255,20,0.03) 4px)
      `,
    },
  };

  const pattern = patterns[id] || {
    background: `linear-gradient(135deg, ${color}, #1a1a26)`,
    extra: "none",
  };

  return pattern;
}

/**
 * Individual pack card — the main visual unit.
 * Shows themed graphic, name, description, preview verbs, verb count, and copy button.
 */
export default function PackCard({ pack, mode }) {
  const pattern = getCardGraphicStyle(pack);
  const previewVerbs = pack.verbs.slice(0, 4);

  return (
    <div className="pack-card rounded-xl overflow-hidden bg-[var(--color-dark-800)] border border-[var(--color-dark-600)]">
      {/* Themed placeholder graphic */}
      <div
        className="relative h-44 overflow-hidden flex items-center justify-center"
        style={{ background: pattern.background }}
      >
        {/* Pattern overlay */}
        {pattern.extra !== "none" && (
          <div
            className="absolute inset-0"
            style={{ background: pattern.extra }}
          />
        )}

        {/* Large emoji */}
        <span
          className="text-7xl select-none relative z-10 opacity-80"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
        >
          {pack.emoji}
        </span>

        {/* Scattered smaller emojis for texture */}
        <span className="absolute top-3 left-4 text-2xl opacity-20 rotate-[-15deg]">
          {pack.emoji}
        </span>
        <span className="absolute bottom-4 right-5 text-3xl opacity-15 rotate-[20deg]">
          {pack.emoji}
        </span>
        <span className="absolute top-8 right-8 text-xl opacity-10 rotate-[45deg]">
          {pack.emoji}
        </span>
        <span className="absolute bottom-6 left-8 text-xl opacity-10 rotate-[-30deg]">
          {pack.emoji}
        </span>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h2
          className="font-[var(--font-display)] text-xl font-bold mb-1"
          style={{ color: pack.accentColor }}
        >
          {pack.name}
        </h2>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {pack.description}
        </p>

        {/* Preview verbs */}
        <div className="mb-4 space-y-1">
          {previewVerbs.map((verb, i) => (
            <div
              key={i}
              className="text-xs font-mono text-gray-500 truncate"
            >
              <span className="text-gray-600 mr-1">+</span>
              {verb}...
            </div>
          ))}
        </div>

        {/* Verb count */}
        <p className="text-xs text-gray-600 font-mono mb-3">
          {pack.verbs.length} verbs
        </p>

        <CopyButton pack={pack} mode={mode} />
      </div>
    </div>
  );
}
