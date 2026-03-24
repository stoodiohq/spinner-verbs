import { useState, useCallback } from "react";
import CopyButton from "./CopyButton";

/**
 * Sticky copy field above the pack grid — ref.tools style.
 * Shows select all/clear on left, copy field on right with script/prompt dropdown.
 */
export default function SelectionBar({
  packs,
  selectedPacks,
  selectedIds,
  mode,
  onSelectAll,
  onClear,
}) {
  const [copyType, setCopyType] = useState("prompt");
  const [copied, setCopied] = useState(false);

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
    <div className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        {/* Select all / clear */}
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onSelectAll}
            className="text-sm font-medium text-[var(--color-accent)] hover:underline cursor-pointer"
          >
            {allSelected ? "Deselect all" : "Select all"}
          </button>

          {hasSelection && (
            <>
              <span className="text-gray-300">|</span>
              <button
                onClick={onClear}
                className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Clear
              </button>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                {selectedIds.size} {selectedIds.size === 1 ? "pack" : "packs"} · {totalVerbs} verbs
              </span>
            </>
          )}
        </div>

        {/* Copy field — flashes green on copy */}
        <div className={`flex items-center border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
          copied
            ? "border-green-400 bg-green-50"
            : "border-gray-200 bg-white"
        }`}>
          {/* Type selector */}
          <div className={`relative flex-shrink-0 border-r transition-colors duration-300 ${
            copied ? "border-green-300" : "border-gray-200"
          }`}>
            <select
              value={copyType}
              onChange={(e) => setCopyType(e.target.value)}
              className="appearance-none bg-transparent text-base font-medium text-gray-700 pl-4 pr-9 py-4 cursor-pointer focus:outline-none"
            >
              <option value="script">script</option>
              <option value="prompt">prompt</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Visible preview text */}
          <div className="flex-1 px-4 py-4 min-w-0">
            <p className={`text-base font-[var(--font-mono)] truncate transition-colors duration-300 ${
              copied ? "text-green-600" : hasSelection ? "text-gray-600" : "text-gray-400"
            }`}>
              {copied ? "Copied!" : previewText}
            </p>
          </div>

          {/* Copy icon */}
          <div className={`flex-shrink-0 border-l transition-colors duration-300 ${
            copied ? "border-green-300" : "border-gray-200"
          }`}>
            <CopyButton text={displayText} copied={copied} onCopy={handleCopy} />
          </div>
        </div>
      </div>
    </div>
  );
}
