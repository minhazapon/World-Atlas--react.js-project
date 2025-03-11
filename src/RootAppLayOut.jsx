import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

function RootAppLayOut() {
    return (
        <>
            <div className=" bg-black ">
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}

export default RootAppLayOut
