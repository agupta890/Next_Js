import Navbar from "@/components/Navbar";
import "../globals.css"
import {Roboto, Work_Sans} from 'next/font/google'

export const metadata = {
  title:{
    default:"Ansh || Mern Stack Developer",
    template:"%s || Ansh Gupta"
  },
  description:"this is my personal webpage",
  keywords:["react","javascript"],
  icons:{
    icon:"/images/logo.png"   // ✅ fixed
  }
}

const roboto = Roboto({subsets:["latin"],
  variable: "--font-roboto",
})
const workSans = Work_Sans({subsets:["latin"],
  variable: "--font-work-sans",
})
export default function RootLayout({children}){
 return(
 <html>
    <body className={`${roboto.variable} ${workSans.variable}`}>
      <Navbar/>
      {children}
      <h1>Footer</h1>
      </body>
  </html>
  ) 
}