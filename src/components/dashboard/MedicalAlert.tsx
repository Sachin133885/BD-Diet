import React from 'react';
import { AlertTriangle } from 'lucide-react';

type MedicalAlertProps = {
  bmi: number;
};

const MedicalAlert = ({ bmi }: MedicalAlertProps) => {
  if (bmi < 30) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
        <div>
          <h3 className="text-sm font-medium text-yellow-800">
            Health Alert
          </h3>
          <p className="mt-1 text-sm text-yellow-700">
            Your BMI indicates obesity. Consider consulting a healthcare provider for personalized advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalAlert;