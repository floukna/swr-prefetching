import { fetcher, fetchAndCache } from "../utils/fetcher";
import useSWR from "swr";

const key = "https://jsonplaceholder.typicode.com/todos/";

export default function useHome() {
  return useSWR(key, fetcher);
}

export function getHome() {
  return fetchAndCache(key);
}
