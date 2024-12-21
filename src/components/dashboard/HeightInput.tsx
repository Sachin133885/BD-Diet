import React from 'react';
import { RulerIcon } from 'lucide-react';

type HeightInputProps = {
  feet: string;
  inches: string;
  onFeetChange: (feet: string) => void;
  onInchesChange: (inches: string) => void;
  onChange: (heightInCm: string) => void;
};

const HeightInput = ({ feet, inches, onFeetChange, onInchesChange, onChange }: HeightInputProps) => {
  const convertToMetric = (newFeet: string, newInches: string) => {
    const totalInches = (parseInt(newFeet) * 12) + parseInt(newInches || '0');
    const cm = Math.round(totalInches * 2.54);
    onChange(cm.toString());
  };

  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFeet = e.target.value;
    onFeetChange(newFeet);
    convertToMetric(newFeet, inches);
  };

  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInches = e.target.value;
    onInchesChange(newInches);
    convertToMetric(feet, newInches);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        <RulerIcon className="inline mr-2 h-4 w-4" />
        Height
      </label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Feet</label>
          <input
            type="number"
            value={feet}
            onChange={handleFeetChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="8"
            placeholder="5"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Inches</label>
          <input
            type="number"
            value={inches}
            onChange={handleInchesChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="11"
            placeholder="8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeightInput;