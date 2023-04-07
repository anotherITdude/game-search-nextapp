import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}
interface gamesFetchResponse {
  count: number;
  results: Games[];
}
const GameList = () => {
  const [games, setgames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<gamesFetchResponse>("/games")
      .then((res) => setgames(res.data.results))
      .catch((err) => setError(err.message));
    return () => controller.abort();
  }, [games, error]);
  return (
    <div>
      {" "}
      {error && <Text>{error}</Text>}{" "}
      <ul>
        {" "}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};
export default GameList;
