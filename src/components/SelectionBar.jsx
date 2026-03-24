import { useState, useCallback } from "react";
import CopyButton from "./CopyButton";

/**
 * Sticky toolbar above the pack grid.
 * Combines mode toggle, select all/clear, and copy field into one unit.
 */
export default function SelectionBar({
  packs,
  selectedPacks,
  selectedIds,
  mode,
  onToggleMode,
  onSelectAll,
  onClear,
}) {
  const [copyType, setCopyType] = useState("prompt");
  const [copied, setCopied] = useState(false);

  const isReplace = mode === "replace";
  const allSelected = selectedIds.size === packs.length;
  const hasSelection = selectedIds.size > 0;
  const totalVerbs = selectedPacks.reduce((sum, p) => sum + p.verbs.length, 0);

  const allVerbs = selectedPacks.flatMap((p) => p.verbs);

  const scriptText = hasSelection
    ? JSON.stringify({ spinnerVerbs: { mode, verbs: allVerbs } }, null, 2)
    : "";

  const promptText = hasSelection
    ? `Add these spinner verbs to my ~/.claude/settings.json with mode "${mode}": ${allVerbs.join(", ")}`
    : "";

  const displayText = copyType === "script" ? scriptText : promptText;

  const previewText = hasSelection
    ? copyType === "script"
      ? `{ "spinnerVerbs": { "mode": "${mode}", "verbs": [${totalVerbs} verbs from ${selectedIds.size} packs] } }`
      : `Add ${totalVerbs} spinner verbs from ${selectedIds.size} packs to my settings...`
    : "Select packs below to combine verbs";

  const handleCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md border-b border-[var(--color-light-gray)] shadow-sm" style={{ backgroundColor: "rgba(250, 249, 245, 0.9)" }}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        {/* Controls row: mode toggle + select/clear */}
        <div className="flex items-center justify-between mb-3">
          {/* Mode toggle */}
          <div className="flex items-center gap-3">
            <span
              className={`text-sm cursor-pointer transition-colors ${
                isReplace ? "text-[var(--color-dark)] font-semibold" : "text-[var(--color-mid-gray)]"
              }`}
              onClick={() => !isReplace && onToggleMode()}
            >
              Replace
            </span>
            <button
              onClick={onToggleMode}
              className="relative w-10 h-5 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
              style={{
                backgroundColor: isReplace ? "var(--color-light-gray)" : "var(--color-accent)",
              }}
              role="switch"
              aria-checked={!isReplace}
              aria-label="Toggle between replace and append mode"
            >
              <span
                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-200"
                style={{ left: isReplace ? "2px" : "22px" }}
              />
            </button>
            <span
              className={`text-sm cursor-pointer transition-colors ${
                !isReplace ? "text-[var(--color-dark)] font-semibold" : "text-[var(--color-mid-gray)]"
              }`}
              onClick={() => isReplace && onToggleMode()}
            >
              Mix
            </span>
          </div>

          {/* Select all / clear / count */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSelectAll}
              className="text-sm font-medium text-[var(--color-accent)] hover:underline cursor-pointer"
            >
              {allSelected ? "Deselect all" : "Select all"}
            </button>

            {hasSelection && (
              <>
                <span className="text-[var(--color-light-gray)]">|</span>
                <button
                  onClick={onClear}
                  className="text-sm text-[var(--color-mid-gray)] hover:text-[var(--color-dark)] cursor-pointer"
                >
                  Clear
                </button>
                <span className="text-[var(--color-light-gray)]">|</span>
                <span className="text-sm text-[var(--color-mid-gray)]">
                  {selectedIds.size} {selectedIds.size === 1 ? "pack" : "packs"} · {totalVerbs} verbs
                </span>
              </>
            )}
          </div>
        </div>

        {/* Copy field */}
        <div className={`flex items-center border rounded-lg overflow-hidden transition-all duration-300 ${
          copied
            ? "border-[var(--color-green)] bg-[var(--color-green)]/5 shadow-sm"
            : "border-[var(--color-light-gray)] bg-white shadow-sm"
        }`}>
          <div className={`relative flex-shrink-0 border-r transition-colors duration-300 ${
            copied ? "border-[var(--color-green)]/30" : "border-[var(--color-light-gray)]"
          }`}>
            <select
              value={copyType}
              onChange={(e) => setCopyType(e.target.value)}
              className="appearance-none bg-transparent text-base font-medium text-[var(--color-dark)] pl-4 pr-9 py-4 cursor-pointer focus:outline-none"
            >
              <option value="prompt">prompt</option>
              <option value="script">script</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-mid-gray)]"
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <div className="flex-1 px-4 py-4 min-w-0">
            <p className={`text-base font-[var(--font-mono)] truncate transition-colors duration-300 ${
              copied ? "text-[var(--color-green)]" : hasSelection ? "text-[var(--color-dark)]/70" : "text-[var(--color-mid-gray)]"
            }`}>
              {copied ? "Copied!" : previewText}
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
