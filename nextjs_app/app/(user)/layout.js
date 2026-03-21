import Navbar from "@/components/Navbar";
import "../globals.css"
export default function RootLayout({children}){
 return(
 <html>
    <body>
      <Navbar/>
      {children}
      <h1>Footer</h1>
      </body>
  </html>
  ) 
}