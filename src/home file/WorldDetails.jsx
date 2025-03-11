
function WorldDetails({ worldValue }) {

    const { id, name, capital, population, interesting_facts } = worldValue

    return (
        <>
            <div className="card w-96 bg-gradient-to-r from-black to-gray-800 text-white border-[1px] card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Name: {name} </h2>
                    <p className="font-thin">Capital: {capital} </p>
                    <p className="font-thin">Population: {population} </p>
                    <p className="font-thin">Facts: {interesting_facts} </p>
                </div>
            </div>
        </>
    )
}

export default WorldDetails
