import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const History = () => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:3003/users");

        setUsers(await response.json());

    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div >
            <div className="bg-secondary ">
            {users.map(curEle => {
                return (
                    <div className="container" key={curEle.id}>
                        <ul>
                            <li className=" mt-2 text-white">{curEle.h}:{curEle.m}:{curEle.s}:{curEle.ms} </li>
                        </ul>
                    </div>
                )
            })}
            </div>
            <div className="d-grid gap-2   fs-1 p-5 ">
                <Link to="/" className="btn btn-secondary fixed-bottom ">Go Back</Link>
            </div>

          
        </div>
    )
}

export default History
