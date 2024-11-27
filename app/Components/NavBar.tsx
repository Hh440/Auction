
const NavBar =()=>{
    return(
        <nav className="border border-black rounded-sm w-full h-20 bg-gradient-to-r from-[#3c3f46] to-[#8b9096]">
            <div className="flex flex-row  justify-evenly items-center h-full">
                <div className="flex flex-row  h-full">
                    <img src="/media/auction_logo.png" alt="Loading...." className="h-24"/>

                </div>
                <div className="items-center">
                    <ul className="flex flex-cols gap-6 text-white ">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Auctions</a></li>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Alfenso</a></li>
                        <li><a href="#">About</a></li>
                    </ul>

                </div>

                <div>
                    <button className="border rounded-md  hover:bg-opacity-20 transition duration-300 hover:bg-slate-600 hover:text-white w-40 h-12">Wallet</button>
                </div>

            </div>

        </nav>
    )
}

export default NavBar