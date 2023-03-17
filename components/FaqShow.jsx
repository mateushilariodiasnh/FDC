import Data from "./data/Faq";
import Faq from "./FaqComponents";

export default function FaqShow() {
    return (
        <ul>
            {Data.map((item) => {
                return (

                    <li key={item.number}>
                        <Faq data={item} />
                    </li>

                )
            }
            )
            }
        </ul>
    )
}