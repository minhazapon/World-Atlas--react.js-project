
function ConDetails({ PreValue }) {

    const { icon, find, location } = PreValue

    return (
        <>
            <div class="bg-black text-white p-4 w-64">
                <div class="flex items-start space-x-3">
                    <div class="text-blue-600 text-xl">
                        <p> {icon} </p>
                    </div>
                    <div>
                        <p class="text-white font-semibold"> {find} </p>
                        <p class="text-gray-400"> {location} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConDetails
