import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import WorldDetails from "./WorldDetails"


function WorldFacts() {

    const [world, setWorld] = useState([])

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/minhazapon/World-Atlas--react.js-project/refs/heads/main/public/world.json')
            .then(res => {
                setWorld(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className="ml-16 mr-16 p-5 mb-10 mt-10">

                <div>
                    <div>
                        <p className=" text-center text-white font-semibold text-4xl">Here is the interesting<br></br> facts we're proud</p>
                    </div>

                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-3 gap-5 ">
                            {
                                world.map(worldValue => <WorldDetails key={worldValue.id} worldValue={worldValue}  ></WorldDetails>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorldFacts
