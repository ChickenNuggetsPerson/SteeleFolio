'use client'

import Image from 'next/image'
import Link from 'next/link'
import Spline from '@splinetool/react-spline';

const haydenStyle = {
  height: "70vh",
  width: "70vw"
}

const buttonStyle = {
  width: "150px"
}

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







export default function index() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">

      <div className='w-100vw h-40vh md:h-90vh' style={{
        //userSelect: "none"
      }}>
        <Spline scene="/home.splinecode" />
      </div>
      
      <br></br>
    
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{
        
          maxWidth: "500px",
          minWidth: "10px",
        
          backgroundColor: "rgb(44, 53, 66)",
          borderRadius: '10px',
          padding: "20px",
        
          bottom: "2vh",
          position: "absolute"
        
      }}>
        <Link href="/programming">
          <button className={buttonClass("green")} style={buttonStyle}> Programming </button>
        </Link>
        <Link href="/photography">
          <button className={buttonClass("blue")} style={buttonStyle}> Photography </button>
        </Link>
        <Link href="/digitalArt">
          <button className={buttonClass("purple")} style={buttonStyle}> Digital Art </button>
        </Link>
      </div>
      
    </main>
  )
}
