import { useState } from "react";
import Header from "./components/Header";
import SelectionBar from "./components/SelectionBar";
import PackGrid from "./components/PackGrid";
import Footer from "./components/Footer";

/** Load all pack JSON files from src/packs/ via Vite glob import */
const packModules = import.meta.glob("./packs/*.json", { eager: true });

const packs = Object.values(packModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function App() {
  const [mode, setMode] = useState("replace");
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleMode = () =>
    setMode((prev) => (prev === "replace" ? "append" : "replace"));

  const toggleSelect = (id) =>
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const selectAll = () => {
    if (selectedIds.size === packs.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(packs.map((p) => p.id)));
    }
  };

  const clearSelection = () => setSelectedIds(new Set());

  const selectedPacks = packs.filter((p) => selectedIds.has(p.id));

  return (
    <div className="min-h-screen">
      <Header />
      <SelectionBar
        packs={packs}
        selectedPacks={selectedPacks}
        selectedIds={selectedIds}
        mode={mode}
        onToggleMode={toggleMode}
        onSelectAll={selectAll}
        onClear={clearSelection}
      />
      <PackGrid
        packs={packs}
        mode={mode}
        selectedIds={selectedIds}
        onToggleSelect={toggleSelect}
      />
      <Footer />
    </div>
  );
}
