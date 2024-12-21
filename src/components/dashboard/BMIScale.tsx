import React from 'react';

const BMIScale = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-semibold text-lg mb-4">BMI Scale Reference</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>Underweight</span>
          <span className="text-yellow-600">&lt; 18.5</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Normal weight</span>
          <span className="text-green-600">18.5 - 24.9</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Overweight</span>
          <span className="text-orange-600">25 - 29.9</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Obese</span>
          <span className="text-red-600">≥ 30</span>
        </div>
      </div>
    </div>
  );
};

export default BMIScale;