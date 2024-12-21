import React from 'react';

type ResultCardProps = {
  title: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

const ResultCard = ({ title, value, icon, className = '' }: ResultCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-blue-600">{icon}</span>}
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
        {value}
      </div>
    </div>
  );
};

export default ResultCard;