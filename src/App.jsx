import { useState } from "react";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import PackGrid from "./components/PackGrid";
import Footer from "./components/Footer";

/** Load all pack JSON files from src/packs/ via Vite glob import */
const packModules = import.meta.glob("./packs/*.json", { eager: true });

const packs = Object.values(packModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function App() {
  const [mode, setMode] = useState("replace");

  const toggleMode = () =>
    setMode((prev) => (prev === "replace" ? "append" : "replace"));

  return (
    <div className="min-h-screen">
      <Header />
      <ModeToggle mode={mode} onToggle={toggleMode} />
      <PackGrid packs={packs} mode={mode} />
      <Footer />
    </div>
  );
}
