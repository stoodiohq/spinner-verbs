/**
 * Global toggle for replace vs append mode.
 * @param {{ mode: "replace"|"append", onToggle: () => void }} props
 */
export default function ModeToggle({ mode, onToggle }) {
  const isReplace = mode === "replace";

  return (
    <div className="max-w-xl mx-auto text-center py-6 px-6">
      <div className="inline-flex items-center gap-3 bg-[var(--color-dark-800)] rounded-full px-5 py-3 border border-[var(--color-dark-600)]">
        <span
          className={`text-sm font-mono transition-colors ${
            isReplace ? "text-white font-semibold" : "text-gray-500"
          }`}
        >
          Replace defaults
        </span>

        <button
          onClick={onToggle}
          className="relative w-12 h-6 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-glow-green)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark-900)]"
          style={{
            backgroundColor: isReplace
              ? "var(--color-dark-500)"
              : "var(--color-glow-green)",
          }}
          role="switch"
          aria-checked={!isReplace}
          aria-label="Toggle between replace and append mode"
        >
          <span
            className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200"
            style={{
              transform: isReplace ? "translateX(2px)" : "translateX(26px)",
            }}
          />
        </button>

        <span
          className={`text-sm font-mono transition-colors ${
            !isReplace ? "text-white font-semibold" : "text-gray-500"
          }`}
        >
          Mix with defaults
        </span>
      </div>

      <p className="text-xs text-gray-600 mt-2 font-mono">
        {isReplace
          ? "Replace = only your pack's verbs"
          : "Mix = your verbs + Claude's defaults"}
      </p>
    </div>
  );
}
