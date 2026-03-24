/**
 * Global toggle for replace vs append mode.
 * @param {{ mode: "replace"|"append", onToggle: () => void }} props
 */
export default function ModeToggle({ mode, onToggle }) {
  const isReplace = mode === "replace";

  return (
    <div className="max-w-2xl mx-auto text-center pb-8 px-6">
      <div className="inline-flex items-center gap-3 text-sm">
        <span className={isReplace ? "text-black font-medium" : "text-gray-400"}>
          Replace defaults
        </span>

        <button
          onClick={onToggle}
          className="relative w-10 h-5 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          style={{
            backgroundColor: isReplace ? "#d1d5db" : "#1a1a1a",
          }}
          role="switch"
          aria-checked={!isReplace}
          aria-label="Toggle between replace and append mode"
        >
          <span
            className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
            style={{
              transform: isReplace ? "translateX(2px)" : "translateX(22px)",
            }}
          />
        </button>

        <span className={!isReplace ? "text-black font-medium" : "text-gray-400"}>
          Mix with defaults
        </span>
      </div>
    </div>
  );
}
