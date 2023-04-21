
// Interfaces
import { mainComponent } from "../../interfaces/mainComponent.interface"

// Importacion de Componentes
import { CenterSection } from "./components/centerSection/centerSection";
import { GastosSection } from "./components/gastosSection/gastosSection";
import { IngresosSection } from "./components/ingresosSection/ingresosSection";

export const MainComponent = (props: mainComponent) => {
    const text = props.text;

    return (
        <div> 
            <div className="container">
                <div className="row">
                    {/* Columna ingresos */}
                    <div className="col">
                        <IngresosSection text={text}></IngresosSection>
                    </div>
                    
                    {/* Columna central */}
                    <div className="col">
                        <CenterSection text={text}></CenterSection>
                    </div>

                    {/* Columna gastos */}
                    <div className="col">
                        <GastosSection text={text}></GastosSection>
                    </div>
                </div>
            </div>
        </div>
    )
}