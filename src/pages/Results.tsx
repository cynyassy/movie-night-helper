import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_KEY = "48d09f2e"; // Your OMDb API key

// Map moods to search terms OMDb understands
const moodKeywords: Record<string, string> = {
  "Cozy & Comfortable": "romance",
  "Adventurous & Excited": "adventure",
  "Emotional & Reflective": "drama",
  "Fun & Lighthearted": "comedy",
  "Curious & Intrigued": "mystery",
  "Nostalgic & Dreamy": "classic"
};

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const { mood, filters } = location.state || { mood: "", filters: {} };

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);

        const keyword = moodKeywords[mood] || "movie"; // fallback if mood is unknown
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
            keyword
          )}&type=movie`
        );

        const data = await res.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [mood]);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
        fontFamily: "sans-serif"
      }}
    >
      <h1>🎬 Movie Suggestions for "{mood}"</h1>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "0.5rem 1rem",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginBottom: "1rem",
          cursor: "pointer"
        }}
      >
        ⬅ Start Over
      </button>

      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              {movie.Poster && movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "0.5rem"
                  }}
                />
              ) : (
                <div
                  style={{
                    background: "#ccc",
                    height: "300px",
                    borderRadius: "8px",
                    marginBottom: "0.5rem"
                  }}
                />
              )}
              <h3 style={{ margin: "0.5rem 0" }}>{movie.Title}</h3>
              <p style={{ margin: "0", fontSize: "0.9rem" }}>
                {movie.Year} • {movie.Type}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found for this mood. Try a different one!</p>
      )}
    </div>
  );
}