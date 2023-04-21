
// Interfaces
import { gastosSection } from "../../../../interfaces/gastosSection.interface"

export const GastosSection = (props: gastosSection) => {
    const text = props.text;
    return (
        <div>
            {text}
        </div>
    )
}