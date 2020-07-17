import { fetcher, fetchAndCache } from "../utils/fetcher";
import useSWR from "swr";

const key = "https://jsonplaceholder.typicode.com/photos/";

export default function useAbout() {
  return useSWR(key, fetcher);
}

export function getAbout() {
  return fetchAndCache(key);
}
