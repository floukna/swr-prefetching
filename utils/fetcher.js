import { mutate } from "swr";
import axios from "axios";

export function fetcher(path) {
  return axios
    .get(path)
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

export async function fetchAndCache(key) {
  console.log("Prefetching", key);
  const request = await fetcher(key); // let's simulare higher prefetching speed
  mutate(key, request, false);
  console.log(request);
  return request;
}
