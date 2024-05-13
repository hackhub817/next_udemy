import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="meal">
      <header>
        <div className="image">
          <Image src={image} alt={title} fill />
        </div>
        <div className="headerText">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="content">
        <p className="summary">{summary}</p>
        <div className="actions">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
