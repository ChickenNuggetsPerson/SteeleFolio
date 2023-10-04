import Image from 'next/image'
import Link from 'next/link'

const haydenStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
const tileStyle = {
  backgroundColor: "rgb(44, 53, 66)",
  borderRadius: '10px',
  padding: "20px"
}
const buttonPadding = {
  maxWidth: "500px",
  minWidth: "10px",

  backgroundColor: "rgb(44, 53, 66)",
  borderRadius: '10px',
  padding: "20px"  
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
    <main className="flex min-h-screen flex-col items-center p-24">
      
      <div className='flex flex-col items-center w-max' style={tileStyle}>
        <text className="font-extrabold text-2xl">
          Hayden Steele
        </text>
        <br></br>
        <Image
          src="/Hayden.png" 
          alt={''}
          width={200}
          height={200}
          style={haydenStyle}
        />
        <br></br>
        <text className="font-bold font-mono">
          2024 SHS Senior 
        </text>
      </div>

      <br></br>
      <br></br>
    
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={buttonPadding}>
        <Link href="/programming">
          <button className={buttonClass("green")} style={buttonStyle}> Programming </button>
        </Link>
        <Link href="/photography">
          <button className={buttonClass("blue")} style={buttonStyle}> Photography </button>
        </Link>
        <Link href="/digitalart">
          <button className={buttonClass("purple")} style={buttonStyle}> Digital Art </button>
        </Link>
      </div>

      
    </main>
  )
}
