import React from 'react';

type ResultCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
};

const ResultCard = ({ title, value, icon, className = '' }: ResultCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-blue-600">{icon}</span>}
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default ResultCard;