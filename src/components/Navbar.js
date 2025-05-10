//Navbbar component

function Navbar()
{
    return(
        <nav>
            <div className="flex justify-center items-center bg-black text-white gap-10 p-5 text-sm cursor-pointer">
            <i className="fa-brands fa-apple text-xl" style={{color:" #f3f4f7;"}}></i>
            <p className="hidden md:block hover:text-gray-300">StoreMac</p>
            <p className="hidden md:block hover:text-gray-300">iPad</p>
            <p className="hidden md:block hover:text-gray-300">iPhone</p>
            <p className="hidden md:block hover:text-gray-300">Watch</p>
            <p className="hidden md:block hover:text-gray-300">AirPods</p>
            <p className="hidden md:block hover:text-gray-300">TV & Home</p>
            <p className="hidden md:block hover:text-gray-300">Entertainment</p>
            <p className="hidden md:block hover:text-gray-300">Accessories</p>
            <p className="hidden md:block hover:text-gray-300">Support</p>
            <i class="fa-solid fa-magnifying-glass text-xl" style={{color: "#f6f7f9;"}}></i>
            <i class="fa-solid fa-bag-shopping text-xl" style={{color: "#f7f7f8;"}}></i>
            <i class="fa-solid fa-bars text-xl md:hidden"></i>
           </div>
        </nav>
    )
}

export default Navbar