import { useState, useCallback } from "react";

/**
 * Copy-to-clipboard button with "Copied!" feedback animation.
 * @param {{ pack: object, mode: "replace"|"append" }} props
 */
export default function CopyButton({ pack, mode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const config = JSON.stringify(
      {
        spinnerVerbs: {
          mode,
          verbs: pack.verbs,
        },
      },
      null,
      2
    );

    try {
      await navigator.clipboard.writeText(config);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = config;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [pack.verbs, mode]);

  return (
    <button
      onClick={handleCopy}
      className={`
        w-full py-3 px-4 rounded-lg font-mono text-sm font-semibold
        transition-all duration-200 cursor-pointer
        ${
          copied
            ? "bg-green-600 text-white copied-pulse"
            : "bg-[var(--color-dark-500)] text-gray-200 hover:bg-[var(--color-dark-400)] hover:text-white"
        }
      `}
    >
      {copied ? "Copied! ✓" : "Copy Script"}
    </button>
  );
}
