import useData from "./useData";
import staticPlatforms from "../data/StaticPlatforms";
export interface Platform {
    id: number;
    name: string;
    slug: string
}

//removing call from server to get platforms
//const usePlatforms = () => useData<Platform>('platforms/lists/parents')

 //adding code to load static genre data
const usePlatforms = () => ({ data: staticPlatforms, isLoading: false, error: null});


export default usePlatforms;