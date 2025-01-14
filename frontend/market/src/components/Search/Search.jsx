import css from "./style.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:8000/api/products/search?query=${query}`
          );
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
