"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function DashBoard() {
    const searchParams = useSearchParams();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    useEffect(() => {
        setName(searchParams.get('name') ?? '');
        setAge(searchParams.get('age') ?? '');
    }, [searchParams]);
    return <div>
        DashBoard<h1>Trang thứ hai</h1>
        <p>Tên: {name}</p>
        <p>Tuổi: {age}</p></div>
}
// export async function getStaticProps() {
//     // Instead of fetching your `/api` route you can call the same
//     // function directly in `getStaticProps`
//     const posts = await loadPosts()
//
//     // Props returned will be passed to the page component
//     return { props: { posts } }
// }