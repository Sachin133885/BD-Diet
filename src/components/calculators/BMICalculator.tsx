import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import ResultCard from '../shared/ResultCard';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI);

    // Determine BMI category
    if (calculatedBMI < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setCategory('Normal weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">BMI Calculator</h2>
        <p className="mt-2 text-gray-600">Calculate your Body Mass Index</p>
      </div>

      <form onSubmit={calculateBMI} className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Calculate BMI
        </button>
      </form>

      {bmi !== null && (
        <div className="space-y-6">
          <ResultCard
            title="Your BMI"
            value={bmi.toFixed(1)}
            icon={<Scale className="h-6 w-6" />}
          />
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Category: {category}</h3>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  category === 'Normal weight'
                    ? 'bg-green-500'
                    : category === 'Underweight'
                    ? 'bg-yellow-500'
                    : category === 'Overweight'
                    ? 'bg-orange-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${(bmi / 40) * 100}%` }}
              />
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>BMI Categories:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Underweight: &lt; 18.5</li>
                <li>Normal weight: 18.5 - 24.9</li>
                <li>Overweight: 25 - 29.9</li>
                <li>Obese: ≥ 30</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;