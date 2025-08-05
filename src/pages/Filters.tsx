import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Filters() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mood } = location.state || {};

  const [filters, setFilters] = useState({
    language: "Any Language",
    animation: "Any Style",
    era: "Any Era",
    runtime: "Any Length",
  });

  const handleSelect = (type: string, value: string) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9f9f9, #e0f7fa)", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Movie Night Helper</h1>
      <p style={{ textAlign: "center" }}>Perfect! Now let's fine-tune your <strong>{mood}</strong> mood</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem", maxWidth: "800px", marginInline: "auto" }}>
        
        {/* Language */}
        <div>
          <h3>🌍 Language</h3>
          {["English", "Japanese", "Korean", "French", "Spanish", "Italian", "Any Language"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect("language", lang)}
              style={{
                margin: "0.3rem",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                border: filters.language === lang ? "2px solid black" : "1px solid #ccc",
                background: filters.language === lang ? "#ddd" : "#fff",
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Runtime */}
        <div>
          <h3>⏳ Runtime</h3>
          {["Short (<100 min)", "Medium (100–140 min)", "Epic (>140 min)", "Any Length"].map((time) => (
            <button
              key={time}
              onClick={() => handleSelect("runtime", time)}
              style={{
                margin: "0.3rem",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                border: filters.runtime === time ? "2px solid black" : "1px solid #ccc",
                background: filters.runtime === time ? "#ddd" : "#fff",
              }}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{ padding: "0.5rem 1rem", marginRight: "1rem", borderRadius: "8px", border: "none", background: "#ccc" }}
            onClick={() => navigate(-1)}
          >
            ⬅ Back to Mood
          </button>
          <button
            style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "none", background: "black", color: "white" }}
            onClick={() => navigate("/results", { state: { mood, filters } })}
          >
            Find My Movies →
          </button>
        </div>
      </div>
    </div>
  );
}