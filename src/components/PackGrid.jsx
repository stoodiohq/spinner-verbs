import PackCard from "./PackCard";

/**
 * Pinterest-style responsive grid of pack cards.
 * 3 columns desktop, 2 tablet, 1 mobile.
 */
export default function PackGrid({ packs, mode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packs.map((pack) => (
          <PackCard key={pack.id} pack={pack} mode={mode} />
        ))}
      </div>
    </section>
  );
}
