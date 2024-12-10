export type MealPlan = {
  breakfast: string;
  midMorningSnack: string;
  lunch: string;
  afternoonSnack: string;
  dinner: string;
  bedtimeSnack: string;
};

export const getMealPlan = (age: number, goal: string): MealPlan => {
  // Age group 1-5
  if (age >= 1 && age <= 5) {
    if (age === 1) {
      return {
        breakfast: 'Mashed khichuri (lentils 30g, rice 40g, vegetables 20g) with a soft-boiled egg (1 piece, 50g)',
        midMorningSnack: 'Ripe banana slices (1 medium banana, 80g) or homemade suji halwa (semolina 30g, milk 50ml)',
        lunch: 'Steamed rice (60g), mashed fish (ilish or rui, 30g), and puree of spinach (25g) or carrots (25g)',
        afternoonSnack: 'Ripe banana slices (1 medium banana, 80g) or homemade suji halwa (semolina 30g, milk 50ml)',
        dinner: 'Soft chapati (30g), daal (50ml), and mashed pumpkin (30g)',
        bedtimeSnack: 'Breastfeeding: 2–3 times/day'
      };
    } else if (age === 2) {
      return {
        breakfast: 'Paratha (40g), mashed boiled egg (50g), and cucumber slices (30g)',
        midMorningSnack: 'Seasonal fruit (50g) or yogurt (50g) with molasses (5g)',
        lunch: 'Rice (80g) with chicken curry (50g), and cooked beans (25g) or lauki (25g)',
        afternoonSnack: 'Seasonal fruit (50g) or yogurt (50g) with molasses (5g)',
        dinner: 'Mashed potatoes (50g), green beans (25g), and rice (60g)',
        bedtimeSnack: 'Breastfeeding: 1–2 times/day (optional)'
      };
    } else if (age <= 5) {
      return {
        breakfast: 'Vegetable omelette (1 egg, 50g) with paratha (50g) and milk (150ml)',
        midMorningSnack: 'Fruit salad (100g) or puffed rice (50g) with peanuts (10g)',
        lunch: 'Rice (100g), beef curry (70g), boiled egg (50g), and cooked pumpkin (25g)',
        afternoonSnack: 'Fruit salad (100g) or puffed rice (50g) with peanuts (10g)',
        dinner: 'Fish curry (60g), rice (100g), and boiled vegetables (40g)',
        bedtimeSnack: 'Milk (100ml) with honey (5g)'
      };
    }
  }

  // Age group 5-10
  if (age > 5 && age <= 10) {
    return {
      breakfast: 'Paratha (50g), fried egg (1 piece), and milk (150ml)',
      midMorningSnack: 'Misti Doi (Sweet Yogurt) 100g, Banana or Papaya slices 1 serving',
      lunch: 'Rice (100g), fish curry (ilish or rui, 60g), and spinach mash (30g)',
      afternoonSnack: 'Banana (100g) or puffed rice (50g) with jaggery (10g)',
      dinner: 'Rice (80g), chicken curry (70g), and boiled vegetables (40g)',
      bedtimeSnack: 'Coconut Water 150ml'
    };
  }

  // Age group 10-15
  if (age > 10 && age <= 15) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Beguni (Fried Eggplant) 75g, Boiled Egg 1',
        midMorningSnack: 'Misti Doi 100g, Apple or Orange 1 serving',
        lunch: 'Kacchi Biryani 250g, Shutki Bhuna 50g, Shak Bharta 60g',
        afternoonSnack: 'Singara 2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 60g, Plain Dal 75g',
        bedtimeSnack: 'Coconut Water 150ml, Pati Shapta (Dessert) 1 piece'
      };
    }
  }

  // Age group 15-20
  if (age > 15 && age <= 20) {
    if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 2, Beguni (Fried Eggplant) 75g',
        midMorningSnack: 'Misti Doi 100g, Banana or Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 60g, Shak Bharta 75g',
        afternoonSnack: 'Singara 2-3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    } else if (goal === 'bulk') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Boiled Egg 2, Beguni (Fried Eggplant) 100g',
        midMorningSnack: 'Misti Doi 100g, Banana or Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    }
  }

  // Age group 20-30
  if (age > 20 && age <= 30) {
    if (goal === 'bulk') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 100g, Boiled Egg 2-3, Beguni (Fried Eggplant) 100g',
        midMorningSnack: 'Misti Doi 150g, Apple or Pear 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 2-3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    } else if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 2, Beguni (Fried Eggplant) 75g',
        midMorningSnack: 'Misti Doi 100g, Banana or Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 60g, Shak Bharta 75g',
        afternoonSnack: 'Singara 2-3 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml, Pati Shapta (Dessert) 1 piece'
      };
    }
  }

  // Age group 30-40
  if (age > 30 && age <= 40) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 100g, Boiled Egg 2',
        midMorningSnack: 'Misti Doi 150g, Orange or Grapes 1 serving',
        lunch: 'Kacchi Biryani 350g, Shutki Bhuna 75g, Shak Bharta 100g',
        afternoonSnack: 'Singara 2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 200g, Hilsha Curry 150g, Aloo Bharta 100g, Plain Dal 125g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    } else if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 75g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 50g, Shak Bharta 100g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    }
  }

  // Age group 40-60
  if (age > 40 && age <= 60) {
    if (goal === 'maintain') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 75g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 300g, Shutki Bhuna 50g, Shak Bharta 100g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 100g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 100g',
        bedtimeSnack: 'Coconut Water 200ml'
      };
    } else if (goal === 'cut') {
      return {
        breakfast: 'Rice (Bhat) 200g, Dal (Plain) 125g, Beguni (Fried Eggplant) 50g, Boiled Egg 1-2',
        midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
        lunch: 'Kacchi Biryani 250g, Shutki Bhuna 40g, Shak Bharta 75g',
        afternoonSnack: 'Singara 1-2 pieces, Chotpoti 75g',
        dinner: 'Rice (Bhat) 150g, Hilsha Curry 80g, Aloo Bharta 50g, Plain Dal 75g',
        bedtimeSnack: 'Coconut Water 150ml'
      };
    }
  }

  // Age group 60+
  if (age > 60) {
    return {
      breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Beguni (Fried Eggplant) 50g, Boiled Egg 1',
      midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
      lunch: 'Kacchi Biryani 200g, Shutki Bhuna 40g, Shak Bharta 60g',
      afternoonSnack: 'Singara 1 piece, Chotpoti 75g',
      dinner: 'Rice (Bhat) 150g, Hilsha Curry 80g, Aloo Bharta 50g, Plain Dal 75g',
      bedtimeSnack: 'Coconut Water 150ml'
    };
  }

  // Default meal plan for any unmatched combinations
  return {
    breakfast: 'Rice (Bhat) 150g, Dal (Plain) 100g, Boiled Egg 1',
    midMorningSnack: 'Misti Doi 100g, Seasonal Fruit 1 serving',
    lunch: 'Kacchi Biryani 250g, Shutki Bhuna 50g, Shak Bharta 75g',
    afternoonSnack: 'Singara 1 piece, Chotpoti 75g',
    dinner: 'Rice (Bhat) 150g, Hilsha Curry 100g, Aloo Bharta 75g, Plain Dal 75g',
    bedtimeSnack: 'Coconut Water 150ml'
  };
};