import React from 'react';

type MacrosChartProps = {
  protein: number;
  carbs: number;
  fat: number;
};

const MacrosChart = ({ protein, carbs, fat }: MacrosChartProps) => {
  const total = protein + carbs + fat;
  const proteinPercentage = (protein / total) * 100;
  const carbsPercentage = (carbs / total) * 100;
  const fatPercentage = (fat / total) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-semibold text-lg mb-4">Macronutrient Distribution</h3>
      <div className="flex h-4 rounded-full overflow-hidden mb-4">
        <div 
          className="bg-blue-500" 
          style={{ width: `${proteinPercentage}%` }}
          title={`Protein: ${Math.round(proteinPercentage)}%`}
        />
        <div 
          className="bg-green-500" 
          style={{ width: `${carbsPercentage}%` }}
          title={`Carbs: ${Math.round(carbsPercentage)}%`}
        />
        <div 
          className="bg-red-500" 
          style={{ width: `${fatPercentage}%` }}
          title={`Fat: ${Math.round(fatPercentage)}%`}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span>Protein</span>
          </div>
          <p className="font-semibold">{Math.round(protein)}g ({Math.round(proteinPercentage)}%)</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span>Carbs</span>
          </div>
          <p className="font-semibold">{Math.round(carbs)}g ({Math.round(carbsPercentage)}%)</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span>Fat</span>
          </div>
          <p className="font-semibold">{Math.round(fat)}g ({Math.round(fatPercentage)}%)</p>
        </div>
      </div>
    </div>
  );
};

export default MacrosChart;