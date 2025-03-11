

function Banner() {

    return (
        <>
            <div className=" ml-16 mr-16 mt-10 mb-16 p-5 ">
                <div className=" flex-col md:flex-row lg:flex-row flex justify-between items-center gap-5 ">
                    <div className=" text-white">
                        <p className=" text-white font-semibold text-4xl ">Explore The World, One<br></br> Country At a Time</p>
                        <p className=" mt-5 font-semibold ">"The world is changed by your example, not by your opinion."
                            — Paulo Coelho</p>
                        <div>
                            <button className=" btn text-white bg-black mt-5 ">Start Exploring </button>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-xl h-[200px]" src="https://img.freepik.com/free-vector/minimal-world-map-isolated-white-background-with-shadow_1017-42608.jpg?t=st=1741681455~exp=1741685055~hmac=2f60b1c1b77a7a5673509dfa95225dd6b7d22207b868daeeb672ec588bac36c8&w=1380" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
