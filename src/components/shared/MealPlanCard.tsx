import React from 'react';
import type { MealPlan } from '../../types/meal';

type MealPlanCardProps = {
  mealPlan: MealPlan;
  goal: string;
};

const MealPlanCard = ({ mealPlan, goal }: MealPlanCardProps) => {
  const getGoalColor = (goal: string) => {
    switch (goal.toLowerCase()) {
      case 'bulk':
        return 'bg-blue-50 border-blue-200';
      case 'cut':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-green-50 border-green-200';
    }
  };

  return (
    <div className={`rounded-lg shadow-lg border-2 ${getGoalColor(goal)} p-6`}>
      <h3 className="text-xl font-semibold mb-6 text-center">
        Recommended Bengali Meal Plan
        <span className="block text-sm font-normal mt-1 text-gray-600">
          Goal: {goal.charAt(0).toUpperCase() + goal.slice(1)}
        </span>
      </h3>
      
      <div className="space-y-6">
        {Object.entries(mealPlan).map(([meal, items]) => (
          <div key={meal} className="border-b pb-4 last:border-b-0">
            <h4 className="font-medium text-lg mb-2 capitalize">
              {meal.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-gray-600">{items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanCard;