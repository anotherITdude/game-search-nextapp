import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface gamesGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<gamesGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
