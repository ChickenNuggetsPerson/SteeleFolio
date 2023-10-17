
import Link from 'next/link'
import Image from 'next/image'


const haydenStyle = {
    borderRadius: '10%',
    border: '1px solid #fff',
    position: 'absolute'
}
const headerStyle = {
    //maxWidth: "50%",
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


const NavBar = () => {
    return (
        <div className="" style={headerStyle}>
            <Link href="/">
                <Image
                    src="/Hayden.png" 
                    alt={''}
                    width={90}
                    height={100}
                    style={{
                        borderRadius: '10%',
                        border: '1px solid #fff',
                        position: 'absolute'
                    }}
                />
            </Link>
            <div className="flex flex-col items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={buttonPadding}>
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
            </div>
        </div>
        
    )
}



export default NavBar;