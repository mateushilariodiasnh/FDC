import List from "./listComponent"
import { IDataList } from "../data/dataCadastro/listData"

interface IListProps {
    data: IDataList[],
}

export default function ListCadastroShow({data}: IListProps): JSX.Element {
    return (
        <div>
            {data.map((item) => {
                return (
                    <article key={item.id}>
                        <List data={item}/>
                    </article>
                )
            })}
        </div>
    )
}