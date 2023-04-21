
// Interfaces
import { ingresosSection } from './../../../../interfaces/ingresosSection.interface';

export const IngresosSection = (props: ingresosSection) => {
    const text = props.text;
    return (
        <div>
            {text}
        </div>
    )
}