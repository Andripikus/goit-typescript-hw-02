import React, { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search term.", {
        position: "top-center",
        style: {
          backgroundColor: "#ff4d4f",
          color: "#fff",
        },
      });
      return;
    }
    setError(null);
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          className={css.input}
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {error && <p className={css.error}>{error}</p>}
      <Toaster />
    </header>
  );
}
