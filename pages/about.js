import { useState, useEffect } from "react";
import axios from "axios";

import useAbout from "../hooks/use-about";

export default function About() {
  const { data } = useAbout();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos/")
  //     .then((res) => setData(res.data));
  // }, []);

  if (!data) {
    return <div>...Loading</div>;
  }
  return <div className="container">{JSON.stringify(data)}</div>;
}
