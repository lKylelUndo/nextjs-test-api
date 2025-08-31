import React from "react";
import Button from "./Button";

// export async function getTodos() {
//   const res = await fetch("https://dummyjson.com/todos");
//   const data = await res.json();
//   return data;
// }

async function page() {
  const res = await fetch(
    "https://nextjs-test-api-alpha.vercel.app/api/todos",
    {
      method: "GET",
    }
  );
  console.log(await res.json());
  return (
    <div>
      <Button />
    </div>
  );
}

export default page;
