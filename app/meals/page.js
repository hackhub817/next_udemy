import Link from "next/link";
import "./page.css";

export default function MealPage() {
  return (
    <>
      <header className="header">
        <h1>Delicious meals, created </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="cta"></p>
        <Link href="/meals/share">Share Your favorite Recipe</Link>
      </header>
      <span className="highlight">by you</span>
      <main className="main"></main>
    </>
  );
}
