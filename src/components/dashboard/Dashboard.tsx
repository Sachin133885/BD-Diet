import React, { useState } from 'react';
import { calculateBMR, calculateTDEE, calculateMacros, calculateBMI } from '../../utils/calculations';
import { getMealPlan } from '../../utils/mealPlans';
import type { FormData, HealthMetrics } from '../../types/health';
import type { MealPlan } from '../../types/meal';
import CalculatorForm from './CalculatorForm';
import MetricsDisplay from './MetricsDisplay';
import MealPlanCard from '../shared/MealPlanCard';
import MedicalAlert from './MedicalAlert';

const Dashboard = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: ''
  });

  const [results, setResults] = useState<{
    metrics?: HealthMetrics;
    mealPlan?: MealPlan;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { age, gender, weight, height, activityLevel, goal } = formData;

    const bmr = calculateBMR(Number(weight), Number(height), Number(age), gender);
    const tdee = calculateTDEE(bmr, activityLevel);
    const macros = calculateMacros(tdee, goal, Number(age));
    const bmi = calculateBMI(Number(weight), Number(height));
    const mealPlan = getMealPlan(Number(age), goal);

    setResults({
      metrics: { bmr, tdee, bmi, macros },
      mealPlan
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bangladeshi Health & Nutrition Dashboard</h1>
        <p className="text-gray-600">Calculate your BMI, BMR, and get a personalized Bengali meal plan</p>
      </div>

      <CalculatorForm 
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {results.metrics && (
        <div className="space-y-12">
          {results.metrics.bmi >= 30 && (
            <MedicalAlert bmi={results.metrics.bmi} />
          )}
          
          <MetricsDisplay {...results.metrics} />
          
          {results.mealPlan && (
            <div className="mt-8">
              <MealPlanCard 
                mealPlan={results.mealPlan} 
                goal={formData.goal}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;