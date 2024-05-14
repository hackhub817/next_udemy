import "./meal-grid.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className="meals">
      {meals.map((meal) => (
        <li key={meal.id}></li>
      ))}
    </ul>
  );
}
