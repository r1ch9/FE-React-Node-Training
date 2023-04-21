

// Importacion de interfaces
import { centerSection } from "../../../../interfaces/centerSection.interface";

export const CenterSection = (props: centerSection) => {
  const text = props.text;

  return (
    <div>
      <span>{text}</span>
    </div>
  );
};
