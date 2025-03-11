import { NavLink } from "react-router-dom"

function Nav() {

    const NavZ = <>

        <li className=" text-white hover:border-[1px] border-cyan-300 "><NavLink to='/'>Home</NavLink></li>
        <li className=" text-white hover:border-[1px] border-cyan-300 "><NavLink to='/about'>About</NavLink></li>
        <li className=" text-white hover:border-[1px] border-cyan-300 "><NavLink to='/country'>Country</NavLink></li>
        <li className=" text-white hover:border-[1px] border-cyan-300 "><NavLink to='/contact'>Contact</NavLink></li>

    </>

    return (
        <>
            <div>
                <div className="navbar bg-base-100 shadow-sm p-5 bg-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {NavZ}
                            </ul>
                        </div>
                        <div className=" md:ml-16  flex items-center gap-1 ">
                            <img className=" h-[40px] " src="https://cdn-icons-png.flaticon.com/128/4681/4681442.png" alt="" />
                            <a className="text-xl font-semibold text-white">WorldAtlas</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavZ}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-black text-white  md:mr-16">Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
