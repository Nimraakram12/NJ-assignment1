import Link from "next/link";


export default function Header(){
    return(
        <nav className=" bg-gray-800 text-white h-20 p-4 items-center pl-10 flex gap-10 text-1xl ">
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white px-auto">
   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
 </svg>
 <p className="text-yellow-50  font-semibold text-2xl mr-auto px-auto">FrameFocus</p>
 <ul className='flex gap-8 justify items-between mr-auto ml-5 font-bold '>
       <li className="hover:text-blue-400"><Link href="/">Home</Link></li>
       <li className="hover:text-blue-400"><Link href="/about">About</Link></li>
       <li className="hover:text-blue-400"><Link href="/services/photography">Services</Link></li>
       <li className="hover:text-blue-400"><Link href="/contact-us">Contact Us</Link></li>
     </ul>
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-blue-100 text-gray-800 border-0 py-1 px-3 focus-outline-none hover:bg-blue-600 rounded text-base">
        Login
        </button>
        
    </div>
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-blue-100 text-gray-800 border-0 py-1 px-3 focus-outline-none hover:bg-blue-600 rounded text-base">
        SignUp
        </button>
        
    </div>
     </nav>

    );
}