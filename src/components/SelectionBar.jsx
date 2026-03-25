import { useState, useCallback } from "react";
import CopyButton from "./CopyButton";
import { CLAUDE_DEFAULT_VERBS } from "../defaults";

/**
 * Sticky toolbar above the pack grid.
 * Combines include-defaults checkbox, select all/clear, and copy field.
 */
export default function SelectionBar({
  packs,
  selectedPacks,
  selectedIds,
  includeDefaults,
  onToggleDefaults,
  onSelectAll,
  onClear,
}) {
  const [copyType, setCopyType] = useState("prompt");
  const [copied, setCopied] = useState(false);

  const allSelected = selectedIds.size === packs.length;
  const hasSelection = selectedIds.size > 0;
  const totalVerbs = selectedPacks.reduce((sum, p) => sum + p.verbs.length, 0);
  const totalWithDefaults = totalVerbs + (includeDefaults ? CLAUDE_DEFAULT_VERBS.length : 0);

  const packVerbs = selectedPacks.flatMap((p) => p.verbs);
  const allVerbs = includeDefaults ? [...CLAUDE_DEFAULT_VERBS, ...packVerbs] : packVerbs;

  const packNames = selectedPacks.map((p) => p.name).join(", ");

  const promptText = hasSelection
    ? includeDefaults
      ? `Replace the spinnerVerbs in my ~/.claude/settings.json with these verbs (Claude defaults + ${packNames} packs). Set mode to "replace":\n\n${allVerbs.join(", ")}`
      : `Add these spinner verbs to my ~/.claude/settings.json. Merge them into my existing spinnerVerbs array without removing any verbs I already have. If I don't have spinnerVerbs yet, create it with mode "replace":\n\n${packVerbs.join(", ")}`
    : "";

  const scriptText = hasSelection
    ? JSON.stringify(allVerbs, null, 2)
    : "";

  const displayText = copyType === "script" ? scriptText : promptText;

  const previewText = hasSelection
    ? copyType === "script"
      ? `[${totalWithDefaults} verbs from ${selectedIds.size} pack${selectedIds.size === 1 ? "" : "s"}${includeDefaults ? " + defaults" : ""}]`
      : includeDefaults
        ? `Replace my verbs with ${totalWithDefaults} verbs (defaults + ${selectedIds.size} packs)...`
        : `Merge ${totalVerbs} verbs from ${selectedIds.size} pack${selectedIds.size === 1 ? "" : "s"} into my settings...`
    : "Select packs below to build your verb mix";

  const handleCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(250, 249, 245, 0.95)" }}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        {/* Controls row: include defaults + select/clear */}
        <div className="flex items-center justify-between mb-3">
          {/* Include defaults checkbox */}
          <button
            type="button"
            onClick={onToggleDefaults}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div
              className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                includeDefaults
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                  : "border-[var(--color-mid-gray)] group-hover:border-[var(--color-accent)]"
              }`}
            >
              {includeDefaults && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span
              className={`text-sm transition-colors ${
                includeDefaults ? "text-[var(--color-dark)] font-medium" : "text-[var(--color-mid-gray)]"
              }`}
            >
              Include Claude&apos;s default verbs
            </span>
          </button>

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
                  className="text-sm text-[var(--color-body)] hover:text-[var(--color-dark)] cursor-pointer"
                >
                  Clear
                </button>
                <span className="text-[var(--color-light-gray)]">|</span>
                <span className="text-sm text-[var(--color-body)]">
                  {selectedIds.size} {selectedIds.size === 1 ? "pack" : "packs"} · {totalWithDefaults} verbs
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
              copied ? "text-[var(--color-green)]" : hasSelection ? "text-[var(--color-body)]" : "text-[var(--color-mid-gray)]"
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
