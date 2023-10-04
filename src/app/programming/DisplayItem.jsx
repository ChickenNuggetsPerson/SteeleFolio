import React, { useState, useEffect, useRef } from 'react';
import data from './programming.json';


const Item = ({ id }) => {    
    const item = data[id];

    const [result, setResult] = useState(null);
    const resultRef = useRef(result);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/renderMd?fileName=' + item.file);
            const jsonData = await response.json();
            resultRef.current = jsonData.content;
            setResult(jsonData)
        }
    
        fetchData();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: resultRef.current }} />
    );
};

export default Item;
