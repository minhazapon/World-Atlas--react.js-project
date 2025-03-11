import { CiLocationArrow1 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import ConDetails from "./ConDetails";

function Contact() {

    const ContactData = [
        {
            "icon": <CiLocationArrow1></CiLocationArrow1>,
            "find": "Find Us",
            "location": "Jhenaidah, Bangladesh"
        },
        {
            "icon": <FaPhone></FaPhone>,
            "find": "Call Us",
            "location": "01950-374409"
        },
        {
            "icon": <MdMarkEmailRead></MdMarkEmailRead>,
            "find": "Find Us",
            "location": "Minhazapon@gmail.com"
        }
    ]

    return (
        <>
            <div>

                <div className=" ml-16 mr-16 mb-10 mt-10 p-5">

                    <div>
                        <div>
                            {
                                ContactData.map(PreValue => <ConDetails key={PreValue.id}></ConDetails>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
