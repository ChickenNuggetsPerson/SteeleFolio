'use client'

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import Navbar from '../../app/components/navbar'
import Layout from '../../app/layout'


const tileStyle = {
    backgroundColor: "rgb(44, 53, 66)",
    borderRadius: '10px',
    padding: "20px",
    maxWidth: "200px"
}



async function generateImagesArray() {
    const directoryPath = path.join(process.cwd(), 'public/images/digitalArt/');
    const files = fs.readdirSync(directoryPath);

    let images = []

    for (let i = files.length -1; i >= 0; i--) {
            
        const imageBuffer = await sharp(`${directoryPath}${files[i]}`).toBuffer();
        const { width, height } = await sharp(imageBuffer).metadata();

        let scaleFactor = 100;
        
        images.push({
            src: `/images/digitalArt/${files[i]}`,
            original: `/images/digitalArt/${files[i]}`,
            width: width / scaleFactor,
            height: height / scaleFactor,
            tags: [],
            caption: `${files[i]}`,
        })
    }

    return images;
};


export async function getStaticProps() {
    const images = await generateImagesArray();
    return { props: { images } }
}

export default function Page({images}) {

    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
            <div>
                
                <Navbar></Navbar>
                
                <br></br>
                <div className="flex flex-col items-center p-5">
                    <div className='flex flex-col items-center' style={tileStyle}>
                        <text className="font-extrabold text-2xl">
                            Digital Art
                        </text>
                    </div>
                </div>
                
                
                <div className="min-h-screen flex-col items-center p-5">
                    <Gallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                    />
                    {!!currentImage && (
                        /* @ts-ignore */
                        <Lightbox
                            mainSrc={currentImage.original}
                            imageTitle={currentImage.caption}
                            mainSrcThumbnail={currentImage.src}
                            nextSrc={nextImage.original}
                            nextSrcThumbnail={nextImage.src}
                            prevSrc={prevImage.original}
                            prevSrcThumbnail={prevImage.src}
                            onCloseRequest={handleClose}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
                </div>

            </div>   
    );
}