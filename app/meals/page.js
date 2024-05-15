import Link from "next/link";
import "./page.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/libs/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealPage() {
  return (
    <>
      <header className="header">
        <h1>
          Delicious meals, created <span className="highlight">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="cta">
          <Link href="/meals/share">Share Your favorite Recipe</Link>
        </p>
      </header>

      <main className="main">
        <Suspense fallback={<p className="loading"> Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
