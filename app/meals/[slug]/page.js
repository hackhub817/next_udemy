import Image from "next/image";
import { getMeal } from "@/libs/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default function extrameal({ params }) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}></div>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
