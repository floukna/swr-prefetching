import { useState, useEffect } from "react";
import axios from "axios";

import useProfile from "../hooks/use-profille";

export default function Profile() {
  const { data } = useProfile();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments/")
  //     .then((res) => setData(res.data));
  // }, []);

  if (!data) {
    return <div>...Loading</div>;
  }
  return <div className="container">{JSON.stringify(data)}</div>;
}
