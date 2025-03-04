import postgres from "postgres";
import { Category, Product } from "./types";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchCategories() {
  try {
    const start = Date.now();

    const data = await sql<Category[]>`SELECT * FROM categories`;

    const end = Date.now();
    const time = end - start;

    console.log(`Categories data fetched in ${time}ms`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch category data.");
  }
}

// Fetch Category by Slug
export async function fetchCategoryBySlug(
  slug: string
): Promise<Category | null> {
  try {
    const start = Date.now();

    const data = await sql<
      Category[]
    >`SELECT * FROM categories WHERE slug = ${slug}`;

    const end = Date.now();
    const time = end - start;

    console.log(`Category data fetched in ${time}ms`);

    return data[0] || null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch category data.");
  }
}

// Fetch products by category slug
export async function fetchProductsByCategorySlug(
  slug: string
): Promise<Product[]> {
  try {
    const start = Date.now();

    const data = await sql<Product[]>`
      SELECT p.*
      FROM products AS p
      LEFT JOIN categories AS c ON p.category_id = c.id
      WHERE c.slug = ${slug}
    `;

    const end = Date.now();
    const time = end - start;

    console.log(`Products data fetched in ${time}ms`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

// Fetch product by id
export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const start = Date.now();

    const data = await sql<Product[]>`SELECT * FROM products WHERE id = ${id}`;

    const end = Date.now();
    const time = end - start;

    console.log(`Product data fetched in ${time}ms`);

    return data[0] || null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}
