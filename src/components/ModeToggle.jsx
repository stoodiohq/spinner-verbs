/**
 * Global toggle for replace vs append mode.
 * @param {{ mode: "replace"|"append", onToggle: () => void }} props
 */
export default function ModeToggle({ mode, onToggle }) {
  const isReplace = mode === "replace";

  return (
    <div className="max-w-3xl mx-auto text-center py-6 px-6">
      <div className="inline-flex items-center gap-4 text-base">
        <span
          className={`transition-colors cursor-pointer ${
            isReplace ? "text-black font-semibold" : "text-gray-400"
          }`}
          onClick={() => !isReplace && onToggle()}
        >
          Replace defaults
        </span>

        <button
          onClick={onToggle}
          className="relative w-12 h-6 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
          style={{
            backgroundColor: isReplace ? "#d1d5db" : "var(--color-accent)",
          }}
          role="switch"
          aria-checked={!isReplace}
          aria-label="Toggle between replace and append mode"
        >
          <span
            className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-200"
            style={{
              left: isReplace ? "4px" : "28px",
            }}
          />
        </button>

        <span
          className={`transition-colors cursor-pointer ${
            !isReplace ? "text-black font-semibold" : "text-gray-400"
          }`}
          onClick={() => isReplace && onToggle()}
        >
          Mix with defaults
        </span>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {isReplace
          ? "Only your pack's verbs, no defaults"
          : "Your verbs mixed with Claude's defaults"}
      </p>
    </div>
  );
}
