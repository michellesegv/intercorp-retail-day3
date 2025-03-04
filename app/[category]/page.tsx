import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Container } from "@/components/ui";
import { PriceFilter } from "@/components/category/price-filter";
import { ProductCard } from "@/components/category/product-card";
import { Empty } from "@/components/ui";
import { fetchCategoryBySlug, fetchProductsByCategorySlug } from "@/lib/data";

export default async function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { minPrice?: string; maxPrice?: string };
}) {
  const { category: categorySlug } = params;
  const minPrice = searchParams.minPrice ? +searchParams.minPrice : undefined;
  const maxPrice = searchParams.maxPrice ? +searchParams.maxPrice : undefined;

  const category = await fetchCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = await fetchProductsByCategorySlug(
    categorySlug,
    minPrice,
    maxPrice
  );

  const hasProducts = products.length > 0;

  return (
    <>
      <section className={styles.header}>
        <Container>
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>{category.title}</h1>
            <p className={styles.header__description}>{category.description}</p>
          </div>
        </Container>
      </section>
      <section className={styles.products}>
        <Container>
          <div className={styles.products__layout}>
            <PriceFilter className={styles["products__price-filter"]} />
            {hasProducts ? (
              <div className={styles.products__grid}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Empty message="No products found. Try adjusting your filters." />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
