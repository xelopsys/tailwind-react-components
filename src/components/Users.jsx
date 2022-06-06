import { useEffect, useState } from "react";
import React from 'react'

export default function Users() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await res.json()
            setData(json)
        }
        // const users = data.json();
        fetchData()
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}