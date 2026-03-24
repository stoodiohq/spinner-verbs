import { useState, useCallback, useEffect, useRef } from "react";
import CopyButton from "./CopyButton";

/**
 * Individual pack card with accent color, spinning verb preview,
 * hover lift, and copy field.
 */
export default function PackCard({ pack, mode, isSelected, onToggleSelect }) {
  const [copyType, setCopyType] = useState("prompt");
  const [copied, setCopied] = useState(false);
  const [spinIndex, setSpinIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSpinIndex((prev) => (prev + 1) % pack.verbs.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [pack.verbs.length]);

  const scriptText = JSON.stringify(
    { spinnerVerbs: { mode, verbs: pack.verbs } },
    null,
    2
  );

  const promptText = `Add these spinner verbs to my ~/.claude/settings.json with mode "${mode}": ${pack.verbs.join(", ")}`;

  const displayText = copyType === "script" ? scriptText : promptText;

  const handleCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-0.5 ${
        isSelected
          ? "ring-2 ring-[var(--color-accent)] shadow-md"
          : "border border-[var(--color-light-gray)] hover:border-[var(--color-mid-gray)]"
      }`}
      style={isSelected ? { backgroundColor: "rgba(217, 119, 87, 0.03)" } : {}}
      onClick={onToggleSelect}
    >
      {/* Accent color top bar */}
      <div className="h-1" style={{ backgroundColor: "var(--color-accent)" }} />

      <div className="p-6">
        {/* Pack header with checkbox */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[var(--color-dark)] mb-1.5" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <span className="mr-2">{pack.emoji}</span>
              {pack.name}
            </h2>
            <p className="text-sm text-[var(--color-mid-gray)] leading-relaxed">
              {pack.description}
            </p>
          </div>

          {/* Checkbox */}
          <div
            className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ml-4 mt-1 transition-all ${
              isSelected
                ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                : "border-[var(--color-mid-gray)]"
            }`}
          >
            {isSelected && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </div>

        {/* Spinning verb preview */}
        <div className="mb-4 rounded-lg px-4 py-3 border border-[var(--color-light-gray)]" style={{ backgroundColor: "var(--color-light)" }}>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-accent)] text-base font-bold">✳</span>
            <p
              className="text-sm font-[var(--font-mono)] text-[var(--color-dark)]/70 truncate transition-opacity duration-500"
              key={spinIndex}
            >
              {pack.verbs[spinIndex]}...
            </p>
          </div>
        </div>

        {/* Verb count */}
        <p className="text-xs text-[var(--color-mid-gray)] mb-4 font-medium">
          {pack.verbs.length} verbs
        </p>

        {/* Copy field */}
        <div
          className={`flex items-center border rounded-lg overflow-hidden transition-all duration-300 ${
            copied
              ? "border-[var(--color-green)] bg-[var(--color-green)]/5"
              : "border-[var(--color-light-gray)]"
          }`}
          style={!copied ? { backgroundColor: "var(--color-light)" } : {}}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`relative flex-shrink-0 border-r transition-colors duration-300 ${
            copied ? "border-[var(--color-green)]/30" : "border-[var(--color-light-gray)]"
          }`} style={!copied ? { backgroundColor: "white" } : {}}>
            <select
              value={copyType}
              onChange={(e) => setCopyType(e.target.value)}
              className="appearance-none bg-transparent text-sm font-medium text-[var(--color-dark)] pl-3 pr-8 py-3 cursor-pointer focus:outline-none"
            >
              <option value="prompt">prompt</option>
              <option value="script">script</option>
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-mid-gray)]"
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <div className="flex-1 px-3 py-3 min-w-0">
            <p className={`text-sm font-[var(--font-mono)] truncate transition-colors duration-300 ${
              copied ? "text-[var(--color-green)]" : "text-[var(--color-mid-gray)]"
            }`}>
              {copied
                ? "Copied!"
                : copyType === "script"
                  ? `{ "spinnerVerbs": { "mode": "${mode}", "verbs": [${pack.verbs.length}] } }`
                  : `Add these ${pack.name} spinner verbs to my settings...`}
            </p>
          </div>

          <div className={`flex-shrink-0 border-l transition-colors duration-300 ${
            copied ? "border-[var(--color-green)]/30" : "border-[var(--color-light-gray)]"
          }`}>
            <CopyButton text={displayText} copied={copied} onCopy={handleCopy} />
          </div>
        </div>
      </div>
    </div>
  );
}
