// BMR calculation utility
export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: string
): number => {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender.toLowerCase() === 'm' ? base + 5 : base - 161;
};

// TDEE calculation utility
export const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const multipliers = {
    s: 1.2,  // Sedentary
    m: 1.55, // Moderate
    a: 1.75, // Active
  };
  return bmr * (multipliers[activityLevel as keyof typeof multipliers] || 1.2);
};

// Macros calculation utility
export const calculateMacros = (
  tdee: number,
  goal: string,
  age: number
): { protein: number; carbs: number; fat: number } => {
  let proteinRatio = 0.2;
  let carbRatio = 0.5;
  let fatRatio = 0.3;

  if (goal === 'cut') {
    proteinRatio = 0.4;
    carbRatio = 0.3;
    fatRatio = 0.3;
  } else if (goal === 'bulk') {
    if (age <= 35) {
      proteinRatio = 0.35;
      carbRatio = 0.45;
      fatRatio = 0.2;
    } else {
      proteinRatio = 0.3;
      carbRatio = 0.4;
      fatRatio = 0.3;
    }
  }

  return {
    protein: (tdee * proteinRatio) / 4,
    carbs: (tdee * carbRatio) / 4,
    fat: (tdee * fatRatio) / 9,
  };
};