export type HealthMetrics = {
  bmr: number;
  tdee: number;
  bmi: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

export type FormData = {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  goal: string;
};