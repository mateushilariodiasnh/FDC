import Data from "./Faq";
import Faq from "./FaqComponents";

export default function FaqShow() {
    return (
        <>
            {Data.map((item) => {
                return (
                    <ul>
                        <li key={item.number}>
                            <Faq data={item} />
                        </li>
                    </ul>
                )
            }
            )
            }
        </>
    )
}