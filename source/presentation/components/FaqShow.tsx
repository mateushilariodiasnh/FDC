import { dataFaq } from "./data/Faq";
import Faq from "./FaqComponents";

export default function FaqShow(): JSX.Element {
    return (
        <ul className="divide-y divide-tertiaryGrayBlue pl-6 mr-12">
            {dataFaq.map((item) => {
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