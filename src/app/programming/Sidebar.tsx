import React from 'react';
import Link from 'next/link'
import data from './programming.json';


function buttonClass(color : string) : string {

    let width = ""

    if (color == "green") {
        return `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ` + width
    }
    if (color == "purple") {
        return `bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ` + width
    }
    return `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ` + width
}
const buttonStyle = {
    width: "150px"
}
const spacerStyle = {
    height: "10px"
}
const scrollStyle = {
    overflow: "auto",
    backgroundColor: "rgb(37, 46, 59)",
    padding: "10px"
}



const Sidebar = () => {
    return (
        <div style={scrollStyle} className='md:h-4/5 h-28 h-fit rounded'>
            <ul>
                {data.map((item, index) => (
                    <div key={index}>
                        <li key={index}>
                            <Link href={`/programming/?search=${index}`} scroll={false}>
                                <button className={buttonClass("blue")} style={buttonStyle}>{item.title}</button>
                            </Link>
                        </li>
                        <div style={spacerStyle}></div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
