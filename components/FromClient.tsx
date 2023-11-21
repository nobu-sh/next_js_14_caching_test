"use client";
import { useState, useEffect } from "react";

export default function FromClient() {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:3000/api/getDate", {
        cache: "no-store",
      });
      const { timestamp } = await data.json();
      setTimestamp(timestamp);
    };
    getData();
  }, []);

  return <div>{timestamp}</div>;
}
