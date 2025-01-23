"use client";
import { useSearchParams } from "next/navigation";

export default function DashBoard({prop}:{prop: string}) {
    const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');
    return <div>DashBoard<h1>Trang thứ hai</h1>
    <p>Tên: {name}</p>
    <p>Tuổi: {age}</p></div>
}