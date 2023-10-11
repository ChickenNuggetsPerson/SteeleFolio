
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link'

import Navbar from '../../app/components/navbar'
import layout from '../../app/layout'

import "./programmingStyle.css"

function buttonClass(color) {

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
    padding: "10px",
    minHeight: "200px"
}


const tileStyle = {
    backgroundColor: "rgb(44, 53, 66)",
    borderRadius: '10px',
    padding: "20px",
    maxWidth: "1000px"
}
const contentSyle = {
    
}  

// The actual layout and html of the page
export default function Post({ content, files, data }) {
    return (
        <layout>
            
            <Navbar></Navbar>

            <div className="flex min-h-screen flex-col items-center p-5">
    
                <div className='flex flex-col items-center' style={tileStyle}>
                    <text className="font-extrabold text-2xl">
                        Programming
                    </text>
                </div>

                <br></br>

                <div className='md:flex gap-5 sm:w-90vw w-screen' style={tileStyle}>

                    <div className=''>

                    <div style={scrollStyle} className='md:h-4/5 h-28 h-fit rounded'>
                        <ul>
                            {files.map((item, index) => (
                                <div key={index}>
                                    <li key={index}>
                                        <Link href={`/programming/${item}`} scroll={false}>
                                            <button className={buttonClass("blue")} style={buttonStyle}>{item}</button>
                                        </Link>
                                    </li>
                                    <div style={spacerStyle}></div>
                                </div>
                            ))}
                        </ul>
                    </div>

                    </div>
                    
                    <div className='w-screen sm:w-70vw w-80vw items-center flex' style={contentSyle}>

                        <h1>{data.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content }} />

                    </div>

                </div>
                
            </div>
        </layout>
    );
}


// Runs at build time
// Reads the Md Directory and creates the static /programming/[id] paths
export async function getStaticPaths() {
    const directoryPath = path.join(process.cwd(), 'src/pages/programming/MdFiles');
    const files = fs.readdirSync(directoryPath);

    const paths = files.map((filename) => ({
        params: {
            id: filename.replace('.md', ''),
        },
    }));

    return { paths, fallback: false };
}

// Runs for every pathname
// Returns data that is passed into the first function
export async function getStaticProps({ params }) {
    try {

        let filename = path.join(process.cwd(), `src/pages/programming/MdFiles/${params.id}.md`);
        const content = fs.readFileSync(filename, 'utf8');
        
        
        const directoryPath = path.join(process.cwd(), 'src/pages/programming/MdFiles');
        const files = fs.readdirSync(directoryPath).map((filename) => filename.replace('.md', ''));

        const { data, content: markdownContent } = matter(content);

        const processedContent = await remark().use(html).process(markdownContent);

        const contentHtml = processedContent.toString();

        return {
            props: {
                content: contentHtml,
                files,
                data,
            },
        };
    } catch(err) {
        console.log(err)
        return {
            props: {
                content: "",
                data: { title: "MD File not Found"},
            }
        }
    }
    
}
