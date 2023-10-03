
import SideList from './Sidebar'
import DisplayItem from './DisplayItem'


const tileStyle = {
  backgroundColor: "rgb(44, 53, 66)",
  borderRadius: '10px',
  padding: "20px"
}
const contentSyle = {
  //width: "100px"
}


export default function index({ index }: { index: number }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      
      <div className='flex flex-col items-center' style={tileStyle}>
        <text className="font-extrabold text-2xl">
          Programming
        </text>
      </div>

      <br></br>

      <div className='md:flex gap-5' style={tileStyle}>

        <div className=''>
          <SideList/>
        </div>
        
        <div className='' style={contentSyle}>
          <DisplayItem id={index}/>
        </div>

      </div>
      
    </main>
  )
}
