interface CardProps {
  title: string;
  value: number;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, value, className = "" }) => (
  <div className={`p-4 bg-white rounded shadow-md ${className}`}>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-xl">{value}</p>
  </div>
);
