import { ReactNode } from "react";
import "./pill.scss";

interface PillProp {
  label: string | ReactNode;
  color?: string;
}

const Pill: React.FC<PillProp> = ({ label, color }) => {
  return (
    <div className="pill" style={{ backgroundColor: color }}>
      {label}
    </div>
  );
};

export default Pill;
