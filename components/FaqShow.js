import PerguntasRespostas from "./FaqComponents";
import Data from "./Faq";
import Faq from "./FaqComponents";

export default function FaqShow() {
    return (
        <>
            {Data.map((item) =>{
                            return (
                                <li  key={item.number}>
                                <Faq  data={item}/></li>
                            )
                        }
                    )
            }
        </>
        )
}