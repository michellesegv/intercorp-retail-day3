import { notFound } from "next/navigation";

const VALID_CATEGORIES = ["polos", "tazas", "stickers"];

export default function Page({ params }: { params: { category: string } }) {
  if (!VALID_CATEGORIES.includes(params.category)) {
    notFound();
  }

  return (
    <div>
      <h1>Category: {params.category}</h1>
      <ul>
        <li>
          <a href="/products/1">Product 1</a>
        </li>
        <li>
          <a href="/products/2">Product 2</a>
        </li>
        <li>
          <a href="/products/3">Product 3</a>
        </li>
      </ul>
    </div>
  );
}
