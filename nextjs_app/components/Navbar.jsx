
import Link from "next/link"
export default function Navbar (){
    return(
        <header className="flex justify-between p-4 items-center">
            
            <div>
                <h1 className="text-2xl">Ansh</h1>
            </div>
            <div className="flex gap-5 text-2xl m-6">
               <Link href="/"><p>Home</p></Link> 
                <Link href="/about"><p>About</p></Link>
                <Link href="/services"><p>Services</p></Link>
               
            </div>
        </header>
    )
}