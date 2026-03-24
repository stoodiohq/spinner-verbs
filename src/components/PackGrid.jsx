import PackCard from "./PackCard";

/**
 * Responsive grid of pack cards with multi-select support.
 * 2 columns desktop, 1 mobile.
 */
export default function PackGrid({ packs, mode, selectedIds, onToggleSelect }) {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {packs.map((pack) => (
          <PackCard
            key={pack.id}
            pack={pack}
            mode={mode}
            isSelected={selectedIds.has(pack.id)}
            onToggleSelect={() => onToggleSelect(pack.id)}
          />
        ))}
      </div>
    </section>
  );
}
