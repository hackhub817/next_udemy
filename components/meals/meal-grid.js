import "./meal-grid.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="meals">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
