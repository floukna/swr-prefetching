import { useState, useEffect } from "react";
import axios from "axios";

import useHome from "../hooks/use-home";

export default function Home() {
  const { data } = useHome();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/")
  //     .then((res) => setData(res.data));
  // }, []);

  if (!data) {
    return <div>...Loading</div>;
  }

  return <div className="container">{JSON.stringify(data)}</div>;
}
