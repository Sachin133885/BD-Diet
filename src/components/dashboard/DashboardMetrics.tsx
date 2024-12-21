import React from 'react';
import { Activity, Scale, User, Flame, Dumbbell, Apple, Heart } from 'lucide-react';
import ResultCard from '../shared/ResultCard';
import MacrosChart from '../shared/MacrosChart';

type MetricsProps = {
  bmr?: number;
  tdee?: number;
  bmi?: number;
  macros?: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

const DashboardMetrics = ({ bmr, tdee, bmi, macros }: MetricsProps) => {
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getBMIColor = (bmi: number) => {
    if (bmi < 18.5) return 'text-yellow-600';
    if (bmi < 25) return 'text-green-600';
    if (bmi < 30) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bmi && (
          <ResultCard
            title="Body Mass Index (BMI)"
            value={
              <div className="space-y-1">
                <div>{bmi.toFixed(1)}</div>
                <div className={`text-sm ${getBMIColor(bmi)}`}>
                  {getBMICategory(bmi)}
                </div>
              </div>
            }
            icon={<Heart className="h-6 w-6" />}
          />
        )}
        {bmr && (
          <ResultCard
            title="Basal Metabolic Rate"
            value={`${Math.round(bmr)} kcal/day`}
            icon={<Flame className="h-6 w-6" />}
          />
        )}
        {tdee && (
          <ResultCard
            title="Total Daily Energy"
            value={`${Math.round(tdee)} kcal/day`}
            icon={<Activity className="h-6 w-6" />}
          />
        )}
        {macros && (
          <ResultCard
            title="Daily Protein Target"
            value={`${Math.round(macros.protein)}g`}
            icon={<Apple className="h-6 w-6" />}
          />
        )}
      </div>

      {macros && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MacrosChart
            protein={macros.protein}
            carbs={macros.carbs}
            fat={macros.fat}
          />
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
        </div>
      )}
    </div>
  );
};

export default DashboardMetrics;