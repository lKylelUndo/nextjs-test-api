"use client";
import React, { useEffect } from "react";

function Button() {
  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch(
          "https://nextjs-test-api-alpha.vercel.app/api/todos"
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTodos();
  }, []);
  return (
    <div>
      <button onClick={() => alert("hello")}>click me</button>
    </div>
  );
}

export default Button;
