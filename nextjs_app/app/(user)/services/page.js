"use client"
import Image from "next/image"
import web from '@/public/web.jpg'
import Counter from "./Counter"

// export const metadata = {
//     title:"Service Page",
//     description:"This is our service page",
//     authors:[{name:"Ansh Gupta",url:"ansh.com"},{name:"Tejveer Singh"}],
//     keywords:["web service","web development"],
//     icons:{
//         icon:"/images/logo.png"
//     }
// }
const Services = ()=>{
    return(
        <>
        <h1>Our Services</h1>
        <div className="grid grid-cols-3 ">
        {/* service card 1*/}
        <div className="w-60 h-60 bg-white p-6 rounded-lg">
            {/* image box */}
            <div className="w-24 h-24 border-2 rounded-full flex justify-between items-center mx-auto mb-4 bg-blue-400">
                <Image src='/web.jpg' width={500} height={500} alt="web" className="w-full h-full rounded-full"/>
            </div>
            <h3 className="text-black">Web Development</h3>
            <p className="text-black">Our main sevice the web devlopment we develop the website for the brands.</p>
        </div>
{/* service card 2 */}
        <div className="w-60 h-60 bg-white p-6 rounded-lg">
            {/* image box */}
            <div className="w-full h-full border-2 rounded-full flex justify-between items-center mx-auto mb-4 bg-blue-400 relative">
                <Image src={web} alt="web" fill={true} placeholder="blur" blurDataURL=""/>
            </div>
            <h3 className="text-black">Social media marketing</h3>
            <p className="text-black">Our main sevice the web devlopment we develop the website for the brands.</p>
        </div>
{/* {service card 3} */}
        <div className="w-60 h-60 bg-white p-6 rounded-lg">
            {/* image box */}
            <div className="w-24 h-24 border-2 rounded-full flex justify-between items-center mx-auto mb-4 bg-blue-400">
                <span className=" text-2xl font-bold text-purple-500">VBT</span>
            </div>
            <h3 className="text-black">Digital marketing</h3>
            <p className="text-black">Our main sevice the web devlopment we develop the website for the brands.</p>
        </div>
        <Counter/>
        </div>
        </>
    )
}

export default Services