'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation'
import SelectedItem from './SelectedItem'


const buttonPadding = {
    minWidth: "10px",
    maxWidth: "90%",
    backgroundColor: "rgb(44, 53, 66)",
    borderRadius: '10px',
    padding: "20px"  
}


const Page = () => {
    
    const searchParams = useSearchParams()
    let search = searchParams.get("search")

    if (search == null) {
        search = 0;
    }

    return (
        <div>
            <br></br>

            <SelectedItem index={search} />

        </div>
    );
};

export default Page;
