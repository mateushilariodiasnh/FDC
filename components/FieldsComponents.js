import Fields from "./Field"
import FieldsData from "./FieldsData"

export default function FieldsComponents() {
    return (
        <div>
            {FieldsData.map((item) => {
                return (
                    <article>
                        <Fields title={item.title} content={item.content} />
                    </article>
                )
            })}
        </div>
    )
}