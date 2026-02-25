import React, { useState } from "react";
import axios from "axios";
const Api = () => {
    const [add, setAdd] = useState([]);
    console.log("helllo  : ", add);

    const handleadd = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.data;
        setAdd(data);
    };

    return (
        <>
            <h1>{add}</h1>
            <button onClick={() => handleadd()}>Add</button>
        </>
    );
};

export default Api;