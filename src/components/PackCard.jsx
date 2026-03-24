import { useState } from "react";
import CopyButton from "./CopyButton";

/**
 * Individual pack card.
 * Shows pack name, description, preview verbs, and a visible copy field
 * with the JSON config or Claude Code prompt.
 */
export default function PackCard({ pack, mode }) {
  const [copyType, setCopyType] = useState("script");

  const scriptText = JSON.stringify(
    { spinnerVerbs: { mode, verbs: pack.verbs } },
    null,
    2
  );

  const promptText = `Add these spinner verbs to my ~/.claude/settings.json with mode "${mode}": ${pack.verbs.join(", ")}`;

  const displayText = copyType === "script" ? scriptText : promptText;

  const previewVerbs = pack.verbs.slice(0, 3);

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
      {/* Pack header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-black mb-1">
          {pack.emoji} {pack.name}
        </h2>
        <p className="text-sm text-gray-500">
          {pack.description}
        </p>
      </div>

      {/* Preview verbs */}
      <div className="mb-4">
        {previewVerbs.map((verb, i) => (
          <p key={i} className="text-xs font-[var(--font-mono)] text-gray-400 truncate">
            {verb}...
          </p>
        ))}
        <p className="text-xs text-gray-400 mt-1">{pack.verbs.length} verbs</p>
      </div>

      {/* Copy field — visible script/prompt with copy icon */}
      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
        {/* Type selector */}
        <div className="relative flex-shrink-0 border-r border-gray-200">
          <select
            value={copyType}
            onChange={(e) => setCopyType(e.target.value)}
            className="appearance-none bg-transparent text-xs font-medium text-gray-700 pl-3 pr-7 py-3 cursor-pointer focus:outline-none"
          >
            <option value="script">script</option>
            <option value="prompt">prompt</option>
          </select>
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Visible text */}
        <div className="flex-1 px-3 py-3 overflow-hidden">
          <p className="text-xs font-[var(--font-mono)] text-gray-500 truncate">
            {copyType === "script"
              ? `{ "spinnerVerbs": { "mode": "${mode}", "verbs": [...${pack.verbs.length}] } }`
              : `Add these ${pack.name} spinner verbs to my settings...`}
          </p>
        </div>

        {/* Copy icon */}
        <CopyButton text={displayText} />
      </div>
    </div>
  );
}
