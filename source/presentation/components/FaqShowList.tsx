import { dataFaq } from "./data/FaqData";
import Faq from "./FaqComponent";

export default function FaqShowList(): JSX.Element {
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