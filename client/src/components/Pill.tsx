import "./pill.scss";

interface PillProp {
  label: string;
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
