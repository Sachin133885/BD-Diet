import React, { useState } from 'react';
import { Activity, Scale, User, Dumbbell } from 'lucide-react';
import HeightInput from './HeightInput';
import type { FormData } from '../../types/health';

type CalculatorFormProps = {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const CalculatorForm = ({ formData, onChange, onSubmit }: CalculatorFormProps) => {
  const [feet, setFeet] = useState('5');
  const [inches, setInches] = useState('8');

  const handleHeightChange = (heightInCm: string) => {
    onChange({
      target: {
        name: 'height',
        value: heightInCm
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl shadow-lg mb-12 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            <User className="inline mr-2 h-4 w-4" />
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={onChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
            max="120"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={onChange}
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
            onChange={onChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
            max="300"
            step="0.1"
          />
        </div>

        <HeightInput 
          feet={feet}
          inches={inches}
          onFeetChange={setFeet}
          onInchesChange={setInches}
          onChange={handleHeightChange}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            <Activity className="inline mr-2 h-4 w-4" />
            Activity Level
          </label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={onChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Activity Level</option>
            <option value="s">Sedentary (Little or no exercise)</option>
            <option value="m">Moderate (Exercise 3-5 times/week)</option>
            <option value="a">Active (Daily exercise or intense exercise)</option>
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
            onChange={onChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Goal</option>
            <option value="cut">Weight Loss</option>
            <option value="maintain">Maintain Weight</option>
            <option value="bulk">Gain Weight</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
      >
        Calculate Your Plan
      </button>
    </form>
  );
}

export default CalculatorForm;