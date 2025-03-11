import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function RootAppLayOut() {
    return (
        <>
            <div className=" bg-black ">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default RootAppLayOut
