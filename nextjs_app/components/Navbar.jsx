import style from './navbar.module.css'
import Link from "next/link"
export default function Navbar (){
    return(
        <header className={style.nav}>
            
            <div>
                <h1>Ansh</h1>
            </div>
            <div className={style.nav_menu} >
               <Link href="/"><p>Home</p></Link> 
                <Link href="/about"><p>About</p></Link>
                <Link href="/services"><p>Services</p></Link>
               
            </div>
        </header>
    )
}