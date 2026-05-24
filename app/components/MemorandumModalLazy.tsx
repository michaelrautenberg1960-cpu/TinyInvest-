"use client";
import dynamic from "next/dynamic";

const MemorandumModal = dynamic(() => import("./MemorandumModal"), { ssr: false });

export default function MemorandumModalLazy() {
  return <MemorandumModal />;
}
