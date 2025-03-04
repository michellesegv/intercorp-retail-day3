import postgres from "postgres";
import { Cart, Category, Product } from "./types";

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
  slug: string,
  minPrice: number = 0,
  maxPrice: number = 999999
): Promise<Product[]> {
  try {
    const start = Date.now();

    const data = await sql<Product[]>`
      SELECT p.*
      FROM products AS p
      LEFT JOIN categories AS c ON p.category_id = c.id
      WHERE c.slug = ${slug} AND p.price BETWEEN ${minPrice} AND ${maxPrice}
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

// Fetch cart or create it if not exists
export async function fetchOrCreateCart(sessionId: string) {
  try {
    const start = Date.now();

    const data = await sql<Cart[]>`
      SELECT * FROM carts WHERE session_id = ${sessionId}
    `;

    let cart = data[0];
    if (!cart) {
      const data = await sql<Cart[]>`
      INSERT INTO carts (user_id, session_id)
      VALUES (NULL, ${sessionId})
      RETURNING *`;

      cart = data[0];
    }

    const end = Date.now();
    const time = end - start;
    console.log(`Cart data fetched in ${time}ms`);
    return cart;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch or create cart.");
  }
}

// Create or Update cart item
export async function createOrUpdateCartItem(
  cartId: number,
  productId: number,
  quantity: number
) {
  try {
    const start = Date.now();

    await sql`
      INSERT INTO cart_items (cart_id, product_id, quantity)
      VALUES (${cartId}, ${productId}, ${quantity})
      ON CONFLICT (cart_id, product_id) 
      DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity
    `;

    const end = Date.now();
    const time = end - start;

    console.log(`Cart items count fetched in ${time}ms`);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart items count.");
  }
}

// fetch cart items count by session id
export async function fetchCartItemsCount(sessionId: string): Promise<number> {
  try {
    const start = Date.now();

    const data = await sql`
      SELECT SUM(quantity) as total FROM cart_items
      JOIN carts ON cart_items.cart_id = carts.id
      WHERE carts.session_id = ${sessionId}
    `;

    const end = Date.now();
    const time = end - start;

    console.log(`Cart items count fetched in ${time}ms`);

    return Number(data[0]?.total || 0);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart items count.");
  }
}
