import { useState } from "react";
import CopyButton from "./CopyButton";

/**
 * Individual pack card with visible copy field and multi-select support.
 */
export default function PackCard({ pack, mode, isSelected, onToggleSelect }) {
  const [copyType, setCopyType] = useState("prompt");

  const scriptText = JSON.stringify(
    { spinnerVerbs: { mode, verbs: pack.verbs } },
    null,
    2
  );

  const promptText = `Add these spinner verbs to my ~/.claude/settings.json with mode "${mode}": ${pack.verbs.join(", ")}`;

  const displayText = copyType === "script" ? scriptText : promptText;

  const previewVerbs = pack.verbs.slice(0, 4);

  return (
    <div
      className={`bg-white border-2 rounded-xl p-6 transition-all cursor-pointer ${
        isSelected
          ? "border-[var(--color-accent)] shadow-sm"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onToggleSelect}
    >
      {/* Pack header with checkbox */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-black mb-2">
            <span className="mr-1.5">{pack.emoji}</span>
            {pack.name}
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            {pack.description}
          </p>
        </div>

        {/* Checkbox */}
        <div
          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ml-4 mt-1 transition-all ${
            isSelected
              ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
              : "border-gray-300"
          }`}
        >
          {isSelected && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>

      {/* Preview verbs */}
      <div className="mb-5 space-y-1.5">
        {previewVerbs.map((verb, i) => (
          <p key={i} className="text-sm font-[var(--font-mono)] text-gray-400 truncate">
            {verb}...
          </p>
        ))}
        <p className="text-sm text-gray-400 mt-2 font-medium">
          {pack.verbs.length} verbs
        </p>
      </div>

      {/* Copy field — stop click propagation so selecting the card doesn't fire */}
      <div
        className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Type selector */}
        <div className="relative flex-shrink-0 border-r border-gray-200 bg-white">
          <select
            value={copyType}
            onChange={(e) => setCopyType(e.target.value)}
            className="appearance-none bg-transparent text-sm font-medium text-gray-700 pl-3 pr-8 py-3 cursor-pointer focus:outline-none"
          >
            <option value="script">script</option>
            <option value="prompt">prompt</option>
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Visible preview text */}
        <div className="flex-1 px-3 py-3 min-w-0">
          <p className="text-sm font-[var(--font-mono)] text-gray-500 truncate">
            {copyType === "script"
              ? `{ "spinnerVerbs": { "mode": "${mode}", "verbs": [${pack.verbs.length}] } }`
              : `Add these ${pack.name} spinner verbs to my settings...`}
          </p>
        </div>

        {/* Copy icon */}
        <div className="flex-shrink-0 border-l border-gray-200">
          <CopyButton text={displayText} />
        </div>
      </div>
    </div>
  );
}
