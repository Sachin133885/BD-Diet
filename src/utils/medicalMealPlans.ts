import type { MealPlan } from './mealPlans';
import type { MedicalCondition } from '../types/health';

const diabeticMealPlan: MealPlan = {
  breakfast: 'Brown rice porridge (50g) with cinnamon, low-fat milk (100ml), boiled egg white (1)',
  midMorningSnack: 'Apple (1 small) or guava (1 medium) with 5 almonds',
  lunch: 'Brown rice (100g), dal (50g), grilled fish (100g), bitter gourd curry (100g)',
  afternoonSnack: 'Roasted chickpeas (30g) or cucumber slices with lemon',
  dinner: 'Multigrain roti (2), vegetable curry without potato (150g), dal (50g)',
  bedtimeSnack: 'Low-fat yogurt (100g) or warm milk without sugar (150ml)'
};

const hypertensionMealPlan: MealPlan = {
  breakfast: 'Oats porridge (50g) with low-fat milk, banana (1 small)',
  midMorningSnack: 'Orange (1) or papaya slices (100g)',
  lunch: 'Brown rice (100g), low-sodium dal (50g), steamed fish (100g), leafy greens (100g)',
  afternoonSnack: 'Unsalted peanuts (20g) or roasted chana',
  dinner: 'Whole wheat roti (2), vegetable curry (150g), low-fat curd (100g)',
  bedtimeSnack: 'Chamomile tea or low-fat milk (150ml)'
};

const heartDiseaseMealPlan: MealPlan = {
  breakfast: 'Multigrain bread (2 slices), egg white omelet, low-fat milk (150ml)',
  midMorningSnack: 'Mixed berries (100g) or pomegranate (1 small)',
  lunch: 'Brown rice (100g), fish curry with minimal oil (100g), mixed vegetables (150g)',
  afternoonSnack: 'Whole grain crackers (2) with hummus',
  dinner: 'Quinoa khichdi (150g), steamed vegetables (150g), dal soup (100ml)',
  bedtimeSnack: 'Green tea or warm low-fat milk (150ml)'
};

const obesityMealPlan: MealPlan = {
  breakfast: 'Vegetable upma (100g), sprouts (50g), green tea',
  midMorningSnack: 'Mixed vegetable soup (200ml) or cucumber-tomato salad',
  lunch: 'Brown rice (80g) or 2 rotis, grilled chicken (100g), vegetables (200g)',
  afternoonSnack: 'Buttermilk (200ml) or green tea with 2 whole grain crackers',
  dinner: 'Vegetable khichdi (150g) or 2 rotis with vegetables (200g)',
  bedtimeSnack: 'Chamomile tea or warm water with lemon'
};

const kidneyMealPlan: MealPlan = {
  breakfast: 'White bread toast (2), scrambled egg whites, apple (1 small)',
  midMorningSnack: 'Boiled vegetables (100g) or unsweetened applesauce',
  lunch: 'White rice (100g), chicken curry (lean meat, 100g), boiled vegetables (100g)',
  afternoonSnack: 'Rice crackers (2) or steamed vegetables',
  dinner: 'Plain roti (2), vegetable curry (low potassium vegetables, 150g)',
  bedtimeSnack: 'Rice puffs (30g) or plain cookies (2)'
};

export const getMedicalMealPlan = (condition: MedicalCondition): MealPlan | null => {
  switch (condition) {
    case 'diabetes':
      return diabeticMealPlan;
    case 'hypertension':
      return hypertensionMealPlan;
    case 'heartDisease':
      return heartDiseaseMealPlan;
    case 'obesity':
      return obesityMealPlan;
    case 'kidney':
      return kidneyMealPlan;
    default:
      return null;
  }
};