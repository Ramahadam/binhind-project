"use client";
import { use } from "react";
import { useParams } from "next/navigation";

export default function Service({ params }) {
  const { slug } = use(params);

  return (
    <div>
      <p>{slug}</p>
    </div>
  );
}
