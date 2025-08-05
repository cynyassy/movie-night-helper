import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const moods = [
    { emoji: "🥰", title: "Cozy & Comfortable", desc: "Want something warm and heartwarming", tags: ["Romance", "Comedy", "Feel-Good Drama"] },
    { emoji: "🔥", title: "Adventurous & Excited", desc: "Ready for thrills and excitement", tags: ["Action", "Adventure", "Thriller"] },
    { emoji: "☁️", title: "Emotional & Reflective", desc: "In the mood for something deep and meaningful", tags: ["Drama", "Romance", "Indie"] },
    { emoji: "😁", title: "Fun & Lighthearted", desc: "Want to laugh and have a good time", tags: ["Comedy", "Musical", "Animation"] },
    { emoji: "🔍", title: "Curious & Intrigued", desc: "Love puzzles and mysteries", tags: ["Mystery", "Thriller", "Sci-Fi"] },
    { emoji: "✨", title: "Nostalgic & Dreamy", desc: "Missing simpler times", tags: ["Classic", "Period Drama", "Coming-of-Age"] },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f9f9f9, #e0f7fa)", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Movie Night Helper</h1>
      <p style={{ textAlign: "center" }}>Let's find the perfect movie for how you're feeling right now</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
        {moods.map((mood) => (
          <div key={mood.title} style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem" }}>{mood.emoji}</div>
            <h3>{mood.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>{mood.desc}</p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.4rem", margin: "0.8rem 0" }}>
              {mood.tags.map((tag) => (
                <span key={tag} style={{ background: "#eee", padding: "0.3rem 0.6rem", borderRadius: "20px", fontSize: "0.8rem" }}>{tag}</span>
              ))}
            </div>
            <button
              style={{ padding: "0.5rem 1rem", background: "#222", color: "#fff", borderRadius: "8px", border: "none", cursor: "pointer" }}
              onClick={() => navigate("/filters", { state: { mood: mood.title } })}
            >
              This Feels RIGHT! ✨
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}