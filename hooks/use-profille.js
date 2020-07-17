import { fetcher, fetchAndCache } from "../utils/fetcher";
import useSWR from "swr";

const key = "https://jsonplaceholder.typicode.com/comments/";

export default function useProfile() {
  return useSWR(key, fetcher);
}

export function getProfile() {
  return fetchAndCache(key);
}
