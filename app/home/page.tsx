import React from "react";
import Button from "./Button";

async function page() {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
  });
  console.log(await res.json());
  return (
    <div>
      <Button />
    </div>
  );
}

export default page;
