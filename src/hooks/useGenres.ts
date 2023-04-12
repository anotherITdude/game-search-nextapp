//import useData from "./useData";
import staticGenres from "../data/StaticGenres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

//removing call from server to get genres
//const useGenres = () => useData<Genre>("/genres");

//adding code to load static genre data
const useGenres = () => ({ data: staticGenres, isLoading: false, error: null});


export default useGenres;
