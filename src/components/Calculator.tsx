import React from 'react';
import { useState } from 'react';
import { calculateBMR, calculateTDEE, calculateMacros } from '../utils/calculations';
import { getMealPlan } from '../utils/mealPlans';
import type { MealPlan } from '../utils/mealPlans';
import { Activity, Scale, User, Flame, Dumbbell, Apple } from 'lucide-react';
import ResultCard from './shared/ResultCard';
import MacrosChart from './shared/MacrosChart';
import MealPlanCard from './shared/MealPlanCard';

const Calculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: '',
  });

  const [results, setResults] = useState<{
    bmr?: number;
    tdee?: number;
    macros?: { protein: number; carbs: number; fat: number };
    mealPlan?: MealPlan;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { age, gender, weight, height, activityLevel, goal } = formData;

    const bmr = calculateBMR(Number(weight), Number(height), Number(age), gender);
    const tdee = calculateTDEE(bmr, activityLevel);
    const macros = calculateMacros(tdee, goal, Number(age));
    const mealPlan = getMealPlan(Number(age), goal);

    setResults({ bmr, tdee, macros, mealPlan });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bangladeshi Diet & Nutrition Calculator</h1>
        <p className="text-gray-600">Calculate your personalized meal plan based on Bengali cuisine</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              <User className="inline mr-2 h-4 w-4" />
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              <Scale className="inline mr-2 h-4 w-4" />
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              <Activity className="inline mr-2 h-4 w-4" />
              Activity Level
            </label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Activity Level</option>
              <option value="s">Sedentary</option>
              <option value="m">Moderate</option>
              <option value="a">Active</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              <Dumbbell className="inline mr-2 h-4 w-4" />
              Goal
            </label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Goal</option>
              <option value="cut">Cut</option>
              <option value="maintain">Maintain</option>
              <option value="bulk">Bulk</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
        >
          Calculate Your Plan
        </button>
      </form>

      {results.bmr && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResultCard
              title="Basal Metabolic Rate"
              value={`${Math.round(results.bmr)} kcal/day`}
              icon={<Flame className="h-6 w-6" />}
            />
            <ResultCard
              title="Total Daily Energy"
              value={`${Math.round(results.tdee!)} kcal/day`}
              icon={<Activity className="h-6 w-6" />}
            />
            <ResultCard
              title="Daily Protein Target"
              value={`${Math.round(results.macros!.protein)}g`}
              icon={<Apple className="h-6 w-6" />}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MacrosChart
              protein={results.macros!.protein}
              carbs={results.macros!.carbs}
              fat={results.macros!.fat}
            />
            {results.mealPlan && (
              <MealPlanCard mealPlan={results.mealPlan} goal={formData.goal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;