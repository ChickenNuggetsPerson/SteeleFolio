// pages/item/[id].js
import React from 'react';
import data from './programming.json';

const scrollStyle = {
    overflowY: "scroll",
    backgroundColor: "rgb(37, 46, 59)",
    padding: "10px",
    width: "60vw"
}
const imageStyle = {
    //maxWidth: "800px",
    maxHeight: "50vh",
}
const textStyle = {
    width: "100%"
}

const Item = ({ id }) => {    
    const item = data[id];

    return (
        <div style={scrollStyle} className='h-screen rounded'>
            <text className='font-extrabold text-2xl'>{item.title}</text>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <br></br>
            <div className='' style={textStyle}>{item.desc}</div>
        </div>
    );
};

export default Item;

export async function getServerSideProps({ params }) {
    const id = params.id;
    return {
        props: {
        id
        }
    };
}
